'use client'

import React, { useState, useEffect } from 'react';
import {
    MapPin,
    Phone,
    Clock,
    Calendar,
    Facebook,
    MessageCircle,
    Award,
    Stethoscope,
    Building,
    Heart,
    Shield,
    Users,
    Star,
    PhoneCall,
    Navigation
} from 'lucide-react';

const RMCHospitalWebsite = () => {
    const [scrollY, setScrollY] = useState(0);
    const [visibleCards, setVisibleCards] = useState(new Set());

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => new Set([...prev, entry.target.dataset.id]));
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll('.doctor-card').forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    const doctors = [
        {
            id: 1,
            nameEn: "Dr. Shahid Iqbal",
            nameUrdu: "ڈاکٹر شاہد اقبال",
            titleEn: "General Surgeon & Family Physician",
            titleUrdu: "جنرل سرجن و فیملی فزیشن",
            specialtyEn: "ENT Specialist",
            specialtyUrdu: "خصوصی معالج ناک کان گلہ",
            detailsEn: [
                { icon: <Award className="w-4 h-4" />, text: "ENT Specialist" },

                { icon: <Award className="w-4 h-4" />, text: "MBBS - RMP" },
                { icon: <Building className="w-4 h-4" />, text: "Deputy Medical Superintendent, Tehsil Headquarters Hospital, Liaquat Pur" },
                { icon: <Building className="w-4 h-4" />, text: "Ex. Medical Officer, Sheikh Zayed Hospital, Rahim Yar Khan" },

                { icon: <Award className="w-4 h-4" />, text: "Certificate of Hepatitis Management from Royal College of Physicians (England)" }
            ],
            detailsUrdu: [
                { icon: <Award className="w-4 h-4" />, text: "خصوصی معالج ناک کان گلہ" },
                { icon: <Award className="w-4 h-4" />, text: "ایم بی بی ایس - آرایم پی" },
                { icon: <Building className="w-4 h-4" />, text: "ڈپٹی میڈیکل سپرنٹنڈنٹ، تحصیل ہیڈ کوارٹر ہسپتال، لیاقت پور" },

                { icon: <Building className="w-4 h-4" />, text: "سابق میڈیکل آفیسر شیخ زید ہسپتال رحیم یار خان" },
                { icon: <Award className="w-4 h-4" />, text: "رائل کالج آف فزیشنز (انگلینڈ) سے ہیپاٹائٹس مینجمنٹ کا سرٹیفکیٹ" }
            ],
            timings: [
                { day: "Monday-Sunday", dayUrdu: "پیر سے اتوار", evening: "06:00 PM - 09:00 PM", morning: "" }
                // { day: "Sun", dayUrdu: "اتوار", morning: "10:00 AM - 1:00 PM", evening: "Closed" }
            ],
            facebook: "https://facebook.com",
            whatsapp: "923255576000",
            phones: ["0325-5576000", "068-5576000"],
            image: "/Shahid.jpg"
        },

        {
            id: 2,
            nameEn: "Dr. Muhammad Asad jamal",
            nameUrdu: "ڈاکٹر محمد اسد جمال",
            titleEn: "General and Laparoscopic Surgeon",
            titleUrdu: "جنرل اینڈ لیپرو سکوپک سرجن",
            specialtyEn: "General Surgeon",
            specialtyUrdu: "جنرل سرجن",

            detailsEn: [
                { icon: <Award className="w-4 h-4" />, text: "MBBS - FCP (Surgery)" },
                { icon: <Building className="w-4 h-4" />, text: "Former Registrar Sargodha Medical College Sargodha" }
            ],
            detailsUrdu: [
                { icon: <Award className="w-4 h-4" />, text: " ایم بی بی ایس, ایف سی پی (سرجری)" },
                { icon: <Building className="w-4 h-4" />, text: "سابق رجسٹرار سرگودھا مڈیکل کالحج سرگودھا" }
            ],
            timings: [
                { day: "Monday-Sunday", dayUrdu: "پیر سے اتوار", evening: "05:00 PM - 08:00 PM", morning: "" }

            ],
            facebook: "https://facebook.com",
            whatsapp: "923255576000",
            phones: ["0325-5576000", "068-5576000"],

            image: "/Asad.jpeg"
        },

        {
            id: 3,
            nameEn: "Dr. Shumaila Jaleel",
            nameUrdu: "ڈاکٹرشمائلہ جلیل",
            titleEn: "Pediatrician & Neonatologist",
            titleUrdu: "ماہر امراض بچگان و نوزائیدگان",
            specialtyEn: "Child Specialist",
            specialtyUrdu: "بچوں کے ماہر",
            detailsEn: [
                { icon: <Award className="w-4 h-4" />, text: "MBBS - Nishtar Medical College" },
                { icon: <Award className="w-4 h-4" />, text: "FCPS (R) Pediatrics Medicine" },
                { icon: <Building className="w-4 h-4" />, text: "Former Registrar, Children Ward, Sheikh Zayed Hospital, Rahim Yar Khan" }
            ],
            detailsUrdu: [
                { icon: <Award className="w-4 h-4" />, text: "ایم بی بی ایس نشتر میڈیکل کالج" },
                { icon: <Award className="w-4 h-4" />, text: "ایف سی پی ایس (R) پیڈ ز میڈیسن" },
                { icon: <Building className="w-4 h-4" />, text: "سابق رجسٹرار چلڈرن وارڈ شیخ زید ہسپتال رحیم یارخان" }
            ],
            timings: [
                { day: "Monday-Sunday", dayUrdu: "پیر سے اتوار", morning: "01:00 PM - 07:00 PM", evening: "" }

            ],
            facebook: "https://facebook.com",
            whatsapp: "923255576000",
            phones: ["0325-5576000", "068-5576000"],

            image: "/img1.jpeg"
        },
        {
            id: 4,
            nameEn: "Dr. Muhammad Yasar Aslam",
            nameUrdu: "ڈاکٹر محمد یا سر اسلم",
            titleEn: "Consultant Physician",
            titleUrdu: "کنسلٹنٹ فزیشن",
            specialtyEn: "General Medicine",
            specialtyUrdu: "جنرل میڈیسن",
            detailsEn: [
                { icon: <Award className="w-4 h-4" />, text: "MBBS (Gold Medalist), FCPS (II) Medicine" },
                { icon: <Building className="w-4 h-4" />, text: "Medical Officer, Tehsil Headquarters Hospital, Khanpur" },
                { icon: <Building className="w-4 h-4" />, text: "Former Registrar, Medicine Department, Sheikh Zayed Hospital, Rahim Yar Khan" }
            ],
            detailsUrdu: [
                { icon: <Award className="w-4 h-4" />, text: "ایم بی بی ایس ( گولڈ میڈلسٹ ) ایف سی پی ایس (2) میڈیسن" },
                { icon: <Building className="w-4 h-4" />, text: "میڈیکل آفیسر تحصیل ہیڈ کوارٹر ہسپتال خان پور" },
                { icon: <Building className="w-4 h-4" />, text: "سابق رجسٹرار میڈسن ڈ یپارٹمنٹ شیخ زید ہسپتال رحیم یارخان" }
            ],
            timings: [
                { day: "Monday-Sunday", dayUrdu: "پیر سے اتوار", evening: "05:00 PM - 08:00 PM", morning: "" }
            ],
            facebook: "https://facebook.com",
            whatsapp: "923255576000",
            phones: ["0325-5576000", "068-5576000"],

            image: "/img1.jpeg"
        },
        {
            id: 5,
            nameEn: "Dr. Muhammad Faisal Rafiq",
            nameUrdu: "ڈاکٹر محمد فیصل رفیق",
            titleEn: "Radiologist & Ultrasound Specialist",
            titleUrdu: "ریڈیالوجسٹ اینڈ الٹرا ساؤنڈ اسپیشلسٹ",
            specialtyEn: "Imaging Specialist",
            specialtyUrdu: "امیدنگ ماہر",
            detailsEn: [
                { icon: <Award className="w-4 h-4" />, text: "MBBS (KEME)" },
                { icon: <Award className="w-4 h-4" />, text: "FCPS (R) (Radiology)" },
                { icon: <Building className="w-4 h-4" />, text: "Medical Officer, Tehsil Headquarters Hospital, Khanpur" }
            ],
            detailsUrdu: [
                { icon: <Award className="w-4 h-4" />, text: "ایم بی بی ایس (KEME)" },
                { icon: <Award className="w-4 h-4" />, text: "ایف سی پی ایس (R) (ریڈیالوجی)" },
                { icon: <Building className="w-4 h-4" />, text: "میڈیکل آفیسر تحصیل ہیڈ کوارٹر ہسپتال خان پور" }
            ],
            timings: [
                { day: "Monday-Sunday", dayUrdu: "پیر سے اتوار", evening: "05:00 PM - 08:00 PM", morning: "" }
            ],
            facebook: "https://facebook.com",
            whatsapp: "923255576000",
            phones: ["0325-5576003", "0325-5576004"],
            image: "/img1.jpeg"
        }
    ];

    const features = [
        { icon: <Shield className="w-6 h-6" />, title: "Certified Doctors", urdu: "سرٹیفائیڈ ڈاکٹرز" },
        { icon: <Stethoscope className="w-6 h-6" />, title: "Modern Equipment", urdu: "جدید آلات" },
        { icon: <Heart className="w-6 h-6" />, title: "24/7 Emergency", urdu: "24/7 ایمرجنسی" },
        { icon: <Users className="w-6 h-6" />, title: "Multiple Specialties", urdu: "کئی اسپیشلٹیز" },
        { icon: <Award className="w-6 h-6" />, title: "Experienced Staff", urdu: "تجربہ کار عملہ" },
        { icon: <Star className="w-6 h-6" />, title: "Premium Care", urdu: "پریمیم دیکھ بھال" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
            {/* Header with Emergency Bar */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <PhoneCall className="w-4 h-4" />
                        <span className="text-sm font-semibold">EMERGENCY: </span>
                        <span dir="ltr" className="font-bold">0325-5576000</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                        <span>24/7 Services Available</span>
                        <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
                        <span>Open Now</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center">
                                <Stethoscope className="w-6 h-6 text-white" /> </div>
                            {/* <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                                <img
                                    src="/logo-128.png"
                                    alt="Ruhan Medical Complex"
                                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                                />
                            </div> */}

                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Ruhan Medical And Surgical Complex</h1>
                                <p className="text-sm text-gray-600" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                                    روحان میڈیکل کمپلیکس
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-6">
                            <a href="#doctors" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                Doctors
                            </a>
                            <a href="#timings" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                Timings
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                                Contact
                            </a>
                            <a
                                href="https://wa.me/923255576000"
                                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </header>

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

                        {/* Hospital Image Section */}
                        <div className="max-w-4xl mx-auto">
                            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                                <img
                                    src="/rohanmedical.jpeg"
                                    alt="Ruhan Medical Complex Hospital"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                                    <p className="text-sm md:text-base font-medium">Ruhan Medical Complex</p>
                                    <p className="text-xs md:text-sm opacity-90" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>روضان میلڈیکل کیمپلیکس</p>
                                </div> */}
                            </div>

                            {/* Address Section */}
                            <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <MapPin className="w-5 h-5 text-teal-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="text-center">
                                        <p className="text-gray-700 font-medium">
                                            Behind DSP Office Link Road, Model Town B, Khanpur
                                        </p>
                                        <p className="text-gray-600 text-sm mt-1">Khanpur, Pakistan</p>
                                    </div>

                                    <div className="text-center">
                                        <p className="text-gray-700 font-medium" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                                            ڈی ایس پی آفس کے پیچھے لنک روڈ، ماڈل ٹاؤن بی، خان پور
                                        </p>
                                        <p className="text-gray-600 text-sm mt-1" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                                            خان پور، پاکستان
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-center">
                                    <a
                                        href="https://maps.app.goo.gl/RUi7aAsNgyuEH4RbA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm"
                                    >
                                        <MapPin className="w-4 h-4" />
                                        <span>View on Google Maps</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Premium Medical Care
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                                With Expert Doctors
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                            معیاری طبی دیکھ بھال تجربہ کار ڈاکٹروں کے ساتھ
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto pt-8">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 group"
                                >
                                    <div className="flex flex-col items-center space-y-3">
                                        <div className="p-3 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl group-hover:from-teal-100 group-hover:to-blue-100 transition-all duration-300">
                                            <div className="text-teal-600">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="font-semibold text-gray-800 text-sm">{feature.title}</p>
                                            <p className="text-xs text-gray-500 mt-1" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                                                {feature.urdu}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
                            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                                <MapPin className="w-5 h-5 text-teal-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-semibold text-gray-800">Khanpur, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
                                <Phone className="w-5 h-5 text-teal-600" />
                                <div>
                                    <p className="text-sm text-gray-500">Call Now</p>
                                    <p className="font-semibold text-gray-800" dir="ltr">068-5576000</p>
                                    <p className="font-semibold text-gray-800" dir="ltr">0325-5576000</p>
                                </div>
                            </div>

                            <a
                                href="tel:03255576000"
                                className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <PhoneCall className="w-5 h-5" />
                                <span className="font-semibold">Emergency Call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctors Section */}
            <section id="doctors" className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Meet Our Expert Doctors
                        </h2>
                        <p className="text-xl text-gray-600" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                            ہمارے ماہر ڈاکٹروں سے ملیں
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-10">
                        {doctors.map((doctor, index) => (
                            <div
                                key={doctor.id}
                                data-id={doctor.id}
                                className="doctor-card bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-200"
                                style={{
                                    opacity: visibleCards.has(String(doctor.id)) ? 1 : 0,
                                    transform: visibleCards.has(String(doctor.id))
                                        ? 'translateY(0)'
                                        : 'translateY(40px)',
                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transitionDelay: `${index * 0.15}s`
                                }}
                            >
                                <div className="grid md:grid-cols-5 gap-8 p-8">
                                    {/* Doctor Photo - Fixed Circular Design */}
                                    <div className="md:col-span-1 flex justify-center md:justify-start">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                                <img
                                                    src={doctor.image}
                                                    alt={doctor.nameEn}
                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => {
                                                        e.currentTarget.onerror = null;
                                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${doctor.nameEn.replace(' ', '+')}&background=0ea5e9&color=fff&size=200&bold=true`;
                                                    }}
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                                {doctor.specialtyEn}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-4 space-y-8">
                                        {/* Doctor Header */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h3 className="text-3xl font-bold text-gray-900">{doctor.nameEn}</h3>
                                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-blue-50 px-4 py-2 rounded-full">
                                                    <Award className="w-4 h-4 text-teal-600" />
                                                    <span className="font-semibold text-teal-700">{doctor.titleEn}</span>
                                                </div>

                                                <div className="space-y-3 pt-4">
                                                    {doctor.detailsEn.map((detail, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 group">
                                                            <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300 flex-shrink-0">
                                                                <div className="text-teal-600">
                                                                    {detail.icon}
                                                                </div>
                                                            </div>
                                                            <p className="text-gray-700 leading-relaxed">{detail.text}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                                                <h3 className="text-3xl font-bold text-gray-900">{doctor.nameUrdu}</h3>
                                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-teal-50 px-4 py-2 rounded-full justify-end">
                                                    <span className="font-semibold text-blue-700">{doctor.titleUrdu}</span>
                                                    <Award className="w-4 h-4 text-blue-600" />
                                                </div>

                                                <div className="space-y-3 pt-4">
                                                    {doctor.detailsUrdu.map((detail, idx) => (
                                                        <div key={idx} className="flex items-start gap-3 group">
                                                            <p className="text-gray-700 leading-relaxed text-right">{detail.text}</p>
                                                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300 flex-shrink-0">
                                                                <div className="text-blue-600">
                                                                    {detail.icon}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timings Section */}
                                        <div id="timings" className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-2xl p-6 border border-gray-200">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                                    <Clock className="w-6 h-6 text-teal-600" />
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900">Consultation Timings</h4>
                                                <span className="text-gray-300">|</span>
                                                <h4 className="text-xl font-bold text-gray-900" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                                                    وقت ملاقات
                                                </h4>
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
                                                            <span className="font-semibold text-gray-800" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                                                                {timing.dayUrdu}
                                                            </span>
                                                        </div>
                                                        <div className="space-y-2">
                                                            {timing.morning !== "" && (<div className="flex items-center justify-between">
                                                                {/* <span className="text-sm text-gray-500">Morning:</span> */}
                                                                <span className="font-semibold text-gray-900" dir="ltr">{timing.morning}</span>
                                                            </div>)}
                                                            {timing.evening !== "" && (<div className="flex items-center justify-between">
                                                                {/* <span className="text-sm text-gray-500">Evening:</span> */}
                                                                <span className="font-semibold text-gray-900" dir="ltr">{timing.evening}</span>
                                                            </div>)}
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Location Section */}
            <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">Visit Our Hospital</h2>
                        <p className="text-xl text-gray-600" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                            ہمارے ہسپتال کا دورہ کریں
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-teal-50 rounded-xl">
                                            <MapPin className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Address</p>
                                            <p className="font-semibold text-gray-900">Behind DSP Office Link Road, Model Town B, Khanpur</p>
                                            <p className="text-gray-700">Khanpur, Pakistan</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-teal-50 rounded-xl">
                                            <Phone className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Phone Numbers</p>
                                            <p className="font-semibold text-gray-900" dir="ltr">068-5576000</p>
                                            <p className="font-semibold text-gray-900" dir="ltr">0325-5576000</p>
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
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Connect</h4>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://wa.me/923255576000"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-300 font-semibold"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            WhatsApp
                                        </a>
                                        <a
                                            href="tel:03255576000"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors duration-300 font-semibold"
                                        >
                                            <Phone className="w-5 h-5" />
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Urdu Contact Info */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">رابطے کی معلومات</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">پتہ</p>
                                            <p className="font-semibold text-gray-900">عقب ڈی ایس پی آفس  لنک روڈ ماڈل ٹاؤن B خان پور</p>
                                            <p className="text-gray-700">خان پور، پاکستان</p>
                                        </div>
                                        <div className="p-3 bg-teal-50 rounded-xl">
                                            <MapPin className="w-6 h-6 text-teal-600" />
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">فون نمبرز</p>
                                            <p className="font-semibold text-gray-900" dir="ltr">068-5576000</p>
                                            <p className="font-semibold text-gray-900" dir="ltr">0325-5576000</p>
                                        </div>
                                        <div className="p-3 bg-teal-50 rounded-xl">
                                            <Phone className="w-6 h-6 text-teal-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                                <div className="h-64 bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                                    <div className="relative text-center">
                                        <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                                            <Navigation className="w-8 h-8 text-teal-600" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900">Interactive Map</h4>
                                        <p className="text-gray-600 mt-2">Location details with directions</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">Get Directions</h4>
                                    <p className="text-gray-700 mb-4">
                                        Our hospital is conveniently located near Behind DSP Office Link Road, Model Town B, Khanpur
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

                            {/* Additional Info */}
                            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Facilities & Services</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700">Emergency Ward</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700">ICU Facilities</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700">Lab Services</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700">Pharmacy</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700">Ambulance</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                                        <span className="text-gray-700">X-Ray & Ultrasound</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
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
                                Providing premium medical care with experienced doctors and modern facilities since 2025.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                            <div className="space-y-2">
                                <a href="#doctors" className="block text-gray-400 hover:text-white transition-colors">
                                    Our Doctors
                                </a>
                                <a href="#timings" className="block text-gray-400 hover:text-white transition-colors">
                                    Consultation Timings
                                </a>
                                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                                    Contact Information
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}>
                            <h4 className="text-lg font-bold mb-4">فوری لنکس</h4>
                            <div className="space-y-2">
                                <a href="#doctors" className="block text-gray-400 hover:text-white transition-colors">
                                    ہمارے ڈاکٹرز
                                </a>
                                <a href="#timings" className="block text-gray-400 hover:text-white transition-colors">
                                    وقت ملاقات
                                </a>
                                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                                    رابطہ معلومات
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-center md:text-left">
                                <p className="text-gray-400">
                                    © 2026 Rohan Medical & Surgical Complex. All rights reserved.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href="https://facebook.com"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://wa.me/923255576000"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
                                    <span className="text-sm text-gray-400">Powered by</span>
                                    <span className="font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                                        Soman Abbasi
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RMCHospitalWebsite;
