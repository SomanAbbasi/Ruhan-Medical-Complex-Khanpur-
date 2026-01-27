
import Link from "next/link";

export default function DoctorCard({ doctor }: any) {
  return (
    <Link href={`/doctors/${doctor.slug}`} className="border p-4 block">
      <h3 className="font-semibold">{doctor.name}</h3>
      <p>{doctor.specialization}</p>
    </Link>
  );
}
