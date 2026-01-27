export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: "https://ruhanmedicalcomplex.com/sitemap.xml",
    host: "https://ruhanmedicalcomplex.com",
  };
}