import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Eco Clear Air for professional air duct cleaning, dryer vent services, and chimney sweep & repair. Call (888) 274-1204 or visit us at 20 Guest St, Brighton, MA 02135. Free estimates available.",
  keywords: [
    "contact Eco Clear Air",
    "air duct cleaning phone number",
    "chimney sweep contact",
    "HVAC cleaning estimate",
    "dryer vent cleaning appointment",
  ],
  alternates: { canonical: "https://ecoclearair1.com/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Eco Clear Air",
    telephone: "+1-888-274-1204",
    email: "info@ecoclearair1.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20 Guest St",
      addressLocality: "Brighton",
      addressRegion: "MA",
      postalCode: "02135",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-blue via-brand-blue-dark to-indigo-950 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero-van.png')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white/90 bg-white/15 rounded-full mb-6 backdrop-blur-sm">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Contact Eco Clear Air
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Have a question, need a free estimate, or ready to schedule your service? Our friendly team is here to help. Reach out by phone, email, or visit our office.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <a
              href="tel:+18882741204"
              className="group flex flex-col items-center text-center bg-brand-green/5 border-2 border-brand-green/20 rounded-2xl p-8 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-brand-green/40"
            >
              <div className="w-16 h-16 bg-brand-green text-white rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Call Us</h2>
              <p className="text-2xl font-extrabold text-brand-green mb-2">(888) 274-1204</p>
              <p className="text-sm text-gray-600">Sun–Fri: 7AM–7PM &bull; Sat: Closed</p>
            </a>

            {/* Email */}
            <a
              href="mailto:info@ecoclearair1.com"
              className="group flex flex-col items-center text-center bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-blue-400"
            >
              <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Email Us</h2>
              <p className="text-lg font-bold text-brand-blue mb-2">info@ecoclearair1.com</p>
              <p className="text-sm text-gray-600">We respond within 24 hours</p>
            </a>

            {/* Address */}
            <div className="group flex flex-col items-center text-center bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-amber-400">
              <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h2>
              <p className="text-lg font-bold text-amber-700 mb-2">20 Guest St</p>
              <p className="text-sm text-gray-600">Brighton, MA 02135</p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Eco Clear Air Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8!2d-71.1418!3d42.3535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f0e7e3d1b9%3A0x0!2s20+Guest+St%2C+Brighton%2C+MA+02135!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Business Hours & Info */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Business Hours</h2>
              <div className="space-y-4">
                {[
                  { day: "Sunday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Monday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Tuesday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Wednesday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Thursday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Friday", hours: "7:00 AM – 7:00 PM" },
                  { day: "Saturday", hours: "Closed" },
                ].map((item) => (
                  <div key={item.day} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-gray-700">{item.day}</span>
                    <span className={`font-bold ${item.hours === "Closed" ? "text-red-500" : "text-gray-900"}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-brand-green/5 rounded-xl border border-brand-green/20">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-brand-green">Emergency service available.</span>{" "}
                  For urgent issues outside business hours, call us and leave a message — we&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Why Choose Eco Clear Air?</h2>
              <div className="space-y-5">
                {[
                  { title: "Free Estimates", desc: "We provide no-obligation estimates for every job. Know your cost before we start." },
                  { title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured for your complete peace of mind." },
                  { title: "Certified Technicians", desc: "Our team holds NADCA and CSIA certifications — the highest standards in the industry." },
                  { title: "Eco-Friendly Products", desc: "We use EPA-registered, botanically-based sanitizers that are safe for your family and pets." },
                  { title: "Satisfaction Guaranteed", desc: "If you're not 100% satisfied, we'll make it right — that's our promise." },
                  { title: "Serving 40+ Cities", desc: "From Boston to Providence to Nashua, we cover all of New England." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We offer a full range of air quality and chimney services for residential and commercial customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-green/30"
              >
                <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-green group-hover:text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-brand-green to-brand-green-dark">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get Your Free Estimate Today
          </h2>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
            Whether you need air duct cleaning, a chimney sweep, or dryer vent service, we&apos;re just a phone call away. No obligation, no pressure — just honest, professional service.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18882741204"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-green shadow-xl transition-all hover:bg-gray-50 hover:shadow-2xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (888) 274-1204
            </a>
            <a
              href="mailto:info@ecoclearair1.com"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
