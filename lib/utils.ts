import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatPhoneForHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, "")}`;
}

export function formatWhatsAppHref(phone: string): string {
  const cleaned = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleaned}`;
}