import { Metadata } from "next";
import Image from "next/image";
import { Award, Phone, MessageCircle, Stethoscope, Calendar } from "lucide-react";
import { doctors } from "@/data/doctors";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "All Doctors | Ruhan Medical Complex Khanpur",
  description:
    "Meet expert doctors at Ruhan Medical Complex Khanpur. Qualified physicians, surgeons, child specialists and radiologists available daily.",
  path: "/doctors",
  keywords: ["doctors khanpur", "ruhān medical complex", "best doctors khanpur"],
});

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== PAGE HEADER ===== */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
            <Stethoscope className="w-5 h-5 text-teal-600" />
            <span className="font-semibold text-teal-700">
              OUR MEDICAL TEAM
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet Our Doctors
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highly qualified and experienced medical professionals
          </p>

          <p className="font-urdu text-2xl text-gray-800" dir="rtl">
            ہمارے تجربہ کار ڈاکٹرز
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
        </div>

        {/* ===== DOCTORS LIST ===== */}
        <div className="space-y-12">
          {doctors.map((doctor) => (
            <article
              key={doctor.id}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-8 p-6 md:p-8">

                {/* ===== IMAGE ===== */}
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative w-full max-w-xs">
                    <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={doctor.image}
                        alt={doctor.nameEn}
                        fill
                        className="object-cover"
                        priority={doctor.id <= 2}
                      />
                    </div>

                    {/* <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow whitespace-nowrap">
                        {doctor.specialtyEn}
                      </span>
                    </div> */}
                  </div>
                </div>

                {/* ===== INFO ===== */}
                <div className="md:col-span-4 space-y-7">

                  {/* Names & Titles */}
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {doctor.nameEn}
                    </h2>

                    <p className="text-teal-600 font-semibold">
                      {doctor.titleEn}
                    </p>

                    <div className="font-urdu space-y-1 text-right" dir="rtl">
                      <p className="text-2xl text-gray-900 font-bold leading-relaxed">
                        {doctor.nameUrdu}
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {doctor.titleUrdu}
                      </p>
                      <p className="text-base text-teal-700 font-medium">
                        {doctor.specialtyUrdu}
                      </p>
                    </div>
                  </div>

                  {/* Qualifications & Experience */}
                  <div className="grid md:grid-cols-2 gap-6">

                    {/* English */}
                    <div className="space-y-3">
                      <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                        <Award className="w-4 h-4 text-teal-500" />
                        Qualifications & Experience
                      </h3>

                      <ul className="space-y-2">
                        {doctor.detailsEn.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex gap-2"
                          >
                            <span className="mt-2 w-1.5 h-1.5 bg-teal-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Urdu */}
                    <div className="space-y-3 font-urdu text-right" dir="rtl">
                      <h3 className="font-semibold text-gray-800">
                        تعلیمی قابلیت اور تجربہ
                      </h3>

                      <ul className="space-y-2">
                        {doctor.detailsUrdu.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex flex-row-reverse gap-2"
                          >
                            <span className="mt-2 w-1.5 h-1.5 bg-teal-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-teal-500" />
                      <span className="font-semibold text-gray-800">
                        Consultation Timings
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      {doctor.timings.map((t, idx) => (
                        <div key={idx}>
                          <p className="font-medium text-gray-800">
                            {t.day}: {t.morning || t.evening}
                          </p>
                          {/* <p
                            className="font-urdu text-gray-700 text-right"
                            dir="rtl"
                          >
                            {t.dayUrdu}: {t.morning || t.evening}
                          </p> */}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                    {doctor.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-teal-500 text-teal-600 rounded-xl hover:bg-teal-50"
                      >
                        <Phone className="w-4 h-4" />
                        {phone}
                      </a>
                    ))}

                    <a
                      href={`https://wa.me/${doctor.whatsapp}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
