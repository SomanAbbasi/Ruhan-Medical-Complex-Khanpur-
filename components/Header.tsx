import Link from "next/link";
import { Stethoscope } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Ruhan Medical And Surgical Complex</h1>
              <p className="text-sm text-gray-600 font-urdu" dir="rtl">
                روحان میڈیکل اینڈ سرجیکل کمپلیکس
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            <Link 
              href="/doctors" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Doctors
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Contact
            </Link>
            {/* <Link 
              href="/about" 
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              About
            </Link> */}
            <a
              href="https://wa.me/923255576000"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}