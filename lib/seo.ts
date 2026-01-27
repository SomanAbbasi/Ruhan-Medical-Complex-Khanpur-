
export function title(t: string) {
  return `${t} | Rohan Medical`;
}
import { Metadata } from "next";
import { hospitalInfo } from "@/data/doctors";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function generateSEOMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/og-image.jpg"
}: GenerateMetadataProps): Metadata {
  const url = `https://ruhanmedical.com${path}`;
  
  return {
    title: `${title} | Ruhan Medical Complex`,
    description: description,
    keywords: [
      "hospital",
      "Khanpur",
      "Rahim Yar Khan",
      "Pakistan",
      "medical complex",
      "doctor",
      ...keywords
    ],
    metadataBase: new URL("https://ruhanmedical.com"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
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
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
    },
  
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}