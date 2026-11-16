"use server";

import { cookies } from "next/headers";

export async function setLocale(locale: string) {
  if (locale !== "en" && locale !== "ar") return;
  const jar = await cookies();
  jar.set("momentum-locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
