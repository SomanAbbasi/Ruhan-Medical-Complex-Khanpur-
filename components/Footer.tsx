import Link from "next/link";
import { Heart, Facebook, MessageCircle, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { hospitalInfo } from "@/data/doctors";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Rohan Medical Complex</h3>
            </div>
            <p className="text-gray-400">
              Providing premium health care with experienced doctors and modern facilities since 2025.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Khanpur, Rahim Yar Khan, Pakistan</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2" aria-label="Footer Navigation">
              <Link href="/doctors" className="block text-gray-400 hover:text-white transition-colors">
                Our Doctors
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Information
              </Link>
              
            </nav>
          </div>

          <div className="space-y-4 font-urdu" dir="rtl">
            <h4 className="text-lg font-bold mb-4">فوری لنکس</h4>
            <div className="space-y-2">
              <Link href="/doctors" className="block text-gray-400 hover:text-white transition-colors">
                ہمارے ڈاکٹرز
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                رابطہ معلومات
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2026 {hospitalInfo.name}. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/SomanAbbasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/soman-abbasi-a1820b344/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="text-sm text-gray-400">Powered by</span>
                <a
                  href="https://www.somanabbasi.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Soman Abbasi's website"
                  className="font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Soman Abbasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
