import { Metadata } from "next";
import { hospitalInfo } from "@/data/doctors";

/* --------------------------------------------------
   Helper: Title Formatter
-------------------------------------------------- */
export function title(t: string) {
  return `${t} | Ruhan Medical Complex`;
}

/* --------------------------------------------------
   Types
-------------------------------------------------- */
interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

/* --------------------------------------------------
   MAIN SEO GENERATOR (FIXED DOMAIN)
-------------------------------------------------- */
export function generateSEOMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "https://ruhanmedicalcomplex.com/logo1.png",
}: GenerateMetadataProps): Metadata {
  const BASE_URL = "https://ruhanmedicalcomplex.com";
  const url = `${BASE_URL}${path}`;

  return {
    /*  BASIC SEO */
    title: `${title} | Ruhan Medical Complex`,
    description,

    keywords: [
      "hospital",
      "Khanpur",
      "Rahim Yar Khan",
      "Pakistan",
      "medical complex",
      "doctor",
      ...keywords,
    ],

    /*  FORCE CORRECT DOMAIN */
    metadataBase: new URL(BASE_URL),

    alternates: {
      canonical: url,
    },

    /*  OPEN GRAPH (WHATSAPP / FB / LINK PREVIEW FIX) */
    openGraph: {
      title,
      description,
      url,
      siteName: hospitalInfo.name,
      locale: "en_PK",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    /*  TWITTER / X */
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },

    /*  CRAWLING CONTROL */
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}
