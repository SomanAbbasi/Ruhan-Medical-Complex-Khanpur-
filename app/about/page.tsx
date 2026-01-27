import { Metadata } from "next";
import { Award, Users, Clock, Heart } from "lucide-react";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us | Trusted Hospital in Khanpur Since 2010",
  description: "Ruhan Medical Complex has been serving Khanpur and Rahim Yar Khan since 2010. Learn about our mission, vision, and commitment to premium healthcare.",
  path: "/about",
  keywords: ["about ruhan medical complex", "hospital history khanpur", "best hospital rahim yar khan"]
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Ruhan Medical Complex</h1>
          <p className="text-xl text-gray-600 font-urdu" dir="rtl">روحان میڈیکل کمپلیکس کے بارے میں</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Established in 2010, Ruhan Medical Complex has been a cornerstone of healthcare in Khanpur, 
              Rahim Yar Khan. Located strategically at Model Town B, behind the DSP Office, we have served 
              thousands of patients with dedication and excellence.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-urdu text-right" dir="rtl">
              روحان میڈیکل کمپلیکس 2010 سے خانپور، رحیم یار خان میں صحت کی دیکھ بھال کا مرکز رہا ہے۔
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <Heart className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide accessible, high-quality medical care to the community of Khanpur using modern 
                equipment and experienced healthcare professionals.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <Award className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading healthcare provider in Rahim Yar Khan district, recognized for excellence 
                in patient care and medical expertise.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-teal-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600 text-sm">FCPS qualified specialists with years of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-teal-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                  <p className="text-gray-600 text-sm">Round the clock emergency services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}