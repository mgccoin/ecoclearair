export interface Coupon {
  id: string;
  title: string;
  discount: string;
  description: string;
  code: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const coupons: Coupon[] = [
  {
    id: "first-time",
    title: "First-Time Customer",
    discount: "$50 OFF",
    description: "Welcome to the Eco Clear Air family! Get $50 off your first service. Valid for all new customers on any service.",
    code: "WELCOME50",
    icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
  },
  {
    id: "senior",
    title: "Senior Citizens Discount",
    discount: "15% OFF",
    description: "We honor our seniors with a 15% discount on all services. Available for customers 65 years and older. Cannot be combined with other offers.",
    code: "SENIOR15",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  {
    id: "military",
    title: "Military & Veterans",
    discount: "15% OFF",
    description: "Thank you for your service! Active military, veterans, and their families receive 15% off all services. Valid military ID required.",
    code: "MILITARY15",
    icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
  },
  {
    id: "all-services",
    title: "All Services Special",
    discount: "10% OFF",
    description: "Save 10% on any service we offer! Whether it's air duct cleaning, dryer vent service, chimney sweep, or specialty work — enjoy the savings.",
    code: "SAVE10",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: "parts-discount",
    title: "Parts & Materials",
    discount: "15% OFF",
    description: "Get 15% off all parts and materials including chimney caps, liners, dryer vent ducting, UV lights, and more. Applies to material costs only.",
    code: "PARTS15",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
  },
];
