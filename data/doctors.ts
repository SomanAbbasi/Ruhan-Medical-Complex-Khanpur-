export interface Doctor {
  id: number;
  slug: string;
  nameEn: string;
  nameUrdu: string;
  titleEn: string;
  titleUrdu: string;
  specialtyEn: string;
  specialtyUrdu: string;
  detailsEn: string[];
  detailsUrdu: string[];
  timings: {
    day: string;
    dayUrdu: string;
    morning?: string;
    evening?: string;
  }[];
  facebook: string;
  whatsapp: string;
  phones: string[];
  image: string;
  qualifications: string[];
}

export const doctors: Doctor[] = [
  {
    id: 1,
    slug: "dr-shahid-iqbal",
    nameEn: "Dr. Shahid Iqbal",
    nameUrdu: "ڈاکٹر شاہد اقبال",
    titleEn: "General Surgeon & Family Physician",
    titleUrdu: "جنرل سرجن و فیملی فزیشن",
    specialtyEn: "ENT Specialist",
    specialtyUrdu: "خصوصی معالج ناک کان گلہ",
    detailsEn: [
      "ENT Specialist",
      "MBBS - RMP",
      "Deputy Medical Superintendent, Tehsil Headquarters Hospital, Liaquat Pur",
      "Ex. Medical Officer, Sheikh Zayed Hospital, Rahim Yar Khan",
      "Certificate of Hepatitis Management from Royal College of Physicians (England)"
    ],
    detailsUrdu: [
      "خصوصی معالج ناک کان گلہ",
      "ایم بی بی ایس - آرایم پی",
      "ڈپٹی میڈیکل سپرنٹنڈنٹ، تحصیل ہیڈ کوارٹر ہسپتال، لیاقت پور",
      "سابق میڈیکل آفیسر شیخ زید ہسپتال رحیم یار خان",
      "رائل کالج آف فزیشنز (انگلینڈ) سے ہیپاٹائٹس مینجمنٹ کا سرٹیفکیٹ"
    ],
    timings: [
      { day: "Daily", dayUrdu: "روزانہ", evening: "06:00 PM - 09:00 PM" }
    ],
    facebook: "https://www.facebook.com/share/1F3gxqsmP8/",
    whatsapp: "923255576000",
    phones: ["0325-5576000", "068-5576000"],
    image: "/doctors/shahid.jpg",
    qualifications: ["MBBS", "RMP", "ENT Specialist"]
  },
  {
    id: 2,
    slug: "dr-muhammad-asad-jamal",
    nameEn: "Dr. Muhammad Asad Jamal",
    nameUrdu: "ڈاکٹر محمد اسد جمال",
    titleEn: "General and Laparoscopic Surgeon",
    titleUrdu: "جنرل اینڈ لیپرو سکوپک سرجن",
    specialtyEn: "General Surgeon",
    specialtyUrdu: "جنرل سرجن",
    detailsEn: [
      "MBBS - FCP (Surgery)",
      "Former Registrar Sargodha Medical College Sargodha"
    ],
    detailsUrdu: [
      "ایم بی بی ایس, ایف سی پی (سرجری)",
      "سابق رجسٹرار سرگودھا مڈیکل کالج سرگودھا"
    ],
    timings: [
      { day: "Daily", dayUrdu: "روزانہ", evening: "05:00 PM - 08:00 PM" }
    ],
    facebook: "https://www.facebook.com/share/1F3gxqsmP8/",
    whatsapp: "923255576000",
    phones: ["0325-5576000", "068-5576000"],
    image: "/doctors/asad.jpg",
    qualifications: ["MBBS", "FCP (Surgery)"]
  },
  {
    id: 3,
    slug: "dr-shumaila-jaleel",
    nameEn: "Dr. Shumaila Jaleel",
    nameUrdu: "ڈاکٹرشمائلہ جلیل",
    titleEn: "Pediatrician & Neonatologist",
    titleUrdu: "ماہر امراض بچگان و نوزائیدگان",
    specialtyEn: "Child Specialist",
    specialtyUrdu: "بچوں کے ماہر",
    detailsEn: [
      "MBBS - Nishtar Medical College",
      "FCPS (R) Pediatrics Medicine",
      "Former Registrar, Children Ward, Sheikh Zayed Hospital, Rahim Yar Khan"
    ],
    detailsUrdu: [
      "ایم بی بی ایس نشتر میڈیکل کالج",
      "ایف سی پی ایس  (R)  پیڈ ز میڈیسن",
      "سابق رجسٹرار چلڈرن وارڈ شیخ زید ہسپتال رحیم یارخان"
    ],
    timings: [
      { day: "Daily", dayUrdu: "روزانہ", morning: "01:00 PM - 07:00 PM" }
    ],
    facebook: "https://www.facebook.com/share/1F3gxqsmP8/",
    whatsapp: "923255576000",
    phones: ["0325-5576000", "068-5576000"],
    image: "/doctors/shumaila.jpg",
    qualifications: ["MBBS", "FCPS (R) Pediatrics"]
  },
  // {
  //   id: 4,
  //   slug: "dr-muhammad-yasar-aslam",
  //   nameEn: "Dr. Muhammad Yasar Aslam",
  //   nameUrdu: "ڈاکٹر محمد یا سر اسلم",
  //   titleEn: "Consultant Physician",
  //   titleUrdu: "کنسلٹنٹ فزیشن",
  //   specialtyEn: "General Medicine",
  //   specialtyUrdu: "جنرل میڈیسن",
  //   detailsEn: [
  //     "MBBS (Gold Medalist), FCPS (II) Medicine",
  //     "Medical Officer, Tehsil Headquarters Hospital, Khanpur",
  //     "Former Registrar, Medicine Department, Sheikh Zayed Hospital, Rahim Yar Khan"
  //   ],
  //   detailsUrdu: [
  //     "ایم بی بی ایس ( گولڈ میڈلسٹ ) ایف سی پی ایس (2) میڈیسن",
  //     "میڈیکل آفیسر تحصیل ہیڈ کوارٹر ہسپتال خان پور",
  //     "سابق رجسٹرار میڈسن ڈ یپارٹمنٹ شیخ زید ہسپتال رحیم یارخان"
  //   ],
  //   timings: [
  //     { day: "Daily", dayUrdu: "روزانہ", evening: "05:00 PM - 08:00 PM" }
  //   ],
  //   facebook: "https://www.facebook.com/share/1F3gxqsmP8/",
  //   whatsapp: "923255576000",
  //   phones: ["0325-5576000", "068-5576000"],
  //   image: "/doctors/yasar.jpg",
  //   qualifications: ["MBBS (Gold Medalist)", "FCPS (II) Medicine"]
  // },
  {
    id: 4,
    slug: "dr-muhammad-faisal-rafiq",
    nameEn: "Dr. Muhammad Faisal Rafiq",
    nameUrdu: "ڈاکٹر محمد فیصل رفیق",
    titleEn: "Radiologist & Ultrasound Specialist",
    titleUrdu: "ریڈیالوجسٹ اینڈ الٹرا ساؤنڈ اسپیشلسٹ",
    specialtyEn: "Imaging Specialist",
    specialtyUrdu: "امیدنگ ماہر",
    detailsEn: [
      "MBBS (KEMU)",
      "FCPS (R) (Radiology)",
      "Medical Officer, Tehsil Headquarters Hospital, Khanpur"
    ],
    detailsUrdu: [
      "ایم بی بی ایس (KEMU)",
      "ایف سی پی ایس (R) (ریڈیالوجی)",
      "میڈیکل آفیسر تحصیل ہیڈ کوارٹر ہسپتال خان پور"
    ],
    timings: [
      { day: "Daily", dayUrdu: "روزانہ", evening: "05:00 PM - 08:00 PM" }
    ],
    facebook: "https://www.facebook.com/share/1F3gxqsmP8/",
    whatsapp: "923255576000",
    phones: ["0325-5576003", "0325-5576004"],
    image: "/doctors/faisal.jpg",
    qualifications: ["MBBS (KEMU)", "FCPS (R) Radiology"]
  }
];

export const hospitalInfo = {
  name: "Ruhan Medical Complex",
  nameUrdu: "روحان میڈیکل کمپلیکس",
  address: "Behind DSP Office Link Road, Model Town B, Khanpur, Rahim Yar Khan, Pakistan",
  phone: ["0325-5576000", "068-5576000"],
  emergencyPhone: "0325-5576000",
  established: "2025",
  coordinates: {
    lat: 28.6500,
    lng: 70.6500
  },
  businessHours: "24/7",
  services: [
    "Emergency Ward",
    "Operation Theaters",
    "Ultrasound",
    "General Ward",
    "Pharmacy",
    "Lab Services",
    "Ambulance",
  ]
};