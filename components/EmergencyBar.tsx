import { PhoneCall } from "lucide-react";
import { hospitalInfo } from "@/data/doctors";

export function EmergencyBar() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-4 h-4" aria-hidden="true" />
          <span className="text-sm font-semibold">EMERGENCY: </span>
          <a 
            href={`tel:${hospitalInfo.emergencyPhone}`} 
            className="font-bold hover:underline"
            dir="ltr"
          >
            {hospitalInfo.emergencyPhone}
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span>24/7 Services Available</span>
          <div className="hidden sm:block w-1 h-1 bg-white rounded-full"></div>
          <span>Open Now</span>
        </div>
      </div>
    </div>
  );
}