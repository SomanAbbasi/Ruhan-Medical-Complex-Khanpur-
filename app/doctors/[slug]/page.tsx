import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Award, Clock, Calendar, Phone, MessageCircle, Facebook, ArrowLeft } from "lucide-react";
import { doctors, hospitalInfo } from "@/data/doctors";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  
  if (!doctor) {
    return { title: "Doctor Not Found" };
  }

  return {
    title: `${doctor.nameEn} | ${doctor.specialtyEn} in Khanpur | Ruhan Medical Complex`,
    description: `Book appointment with ${doctor.nameEn} at Ruhan Medical Complex Khanpur. ${doctor.specialtyEn} specialist in Rahim Yar Khan. Contact: ${doctor.phones[0]}`,
  };
}

export default async function DoctorPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/doctors" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to All Doctors
        </Link>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-5 gap-8 p-8">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image 
                  src={doctor.image} 
                  alt={`${doctor.nameEn} - ${doctor.specialtyEn} in Khanpur`} 
                  fill 
                  className="object-cover" 
                  sizes="200px" 
                  priority 
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {doctor.specialtyEn}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{doctor.nameEn}</h1>
                  <p className="text-teal-600 font-semibold mt-1">{doctor.titleEn}</p>
                  <div className="mt-4 space-y-2">
                    {doctor.detailsEn.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Award className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="font-urdu text-right" dir="rtl">
                  <h2 className="text-3xl font-bold text-gray-900">{doctor.nameUrdu}</h2>
                  <p className="text-blue-600 font-semibold mt-1">{doctor.titleUrdu}</p>
                  <div className="mt-4 space-y-2">
                    {doctor.detailsUrdu.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 justify-end text-sm text-gray-700">
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Consultation Timings</h3>
                  <span className="text-gray-300">|</span>
                  <h3 className="text-xl font-bold text-gray-900 font-urdu" dir="rtl">وقت ملاقات</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {doctor.timings.map((timing, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-teal-500" />
                        <span className="font-semibold text-gray-800">{timing.day}</span>
                      </div>
                      {timing.morning && <p className="text-sm text-gray-600">Morning: <span dir="ltr">{timing.morning}</span></p>}
                      {timing.evening && <p className="text-sm text-gray-600">Evening: <span dir="ltr">{timing.evening}</span></p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href={`https://wa.me/${doctor.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                
                <a href={doctor.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-xl font-semibold">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>

                {doctor.phones.map((phone, idx) => (
                  <a key={idx} href={`tel:${phone.replace(/-/g, "")}`} className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover:shadow-xl font-semibold">
                    <Phone className="w-5 h-5" />
                    <span dir="ltr">{phone}</span>
                  </a>
                ))}
              </div>

              <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Practice Location</h3>
                <p className="text-gray-700">
                  {doctor.nameEn} practices at <strong>Ruhan Medical Complex</strong>, located at {hospitalInfo.address}.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-4 text-teal-600 font-semibold hover:text-teal-700">
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