import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  Clock, 
  Calendar,
  Phone, 
  MessageCircle, 
  Facebook,
  ArrowLeft
} from "lucide-react";
import { doctors, hospitalInfo } from "@/data/doctors";
import { DoctorSchema } from "@/components/DoctorSchema";

// Next.js 15: params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await params in Next.js 15
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  
  if (!doctor) {
    return {
      title: "Doctor Not Found | Ruhan Medical Complex",
    };
  }

  return {
    title: `${doctor.nameEn} | ${doctor.specialtyEn} in Khanpur | Ruhan Medical Complex`,
    description: `Book appointment with ${doctor.nameEn}, ${doctor.titleEn} at Ruhan Medical Complex Khanpur. ${doctor.specialtyEn} specialist in Rahim Yar Khan. Contact: ${doctor.phones[0]}`,
  };
}

// Must be async in Next.js 15 to await params
export default async function DoctorPage({ params }: Props) {
  // Await the params Promise
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <DoctorSchema doctor={doctor} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/doctors" 
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Doctors
        </Link>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-5 gap-8 p-8">
            {/* Doctor Photo */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.nameEn} - ${doctor.specialtyEn} in Khanpur, Rahim Yar Khan`}
                    fill
                    className="object-cover"
                    sizes="200px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {doctor.specialtyEn}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-8">
              {/* Header */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-gray-900">{doctor.nameEn}</h1>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span className="font-semibold text-teal-700">{doctor.titleEn}</span>
                  </div>

                  <div className="space-y-3 pt-4">
                    {doctor.detailsEn.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300 flex-shrink-0">
                          <Award className="w-4 h-4 text-teal-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 font-urdu" dir="rtl">
                  <h2 className="text-3xl font-bold text-gray-900">{doctor.nameUrdu}</h2>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-teal-50 px-4 py-2 rounded-full justify-end">
                    <span className="font-semibold text-blue-700">{doctor.titleUrdu}</span>
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>

                  <div className="space-y-3 pt-4">
                    {doctor.detailsUrdu.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 group justify-end">
                        <p className="text-gray-700 leading-relaxed text-right">{detail}</p>
                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300 flex-shrink-0">
                          <Award className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Consultation Timings</h3>
                  <span className="text-gray-300">|</span>
                  <h3 className="text-xl font-bold text-gray-900 font-urdu" dir="rtl">
                    وقت ملاقات
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {doctor.timings.map((timing, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl border border-gray-200 hover:border-teal-300 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-teal-500" />
                        <span className="font-semibold text-gray-800">{timing.day}</span>
                        <span className="text-gray-300">•</span>
                        <span className="font-semibold text-gray-800 font-urdu">
                          {timing.dayUrdu}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {timing.morning && (
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-900" dir="ltr">{timing.morning}</span>
                            <span className="text-sm text-gray-500">Morning</span>
                          </div>
                        )}
                        {timing.evening && (
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-900" dir="ltr">{timing.evening}</span>
                            <span className="text-sm text-gray-500">Evening</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`https://wa.me/${doctor.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 min-w-[200px] flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl font-semibold"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>WhatsApp Consultation</span>
                </a>

                <a
                  href={doctor.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 min-w-[200px] flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-xl font-semibold"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Follow on Facebook</span>
                </a>

                {doctor.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone}`}
                    className="group flex-1 min-w-[200px] flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover:shadow-xl font-semibold"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span dir="ltr">{phone}</span>
                  </a>
                ))}
              </div>

              {/* Location Box */}
              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Practice Location</h3>
                <p className="text-gray-700 mb-4">
                  {doctor.nameEn} practices at <strong>Ruhan Medical Complex</strong>, located at {hospitalInfo.address}.
                </p>
                <Link 
                  href="/contact"
                  className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2"
                >
                  Get Directions →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}