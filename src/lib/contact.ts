export const serviceIds = [
  "event-management",
  "marketing",
  "business-consultancy",
  "branding",
  "unsure",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
  company_url?: string;
  elapsed?: number;
};

export type FieldKey = "name" | "company" | "email" | "service" | "message";
export type ErrorCode = "required" | "invalid" | "short" | "long";
export type FieldErrors = Partial<Record<FieldKey, ErrorCode>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactPayload): FieldErrors {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const company = input.company.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (name.length < 2) errors.name = "required";
  else if (name.length > 80) errors.name = "long";

  if (company.length < 2) errors.company = "required";
  else if (company.length > 120) errors.company = "long";

  if (!email) errors.email = "required";
  else if (!emailPattern.test(email) || email.length > 120) errors.email = "invalid";

  if (!serviceIds.includes(input.service as ServiceId)) errors.service = "required";

  if (message.length < 12) errors.message = "short";
  else if (message.length > 2000) errors.message = "long";

  return errors;
}

export function contactIsConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL);
}

export function cleanLine(value: string, max: number) {
  return value.replace(/[\u0000-\u001F]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}
