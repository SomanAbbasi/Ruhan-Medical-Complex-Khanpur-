import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Award, 
  Stethoscope, 
  Building, 
  Heart, 
  Shield, 
  Users, 
  Star, 
  PhoneCall,
  Navigation,
  Facebook,
  Calendar
} from "lucide-react";
import { doctors, hospitalInfo } from "@/data/doctors";
import { FeatureGrid } from "@/components/FeatureGrid";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Best Hospital in Khanpur | Specialist Doctors & 24/7 Emergency",
  description: "Ruhan Medical Complex offers premium healthcare in Khanpur with expert ENT specialists, child specialists, surgeons, and physicians. Established 2010. Book appointment: 0325-5576000",
  path: "/",
  keywords: ["hospital khanpur", "doctors khanpur", "ENT specialist khanpur", "child specialist rahim yar khan"]
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
              <span className="text-teal-700 font-semibold">ESTABLISHED 2010</span>
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Premium Medical Care
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
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <MapPin className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-800">Khanpur, Rahim Yar Khan, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                <Phone className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-500">Call Now</p>
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

      {/* Doctors Preview Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <article key={doctor.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.nameEn} - ${doctor.specialtyEn} in Khanpur`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                  <div className="pt-4 flex flex-col gap-2">
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-semibold"
                    >
                      View Full Profile
                    </Link>
                    <a
                      href={`https://wa.me/${doctor.whatsapp}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-semibold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book Appointment
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              View All Doctors
              <Navigation className="w-4 h-4" />
            </Link>
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