

import { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle, Navigation, Mail } from "lucide-react";
import { hospitalInfo } from "@/data/doctors";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us | 24/7 Emergency Hospital in Khanpur",
  description: "Contact Ruhan Medical Complex Khanpur. Emergency: 0325-5576000. Located at Model Town B, Khanpur. Open 24/7 for all medical emergencies and consultations.",
  path: "/contact",
  keywords: ["hospital contact khanpur", "emergency hospital khanpur", "medical complex rahim yar khan phone"]
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact & Location
          </h1>
          <p className="text-xl text-gray-600">
            Visit Ruhan Medical Complex or reach us 24/7 for emergencies
          </p>
          <p className="text-xl text-gray-600 font-urdu" dir="rtl">
            رابطہ کریں
          </p>
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
                          href={`tel:${phone}`} 
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
                    <p className="text-sm text-gray-500">OPD: Morning & Evening shifts</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 rounded-xl">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href={`mailto:${hospitalInfo.email}`} className="text-teal-600 hover:text-teal-700">
                      {hospitalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Connect</h3>
                <div className="flex gap-4">
                  <a
                    href={`https://wa.me/${hospitalInfo.emergencyPhone}`}
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
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <Navigation className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Google Maps</h3>
                  <p className="text-gray-600 mt-2">Model Town B, Khanpur</p>
                </div>
              </div>
              <div className="p-6">
                <a
                  href="https://maps.app.goo.gl/zrMCEF1kYpYUzc3F6"
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
                We provide 24/7 emergency services including trauma care, cardiac emergencies, pediatric emergencies, and ambulance services.
              </p>
              <div className="flex items-center gap-2 text-teal-700 font-semibold">
                <Clock className="w-5 h-5" />
                <span>Always Open - 24/7/365</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}