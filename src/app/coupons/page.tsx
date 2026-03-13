import type { Metadata } from "next";
import { coupons } from "@/data/coupons";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coupons & Special Offers",
  description:
    "Save on air duct cleaning, dryer vent services, chimney sweep and more with Eco Clear Air coupons. First-time customer discounts, senior citizen savings, military discounts, and exclusive promo codes.",
  keywords: [
    "air duct cleaning coupon",
    "chimney sweep discount",
    "dryer vent cleaning deal",
    "HVAC cleaning promo code",
    "senior discount air duct cleaning",
    "military discount chimney sweep",
  ],
  alternates: { canonical: "https://ecoclearair.com/coupons" },
};

export default function CouponsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-green via-brand-green-dark to-emerald-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero-van.png')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white/90 bg-white/15 rounded-full mb-6 backdrop-blur-sm">
            Exclusive Savings
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Coupons &amp; Special Offers
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            We believe clean air should be affordable for everyone. Take advantage of these exclusive discounts on our professional air duct cleaning, dryer vent, chimney, and specialty services.
          </p>
          <a
            href="tel:+18882741204"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-green shadow-xl transition-all hover:bg-gray-50 hover:shadow-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call (888) 274-1204
          </a>
        </div>
      </section>

      {/* Coupons Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Current Promotions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Mention the promo code when scheduling your service to redeem your discount. Call us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coupons.map((coupon) => (
              <div
                key={coupon.id}
                className={`relative ${coupon.bgColor} border-2 ${coupon.borderColor} rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-xl ${coupon.borderColor} border-2 bg-white`}>
                    <svg className={`w-7 h-7 ${coupon.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={coupon.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-3xl font-extrabold ${coupon.color}`}>{coupon.discount}</p>
                    <h3 className="text-lg font-bold text-gray-900">{coupon.title}</h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm flex-1">{coupon.description}</p>

                <div className="mt-5 flex items-center justify-between gap-3 px-4 py-3 bg-white border-2 border-dashed border-gray-300 rounded-xl">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Promo Code</p>
                    <p className="text-xl font-mono font-bold text-gray-900 tracking-widest">{coupon.code}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>

                <a
                  href="tel:+18882741204"
                  className="mt-4 inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 text-sm font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl transition-colors shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Redeem
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Offers cannot be combined. One coupon per service visit. Call for full details and terms.
          </p>
        </div>
      </section>

      {/* How to Redeem */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              How to Redeem Your Coupon
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Saving money on professional air quality services is easy — just follow these three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Choose Your Coupon", desc: "Browse our available offers above and pick the one that applies to you — first-time customer, senior, military, or one of our general discounts." },
              { step: "2", title: "Call & Mention Code", desc: "Give us a call at (888) 274-1204 and mention the promo code when scheduling your service. Our team will apply your discount." },
              { step: "3", title: "Enjoy the Savings", desc: "Our certified technicians arrive on time, deliver exceptional service, and your discount is applied automatically to your final bill." },
            ].map((item) => (
              <div key={item.step} className="text-center bg-white rounded-2xl p-8 shadow-md">
                <div className="w-14 h-14 bg-brand-green text-white text-2xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-5">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Services Eligible for Discounts
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              All of our coupons can be applied to any of the services below.
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

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-center mb-12">
            Coupon FAQs
          </h2>
          <div className="space-y-6">
            {[
              { q: "Can I combine multiple coupons?", a: "No, only one coupon can be applied per service visit. Choose the offer that gives you the greatest savings." },
              { q: "Do coupons expire?", a: "Our current promotions are ongoing, but we reserve the right to change or discontinue offers at any time. Call us to confirm current availability." },
              { q: "Can I use a coupon on an emergency service call?", a: "Yes! Our coupons apply to all service types, including emergency calls. Just mention the promo code when you call." },
              { q: "How do I qualify for the Senior Citizens discount?", a: "Customers aged 65 and older qualify for our 15% senior discount. A valid ID may be requested at the time of service." },
              { q: "What counts as proof for the Military & Veterans discount?", a: "We accept any valid military ID, VA card, DD-214, or other official documentation of military service. The discount extends to immediate family members." },
              { q: "Are coupons valid for all service areas?", a: "Yes, our coupons are valid across all of our service areas in Massachusetts, Rhode Island, and New Hampshire." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-brand-green to-brand-green-dark">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Save? Call Us Today!
          </h2>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
            Mention your promo code when you call and our friendly team will schedule your discounted service right away.
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
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
            >
              View Service Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
