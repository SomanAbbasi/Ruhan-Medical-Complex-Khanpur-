import { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle, Navigation, Mail } from "lucide-react";
import { hospitalInfo } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Emergency Hospital in Khanpur | Ruhan Medical Complex",
  description: "Contact Ruhan Medical Complex Khanpur. Emergency: 0325-5576000. Located at Model Town B, Khanpur, Rahim Yar Khan. Open 24/7 for all medical emergencies.",
  keywords: ["hospital contact khanpur", "emergency hospital khanpur", "ruhan medical complex phone", "khanpur hospital address"],
  alternates: {
    canonical: "https://ruhanmedicalcomplex.com/contact",
  },
  openGraph: {
    title: "Contact Ruhan Medical Complex | 24/7 Emergency",
    description: "Hospital in Khanpur, Rahim Yar Khan. Emergency contact: 0325-5576000",
    url: "https://ruhanmedicalcomplex.com/contact",
    siteName: "Ruhan Medical Complex",
    locale: "en_PK",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact & Location
          </h1>
          <p className="text-xl text-gray-600">
            Visit Ruhan Medical And Surgical Complex or reach us 24/7 for emergencies
          </p>
          <p className="text-xl text-gray-600 font-urdu" dir="rtl">
            رابطہ کریں
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospital Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <address className="not-italic text-gray-600 mt-1">
                      {hospitalInfo.address}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-xl">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Numbers</h3>
                    <div className="space-y-2 mt-1">
                      {hospitalInfo.phone.map((phone) => (
                        <a 
                          key={phone}
                          href={`tel:${phone.replace(/-/g, "")}`} 
                          className="block text-teal-600 font-semibold hover:text-teal-700"
                          dir="ltr"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-xl">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600 mt-1">24 Hours Emergency Services</p>
                  </div>
                </div>

                
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Connect</h3>
                <div className="flex gap-4">
                  <a
                    href={`https://wa.me/${hospitalInfo.emergencyPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-semibold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${hospitalInfo.emergencyPhone}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    Emergency
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 font-urdu" dir="rtl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">رابطے کی معلومات</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">پتہ</p>
                    <p className="font-semibold text-gray-900">عقب ڈی ایس پی آفس لنک روڈ ماڈل ٹاؤن B خان پور</p>
                    <p className="text-gray-700">خان پور، رحیم یار خان</p>
                  </div>
                  <div className="p-3 bg-teal-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">فون نمبرز</p>
                    {hospitalInfo.phone.map((phone) => (
                      <p key={phone} className="font-semibold text-gray-900" dir="ltr">
                        {phone}
                      </p>
                    ))}
                  </div>
                  <div className="p-3 bg-teal-50 rounded-xl">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center relative">
                <div className="text-center p-8">
                  <Navigation className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Google Maps Location</h3>
                  <p className="text-gray-600 mt-2">Model Town B, Khanpur, Rahim Yar Khan</p>
                </div>
              </div>
              <div className="p-6">
                <a
                  href="https://maps.app.goo.gl/53x5ovMu825bDFjf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Services</h3>
              <p className="text-gray-700 mb-4">
                We provide 24/7 emergency services including ERT, Ultrasound, Operation theaters, and ambulance services.
              </p>
              <div className="flex items-center gap-2 text-teal-700 font-semibold">
                <Clock className="w-5 h-5" />
                <span>Always Open - 24/7/365</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Facilities</h3>
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
    </div>
  );
}