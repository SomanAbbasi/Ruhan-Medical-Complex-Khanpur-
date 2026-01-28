import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmergencyBar } from "@/components/EmergencyBar";
import { HospitalSchema } from "@/components/HospitalSchema";
import { generateSEOMetadata } from "@/lib/seo";

/* Fonts */
const inter = Inter({ subsets: ["latin"] });

const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urdu",
});

/* ===============================
   GLOBAL SEO + ICON METADATA
   =============================== */
export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Best Hospital in Khanpur | 24/7 Emergency & Specialist Doctors",
    description:
      "Ruhan Medical Complex - Leading hospital in Khanpur, Rahim Yar Khan with expert ENT surgeons, child specialists, physicians, and radiologists. 24/7 emergency services available.",
    path: "/",
    keywords: [
      "best hospital khanpur",
      "hospital rahim yar khan",
      "ENT specialist khanpur",
      "child specialist khanpur",
      "24/7 emergency hospital",
    ],
  }),

  /*  FAVICONS (Browser + Google SERP) */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  /*  OPEN GRAPH (WhatsApp / Facebook / Instagram) */
  openGraph: {
    title: "Ruhan Medical Complex - Best Hospital in Khanpur",
    description:
      "Leading hospital in Khanpur with expert specialist doctors and 24/7 emergency services.",
    url: "https://ruhanmedicalcomplex.com",
    siteName: "Ruhan Medical Complex",
    images: [
      {
        url: "https://ruhanmedicalcomplex.com/logo1.png",
        width: 512,
        height: 512,
        alt: "Ruhan Medical Complex Logo",
      },
    ],
    type: "website",
  },

  /*  TWITTER / X PREVIEW */
  twitter: {
    card: "summary_large_image",
    title: "Ruhan Medical Complex - Khanpur",
    description:
      "Expert doctors, modern facilities & 24/7 emergency care in Khanpur.",
    images: ["https://ruhanmedicalcomplex.com/logo1.png"],
  },
};

/* ===============================
   ROOT LAYOUT
   =============================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoNastaliq.variable}>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {/* Structured Data (JSON-LD) */}
        <HospitalSchema />

        <EmergencyBar />
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
