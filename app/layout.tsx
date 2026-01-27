import type { Metadata } from "next";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmergencyBar } from "@/components/EmergencyBar";
import { HospitalSchema } from "@/components/HospitalSchema";
import { generateSEOMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });
const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urdu",
});

export const metadata: Metadata = generateSEOMetadata({
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
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoNastaliq.variable}>
      <head>
        <HospitalSchema />

        {/* Favicon */}
        <link rel="icon" href="/logo1.png" />

        {/* Open Graph (Facebook, WhatsApp, Instagram) */}
        <meta property="og:title" content="Ruhan Medical Complex - Khanpur" />
        <meta
          property="og:description"
          content="Leading hospital in Khanpur with expert specialist doctors and 24/7 emergency."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ruhanmedicalcomplex.com/" />
        <meta property="og:image" content="https://ruhanmedicalcomplex.com/share.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ruhan Medical Complex - Khanpur" />
        <meta
          name="twitter:description"
          content="Leading hospital in Khanpur with expert specialist doctors and 24/7 emergency."
        />
        <meta name="twitter:image" content="https://ruhanmedicalcomplex.com/share.png" />
      </head>

      <body className={`${inter.className} antialiased bg-gray-50`}>
        <EmergencyBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
