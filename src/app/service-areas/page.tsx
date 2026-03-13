import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Service Areas — Cities We Serve",
  description:
    "Eco Clear Air provides professional air duct cleaning, dryer vent services, and chimney sweep & repair across 40+ communities in Massachusetts, Rhode Island, and New Hampshire. Find your city and call (888) 274-1204.",
  alternates: {
    canonical: "https://ecoclearair.com/service-areas",
  },
};

const stateGroups = cities.reduce(
  (acc, city) => {
    const key = city.state;
    if (!acc[key]) acc[key] = [];
    acc[key].push(city);
    return acc;
  },
  {} as Record<string, typeof cities>,
);

const stateOrder = ["Massachusetts", "Rhode Island", "New Hampshire"];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-green via-brand-green-dark to-emerald-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 600"
          >
            <circle cx="200" cy="100" r="300" fill="white" />
            <circle cx="1000" cy="500" r="250" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            40+ Communities Served
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Service Areas
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-emerald-100 leading-relaxed">
            Eco Clear Air proudly serves communities across Massachusetts, Rhode
            Island, and Southern New Hampshire with professional air duct
            cleaning, dryer vent services, and chimney sweep &amp; repair.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-emerald-200 text-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Headquartered at 20 Guest St, Brighton, MA 02135</span>
          </div>
          <div className="mt-8">
            <a
              href="tel:+18882741204"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg font-bold text-brand-green bg-white hover:bg-gray-50 rounded-xl shadow-lg shadow-black/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call (888) 274-1204
            </a>
          </div>
        </div>
      </section>

      {/* Cities by State */}
      {stateOrder.map((stateName) => {
        const stateCities = stateGroups[stateName];
        if (!stateCities) return null;

        return (
          <section key={stateName} className="py-16 md:py-20 even:bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-3">
                  {stateName}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {stateName} Service Areas
                </h2>
                <p className="mt-3 text-lg text-gray-600">
                  {stateCities.length} communities served in {stateName}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {stateCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="group flex items-start gap-4 bg-white border-2 border-gray-100 hover:border-brand-green/40 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-green transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {city.stateAbbr} &middot; Pop. {city.population}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {services.slice(0, 2).map((s) => (
                          <span
                            key={s.slug}
                            className="inline-block px-2 py-0.5 text-xs font-medium text-brand-green bg-brand-green/5 rounded"
                          >
                            {s.name.split(" ").slice(0, 2).join(" ")}
                          </span>
                        ))}
                        <span className="inline-block px-2 py-0.5 text-xs font-medium text-gray-400">
                          +{services.length - 2} more
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* All Services Available */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Full Service Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Services Available in Every City
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every community we serve gets access to our complete range of air
              quality, dryer vent, and chimney services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border-2 border-gray-100 hover:border-brand-green/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {service.shortDescription}
                </p>
                <p className="text-xs text-gray-400">
                  {service.subServices.length} sub-services available
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your City? */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We may still serve your area! Our team regularly travels throughout
            Greater Boston, the South Shore, MetroWest, Rhode Island, and
            Southern New Hampshire. Call us to check if we can come to you.
          </p>
          <a
            href="tel:+18882741204"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl shadow-lg shadow-brand-green/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call (888) 274-1204
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
