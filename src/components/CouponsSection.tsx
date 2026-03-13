import { coupons } from "@/data/coupons";

export default function CouponsSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
            Save Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Special Offers &amp; Coupons
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Take advantage of these exclusive deals. Mention the promo code when
            scheduling your service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className={`relative ${coupon.bgColor} border-2 ${coupon.borderColor} rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${coupon.borderColor} border-2 bg-white`}>
                  <svg className={`w-6 h-6 ${coupon.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={coupon.icon} />
                  </svg>
                </div>
                <div>
                  <p className={`text-2xl font-extrabold ${coupon.color}`}>
                    {coupon.discount}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900">
                    {coupon.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                {coupon.description}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3 px-4 py-3 bg-white border-2 border-dashed border-gray-300 rounded-xl">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    Promo Code
                  </p>
                  <p className="text-lg font-mono font-bold text-gray-900 tracking-widest">
                    {coupon.code}
                  </p>
                </div>
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>

              <a
                href="tel:+18882741204"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Redeem
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Offers cannot be combined. One coupon per service visit. Call for full
          details and terms.
        </p>
      </div>
    </section>
  );
}
