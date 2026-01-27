import { hospitalInfo } from "@/data/doctors";

export function HospitalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospitalInfo.name,
    alternateName: hospitalInfo.nameUrdu,
    image: "https://ruhanmedical.com/logo.svg",
    "@id": "https://ruhanmedical.com",
    url: "https://ruhanmedical.com",
    telephone: hospitalInfo.phone[0],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Behind DSP Office Link Road, Model Town B",
      addressLocality: "Khanpur",
      addressRegion: "Punjab",
      postalCode: "64100",
      addressCountry: "PK"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hospitalInfo.coordinates.lat,
      longitude: hospitalInfo.coordinates.lng
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    department: [
      {
        "@type": "MedicalClinic",
        name: "Emergency Department",
        availableService: {
          "@type": "MedicalProcedure",
          name: "Emergency Care"
        }
      }
    ],
    medicalSpecialty: [
      "ENT",
      "General Surgery",
      "Pediatrics",
      "Radiology",
      "Internal Medicine"
    ],
    hasMap: "https://maps.app.goo.gl/RUi7aAsNgyuEH4RbA",
    isAcceptingNewPatients: true,
    sameAs: [
      "https://facebook.com"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}