import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services — Air Duct, Dryer Vent, Chimney & More",
  description:
    "Explore Eco Clear Air's full range of professional services: air duct cleaning, dryer vent cleaning & repair, chimney sweep & repair, and specialty services. Serving Greater Boston & New England. Call (888) 274-1204.",
  alternates: {
    canonical: "https://ecoclearair1.com/services",
  },
  openGraph: {
    title: "Our Services | Eco Clear Air",
    description:
      "Air duct cleaning, dryer vent services, chimney sweep & repair, and specialty services across Greater Boston.",
    url: "https://ecoclearair1.com/services",
  },
};

export default function ServicesOverviewPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-brand-green-dark/60">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 400">
            <path d="M0,200 C300,350 600,50 1200,200 L1200,400 L0,400 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-green bg-brand-green/10 border border-brand-green/30 rounded-full">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Our Professional Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Comprehensive air duct cleaning, dryer vent services, chimney sweep
            &amp; repair, and specialty solutions for homes and businesses across
            Greater Boston and New England.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.slug}
              className={`flex flex-col ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 items-center bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden`}
            >
              <div className="relative w-full lg:w-1/2 h-72 sm:h-80 lg:h-[28rem] shrink-0">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 lg:py-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                  {service.subServices.length} services
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {service.name}
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.subServices.map((sub) => (
                    <li
                      key={sub.slug}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <svg className="w-4 h-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {sub.name}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 text-base font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl shadow-md shadow-brand-green/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
