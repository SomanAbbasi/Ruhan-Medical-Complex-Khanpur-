

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Award, Phone, MessageCircle, Navigation, Stethoscope } from "lucide-react";
import { doctors } from "@/data/doctors";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "All Doctors | Expert Physicians & Surgeons in Khanpur",
  description: "Meet our team of expert doctors at Ruhan Medical Complex Khanpur. ENT specialists, child specialists, general surgeons, physicians and radiologists available 24/7.",
  path: "/doctors",
  keywords: ["doctors khanpur", "physicians rahim yar khan", "ENT doctor khanpur", "child specialist khanpur"]
});

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Medical Specialists
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert healthcare professionals serving Khanpur and Rahim Yar Khan with premium medical care
          </p>
          <p className="text-xl text-gray-600 font-urdu" dir="rtl">
            ہمارے طبی ماہرین
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <article 
              key={doctor.id} 
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3">
                <div className="relative h-64 md:h-full md:col-span-1">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.nameEn} - ${doctor.specialtyEn} at Ruhan Medical Complex Khanpur`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="p-6 md:col-span-2 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Stethoscope className="w-5 h-5 text-teal-600" />
                      <span className="text-teal-600 font-semibold text-sm">{doctor.specialtyEn}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{doctor.nameEn}</h2>
                    <p className="text-gray-600 font-urdu text-lg" dir="rtl">{doctor.nameUrdu}</p>
                    <p className="text-teal-700 font-medium mt-2">{doctor.titleEn}</p>
                  </div>

                  <div className="space-y-2">
                    {doctor.detailsEn.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-semibold text-sm"
                    >
                      View Profile
                    </Link>
                    <a
                      href={`tel:${doctor.phones[0]}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-teal-600 text-teal-600 rounded-xl hover:bg-teal-50 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${doctor.whatsapp}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
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