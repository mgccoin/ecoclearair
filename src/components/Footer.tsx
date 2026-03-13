import Link from "next/link";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pb-20 text-gray-300 md:pb-0">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <svg
                className="h-8 w-8 text-brand-green"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4C10 10 8 15 8 18a8 8 0 0016 0c0-3-2-8-8-14z"
                  fill="currentColor"
                />
                <path
                  d="M16 28c-1-4-1-8 2-13"
                  stroke="#1f2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 22c-3-2-4-5-3-8"
                  stroke="#1f2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xl font-bold text-white">
                Eco <span className="text-brand-green">Clear Air</span>
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Professional air duct cleaning, dryer vent services, and chimney
              sweep &amp; repair across Greater Boston, South Shore, MetroWest,
              Rhode Island, and Southern New Hampshire.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+18882741204"
                className="flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-brand-green"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-green"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (888) 274-1204
              </a>
              <a
                href="mailto:info@ecoclearair.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-brand-green"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-green"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@ecoclearair.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-green shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>20 Guest St, Brighton, MA 02135</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-brand-green"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-8 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/service-areas"
                  className="text-sm text-gray-400 transition-colors hover:text-brand-green"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/coupons"
                  className="text-sm text-gray-400 transition-colors hover:text-brand-green"
                >
                  Coupons &amp; Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 transition-colors hover:text-brand-green"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas - Cities in 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 sm:grid-cols-3 md:grid-cols-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="truncate text-sm text-gray-400 transition-colors hover:text-brand-green"
                >
                  {city.name}
                  {city.stateAbbr !== "MA" && (
                    <span className="text-gray-500">
                      , {city.stateAbbr}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Eco Clear Air. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Serving Greater Boston, South Shore, MetroWest, Rhode Island &amp;
            Southern New Hampshire
          </p>
        </div>
      </div>
    </footer>
  );
}
