import Image from "next/image";

const trustBadges = [
  {
    label: "Licensed & Insured",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Eco-Friendly Products",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    label: "Same-Day Service",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "100% Satisfaction Guaranteed",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <Image
        src="/images/hero-van.png"
        alt="Eco Clear Air professional service van"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-brand-green-dark/40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-brand-green bg-brand-green/10 border border-brand-green/30 rounded-full backdrop-blur-sm">
            Serving Greater Boston &amp; Beyond
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Boston&apos;s #1 Trusted Air Duct &amp; Chimney Cleaning{" "}
            <span className="text-brand-green">Experts</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
            Eco-friendly cleaning services for healthier indoor air. Serving
            Greater Boston, South Shore, MetroWest, and beyond.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+18882741204"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl shadow-lg shadow-brand-green/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (888) 274-1204
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-gray-900 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              View Our Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl"
            >
              <span className="shrink-0 text-brand-green">{badge.icon}</span>
              <span className="text-sm font-medium text-white leading-snug">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
