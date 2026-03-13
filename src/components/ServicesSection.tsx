import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Professional Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive cleaning, repair, and maintenance solutions for your
            home and business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-white bg-brand-green/90 rounded-lg backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                    {service.subServices.length} services
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-green transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {service.subServices.slice(0, 4).map((sub) => (
                    <li key={sub.slug} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {sub.name}
                    </li>
                  ))}
                  {service.subServices.length > 4 && (
                    <li className="text-sm text-gray-500 pl-6">
                      +{service.subServices.length - 4} more services
                    </li>
                  )}
                </ul>

                <div className="mt-5 inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
