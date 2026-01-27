import { Doctor } from "@/data/doctors";
import { hospitalInfo } from "@/data/doctors";

interface DoctorSchemaProps {
  doctor: Doctor;
}

export function DoctorSchema({ doctor }: DoctorSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.nameEn,
    alternateName: doctor.nameUrdu,
    medicalSpecialty: doctor.specialtyEn,
    description: `${doctor.nameEn} is a ${doctor.titleEn} practicing at ${hospitalInfo.name} in Khanpur, Rahim Yar Khan.`,
    image: `https://ruhanmedical.com${doctor.image}`,
    url: `https://ruhanmedical.com/doctors/${doctor.slug}`,
    telephone: doctor.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Behind DSP Office Link Road, Model Town B",
      addressLocality: "Khanpur",
      addressRegion: "Rahim Yar Khan",
      addressCountry: "PK"
    },
    hospitalAffiliation: {
      "@type": "Hospital",
      name: hospitalInfo.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Khanpur",
        addressRegion: "Rahim Yar Khan",
        addressCountry: "PK"
      }
    },
    alumniOf: doctor.qualifications.map(q => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Medical Degree",
      name: q
    })),
    availableService: {
      "@type": "MedicalProcedure",
      name: "Medical Consultation",
      areaServed: {
        "@type": "City",
        name: "Khanpur"
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "In-Person Consultation"
      }
    },
    openingHoursSpecification: doctor.timings.map(t => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: t.day === "Monday-Sunday" 
        ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        : [t.day],
      opens: t.morning ? t.morning.split(" - ")[0] : t.evening?.split(" - ")[0],
      closes: t.morning ? t.morning.split(" - ")[1] : t.evening?.split(" - ")[1]
    })),
    sameAs: [doctor.facebook]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}