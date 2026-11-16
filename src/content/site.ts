/**
 * Verified company facts. Update contact delivery in the environment, not here.
 * Do not add emails, phone numbers, client logos, or metrics that were not supplied.
 *
 * Illustrative photography (Unsplash License, not Momentum projects):
 * event-conference  photo-1540575467063-178a50c2df87
 * event-room        photo-1511578314322-379afb476865
 * marketing         photo-1553877522-43269d4ea984
 * branding          photo-1561070791-2526d30994b5
 * consultancy       photo-1486406146926-c627a92ad1ab
 */

export const company = {
  name: "Momentum",
  philosophy: "Make Them Care.",
  founded: "2026",
  linkedin: "https://www.linkedin.com/company/momentumkwt/",
  email: null as string | null,
  phone: null as string | null,
  address: ["Salem Al-Mubarak Street", "7th Floor, Office 29", "Salmiya, Kuwait"],
  addressAr: ["شارع سالم المبارك", "الطابق السابع، مكتب 29", "السالمية، الكويت"],
  locality: "Salmiya",
  country: "Kuwait",
  countryCode: "KW",
  founder: {
    name: "Salem Alsanea",
    nameAr: "سالم الصانع",
    role: "Co-Founder & CEO",
    roleAr: "الشريك المؤسس والرئيس التنفيذي",
    linkedin: "https://www.linkedin.com/in/salemalsanea/",
    photo: "/brand/salem.jpg",
  },
} as const;

export const attribution = {
  prefix: "Made by",
  prefixAr: "من تنفيذ",
  name: "Bakseez Labs",
  logo: "/brand/bakseez-labs.png",
  logoWidth: 788,
  logoHeight: 560,
} as const;

export function addressLines(locale: "en" | "ar") {
  return locale === "ar" ? company.addressAr : company.address;
}

export function founderName(locale: "en" | "ar") {
  return locale === "ar" ? company.founder.nameAr : company.founder.name;
}

export function founderRole(locale: "en" | "ar") {
  return locale === "ar" ? company.founder.roleAr : company.founder.role;
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
