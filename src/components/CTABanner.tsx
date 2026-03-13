export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-green via-brand-green-dark to-emerald-900">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
          <path d="M0,80 C300,150 600,20 1200,100 L1200,200 L0,200 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready for Cleaner, Healthier Air?
        </h2>
        <p className="mt-3 text-xl sm:text-2xl font-semibold text-emerald-100">
          Call Eco Clear Air Today!
        </p>

        <a
          href="tel:+18882741204"
          className="inline-flex items-center gap-3 mt-8 px-10 py-5 text-2xl sm:text-3xl font-extrabold text-brand-green bg-white hover:bg-gray-50 rounded-2xl shadow-xl shadow-black/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (888) 274-1204
        </a>

        <p className="mt-6 text-emerald-100 text-lg">
          Or{" "}
          <a
            href="#contact"
            className="underline underline-offset-4 decoration-2 decoration-white/60 hover:decoration-white font-semibold text-white transition-colors"
          >
            schedule your free estimate
          </a>{" "}
          online
        </p>
      </div>
    </section>
  );
}
