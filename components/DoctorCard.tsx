import Link from "next/link";
import Image from "next/image";
import { Award, Phone, MessageCircle } from "lucide-react";
import { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64">
        <Image
          src={doctor.image}
          alt={`${doctor.nameEn} - ${doctor.specialtyEn} in Khanpur`}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          {doctor.specialtyEn}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{doctor.nameEn}</h3>
          <p className="text-teal-600 font-semibold">{doctor.titleEn}</p>
          <p className="font-urdu text-gray-600 text-lg" dir="rtl">{doctor.nameUrdu}</p>
        </div>

        <div className="space-y-2">
          {doctor.detailsEn.slice(0, 2).map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <Award className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
              <span>{detail}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 flex gap-2">
          <Link
            href={`/doctors/${doctor.slug}`}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-semibold text-sm"
          >
            View Profile
          </Link>
          <a
            href={`https://wa.me/${doctor.whatsapp}`}
            className="inline-flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href={`tel:${doctor.phones[0]}`}
            className="inline-flex items-center justify-center px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </article>
  );
}