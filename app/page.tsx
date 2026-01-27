import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroSlider } from "./HeroSlider";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Award,
  Stethoscope,
  Heart,
  Shield,
  Users,
  Star,
  PhoneCall,
  Navigation,
  Calendar,
} from "lucide-react";
import { doctors, hospitalInfo } from "@/data/doctors";
import { FeatureGrid } from "@/components/FeatureGrid";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Best Hospital in Khanpur | Specialist Doctors & 24/7 Emergency",
  description:
    "Ruhan Medical Complex offers premium healthcare in Khanpur with expert ENT specialists, child specialists, surgeons, and physicians. Established 2025. Book appointment: 0325-5576000",
  path: "/",
  keywords: ["hospital khanpur", "doctors khanpur", "ENT specialist khanpur", "child specialist rahim yar khan"],
});

const features = [
  { icon: Shield, title: "Certified Doctors", urdu: "سرٹیفائیڈ ڈاکٹرز" },
  { icon: Stethoscope, title: "Modern Equipment", urdu: "جدید آلات" },
  { icon: Heart, title: "24/7 Emergency", urdu: "24/7 ایمرجنسی" },
  { icon: Users, title: "Multiple Specialties", urdu: "کئی اسپیشلٹیز" },
  { icon: Award, title: "Experienced Staff", urdu: "تجربہ کار عملہ" },
  { icon: Star, title: "Premium Care", urdu: "پریمیم دیکھ بھال" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              <span className="text-teal-700 font-semibold">ESTABLISHED 2025</span>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            </div>

            <HeroSlider />

            <div className="mt-6 bg-white rounded-3xl border border-gray-200 shadow-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                  <p className="text-gray-700 mt-2">
                    Behind DSP Office Link Road, Model Town B, Khanpur
                  </p>
                  <p className="text-gray-700 font-semibold mt-1">
                    Khanpur, Pakistan
                  </p>
                </div>

                <div className="font-urdu text-right" dir="rtl">
                  <h3 className="text-2xl font-bold text-gray-900">ہمارا مقام</h3>
                  <p className="text-gray-700 mt-2">
                    عقب ڈی ایس پی آفس لنک روڈ ماڈل ٹاؤن B خان پور
                  </p>
                  <p className="text-gray-700 font-semibold mt-1">
                    خان پور، پاکستان
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/spULvjBPAY6vonfw6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  View on Google Maps
                </a>


              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Premium Health Care
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                With Expert Doctors
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-urdu" dir="rtl">
              معیاری طبی دیکھ بھال تجربہ کار ڈاکٹروں کے ساتھ
            </p>

            <FeatureGrid features={features} />

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              {/* <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <MapPin className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-800">Khanpur, Rahim Yar Khan, Pakistan</p>
                </div>
              </div> */}

              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <Phone className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-500">Call Now</p>
                  <p className="font-semibold text-gray-800" dir="ltr">0325-5576000</p>
                  <p className="font-semibold text-gray-800" dir="ltr">068-5576000</p>


                </div>
              </div>

              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5" />
                <span className="font-semibold">Emergency Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCTORS SECTION (New Design) ===== */}
      <section id="doctors" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Meet Our Expert Doctors
            </h2>
            <p className="text-xl text-gray-600 font-urdu" dir="rtl">
              ہمارے ماہر ڈاکٹروں سے ملیں
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {doctors.map((doctor) => (
              <article
                key={doctor.id}
                className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-8 p-6 md:p-8">
                  {/* IMAGE */}
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
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="md:col-span-4 space-y-7">
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

                    {/* Qualifications */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                          <Award className="w-4 h-4 text-teal-500" />
                          Qualifications & Experience
                        </h3>

                        <ul className="space-y-2">
                          {doctor.detailsEn.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex gap-2">
                              <span className="mt-2 w-1.5 h-1.5 bg-teal-500 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3 font-urdu text-right" dir="rtl">
                        <h3 className="font-semibold text-gray-800">
                          تعلیمی قابلیت اور تجربہ
                        </h3>

                        <ul className="space-y-2">
                          {doctor.detailsUrdu.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex flex-row-reverse gap-2">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Visit Our Hospital</h2>
            <p className="text-xl text-gray-600 font-urdu" dir="rtl">
              ہمارے ہسپتال کا دورہ کریں
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                <address className="space-y-6 not-italic">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-semibold text-gray-900">{hospitalInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-50 rounded-xl">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone Numbers</p>
                      {hospitalInfo.phone.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block font-semibold text-gray-900 hover:text-teal-600 transition-colors"
                          dir="ltr"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-50 rounded-xl">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Emergency Hours</p>
                      <p className="font-semibold text-gray-900">24/7 Emergency Services</p>
                      <p className="text-gray-700">Available round the clock</p>
                    </div>
                  </div>
                </address>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 font-urdu" dir="rtl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">رابطے کی معلومات</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">پتہ</p>
                      <p className="font-semibold text-gray-900">عقب ڈی ایس پی آفس لنک روڈ ماڈل ٹاؤن B خان پور</p>
                    </div>
                    <div className="p-3 bg-teal-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                <div className="h-64 bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                      <Navigation className="w-8 h-8 text-teal-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Google Maps Location</h4>
                    <p className="text-gray-600 mt-2">Khanpur, Rahim Yar Khan</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Get Directions</h4>
                  <p className="text-gray-700 mb-4">
                    Located near DSP Office Road, Model Town B, Khanpur. Easily accessible from main city center.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/RUi7aAsNgyuEH4RbA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    <Navigation className="w-5 h-5" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Facilities</h4>
                <div className="grid grid-cols-2 gap-4">
                  {hospitalInfo.services.map((service) => (
                    <div key={service} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
