"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { company } from "@/content/site";
import { validateContact, type ErrorCode, type FieldErrors, type FieldKey } from "@/lib/contact";
import type { Dictionary } from "@/content/dictionary";

type Status = "idle" | "submitting" | "sent" | "not_configured" | "failed" | "invalid";

export function ContactForm({
  t,
  options,
}: {
  t: Dictionary;
  options: { id: string; label: string }[];
}) {
  const started = useRef(Date.now());
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const copy = t.contact;

  function message(field: FieldKey, code: ErrorCode) {
    if (code === "long") return copy.errors.long;
    if (field === "email" && code === "invalid") return copy.errors.email;
    return copy.errors[field];
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      email: String(form.get("email") ?? ""),
      service: String(form.get("service") ?? ""),
      message: String(form.get("message") ?? ""),
      company_url: String(form.get("company_url") ?? ""),
      elapsed: Date.now() - started.current,
    };
    const nextErrors = validateContact(payload);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("invalid");
      const first = Object.keys(nextErrors)[0];
      if (first) document.getElementById(first)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { status?: string; errors?: FieldErrors };
      if (data.status === "sent") {
        setStatus("sent");
        event.currentTarget.reset();
        return;
      }
      if (data.status === "not_configured") {
        setStatus("not_configured");
        return;
      }
      if (data.errors) {
        setErrors(data.errors);
        setStatus("invalid");
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  const statusText =
    status === "sent"
      ? copy.status.sent
      : status === "not_configured"
        ? copy.status.notConfigured
        : status === "failed"
          ? copy.status.failed
          : status === "invalid"
            ? copy.status.invalid
            : "";

  return (
    <form aria-label={copy.formLabel} noValidate onSubmit={onSubmit} className="space-y-8">
      <Field id="name" name="name" label={copy.name} autoComplete="name" error={errors.name ? message("name", errors.name) : undefined} />
      <Field id="company" name="company" label={copy.company} autoComplete="organization" error={errors.company ? message("company", errors.company) : undefined} />
      <Field id="email" name="email" type="email" label={copy.email} autoComplete="email" dir="ltr" error={errors.email ? message("email", errors.email) : undefined} />

      <fieldset id="service" tabIndex={-1} aria-describedby={errors.service ? "service-error" : undefined}>
        <legend className="kicker text-quiet">{copy.service}</legend>
        <div className="mt-3 border-t border-ink/15">
          {options.map((option) => (
            <label key={option.id} className="flex cursor-pointer items-center gap-4 border-b border-ink/15 py-3.5 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-orange">
              <input
                type="radio"
                name="service"
                value={option.id}
                className="peer h-4 w-4 accent-orange"
              />
              <span className="peer-checked:font-semibold">{option.label}</span>
            </label>
          ))}
        </div>
        {errors.service ? (
          <p id="service-error" className="mt-2 text-sm text-danger">
            {message("service", errors.service)}
          </p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor="message" className="kicker text-quiet">
          {copy.message}
        </label>
        <textarea id="message" name="message" rows={5} className="field mt-2 min-h-36 resize-y" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-danger">
            {message("message", errors.message)}
          </p>
        ) : null}
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_url">Company website</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center bg-ink px-6 py-3 font-semibold text-ivory transition-colors hover:bg-orange hover:text-ink disabled:opacity-60"
        >
          {status === "submitting" ? copy.sending : copy.send}
        </button>
        <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="link-line text-sm font-semibold">
          {copy.linkedinCta}
          <span className="sr-only"> {t.a11y.newTab}</span>
        </a>
      </div>

      <p role={status === "sent" ? "status" : "alert"} aria-live="polite" className="min-h-6 text-sm leading-relaxed">
        {statusText}
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  error,
  type = "text",
  autoComplete,
  dir,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <div>
      <label htmlFor={id} className="kicker text-quiet">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        dir={dir}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="field"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
