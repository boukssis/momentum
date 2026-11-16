import { NextResponse } from "next/server";
import { cleanLine, contactIsConfigured, serviceIds, validateContact, type ContactPayload, type ServiceId } from "@/lib/contact";

function asPayload(value: unknown): ContactPayload {
  const record = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const read = (key: string) => (typeof record[key] === "string" ? record[key] : "");
  const elapsed = typeof record.elapsed === "number" ? record.elapsed : Number(record.elapsed);
  return {
    name: read("name"),
    company: read("company"),
    email: read("email"),
    service: read("service"),
    message: read("message"),
    company_url: read("company_url"),
    elapsed: Number.isFinite(elapsed) ? elapsed : 0,
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = asPayload(await request.json());
  } catch {
    return NextResponse.json({ ok: false, status: "invalid" }, { status: 400 });
  }

  if ((payload.company_url ?? "").trim() || (payload.elapsed ?? 0) < 800) {
    return NextResponse.json({ ok: false, status: "invalid" }, { status: 400 });
  }

  const errors = validateContact(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, status: "invalid", errors }, { status: 400 });
  }

  if (!contactIsConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        status: "not_configured",
        message: "Email delivery is not configured. The message was not sent.",
      },
      { status: 503 },
    );
  }

  const name = cleanLine(payload.name, 80);
  const email = cleanLine(payload.email, 120);
  const organisation = cleanLine(payload.company, 120);
  const service = serviceIds.includes(payload.service as ServiceId) ? payload.service : "unsure";
  const text = [`Name: ${name}`, `Email: ${email}`, `Company: ${organisation}`, `Service: ${service}`, "", cleanLine(payload.message, 2000)].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Momentum enquiry — ${name}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, status: "delivery_failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, status: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, status: "sent" });
}
