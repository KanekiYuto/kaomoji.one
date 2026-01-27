import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://kaomoji.one";

function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = raw?.trim();
  if (!trimmed) return DEFAULT_SITE_URL;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  return `https://${trimmed}`;
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
}

export function getMetadataBase(): URL {
  const siteUrl = getSiteUrl();
  try {
    return new URL(siteUrl);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}

export function withCanonical(
  canonicalPath: string,
): Pick<Metadata, "metadataBase" | "alternates"> {
  const canonical = canonicalPath.startsWith("/")
    ? canonicalPath
    : `/${canonicalPath}`;

  return {
    metadataBase: getMetadataBase(),
    alternates: { canonical },
  };
}

