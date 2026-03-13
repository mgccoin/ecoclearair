import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCityBySlug, cities } from "@/data/cities";
import { services, getServiceBySlug, getSubServiceBySlug } from "@/data/services";
import FAQSection from "@/components/FAQSection";
import CouponsSection from "@/components/CouponsSection";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  const params: { city: string; service: string; subservice: string }[] = [];
  for (const city of cities) {
    for (const svc of services) {
      for (const sub of svc.subServices) {
        params.push({ city: city.slug, service: svc.slug, subservice: sub.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string; subservice: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug, subservice: subSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlug(serviceSlug, subSlug);
  if (!city || !service || !subService) return {};

  return {
    title: `${subService.name} in ${city.name}, ${city.stateAbbr} | Eco Clear Air`,
    description: `Professional ${subService.name.toLowerCase()} in ${city.name}, ${city.stateAbbr}. ${subService.shortDescription} Serving ${city.neighborhoodKeywords.slice(0, 3).join(", ")} and all of ${city.areaDescription}. Call (888) 274-1204.`,
    alternates: {
      canonical: `https://ecoclearair.com/${city.slug}/${service.slug}/${subService.slug}`,
    },
  };
}

export default async function CitySubServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string; subservice: string }>;
}) {
  const { city: citySlug, service: serviceSlug, subservice: subSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlug(serviceSlug, subSlug);
  if (!city || !service || !subService) notFound();

  const siblingSubServices = service.subServices.filter(
    (s) => s.slug !== subService.slug
  );
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const cityFaqs = service.faqs.map((faq) => ({
    question: faq.question,
    answer: `${faq.answer} Our team serving ${city.name} is ready to help — call (888) 274-1204.`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://ecoclearair.com/${city.slug}/${service.slug}/${subService.slug}`,
    name: `${subService.name} in ${city.name}, ${city.stateAbbr}`,
    description: `${subService.description} Available in ${city.name}, ${city.stateAbbr}.`,
    url: `https://ecoclearair.com/${city.slug}/${service.slug}/${subService.slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://ecoclearair.com",
      name: "Eco Clear Air",
      telephone: "+1-888-274-1204",
      image: "https://ecoclearair.com/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "20 Guest St",
        addressLocality: "Brighton",
        addressRegion: "MA",
        postalCode: "02135",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue-dark to-indigo-950">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 600"
          >
            <circle cx="150" cy="80" r="280" fill="white" />
            <circle cx="1050" cy="520" r="220" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href={`/${city.slug}`}
              className="hover:text-white transition-colors"
            >
              {city.name}
            </Link>
            <span>/</span>
            <Link
              href={`/${city.slug}/${service.slug}`}
              className="hover:text-white transition-colors"
            >
              {service.name}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{subService.name}</span>
          </nav>

          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            {city.name}, {city.stateAbbr}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {subService.name} in {city.name}, {city.stateAbbr}
          </h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-blue-100 leading-relaxed">
            {subService.description} Serving neighborhoods like{" "}
            {city.neighborhoodKeywords.slice(0, 3).join(", ")} and all of{" "}
            {city.areaDescription}, our certified technicians deliver expert{" "}
            {subService.name.toLowerCase()} tailored to {city.name}&apos;s
            unique needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+18882741204"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl shadow-lg shadow-black/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
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
            <Link
              href={`/${city.slug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/40 hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              View All Services in {city.name}
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={service.image}
              alt={`${subService.name} in ${city.name}, ${city.stateAbbr} — Professional service by Eco Clear Air`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              priority
            />
          </div>
          <p className="mt-4 text-center text-sm text-gray-500 italic">
            {subService.name} in {city.name}, {city.stateAbbr} — Professional service by Eco Clear Air
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Why It Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Benefits of {subService.name} in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subService.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 bg-white border-2 border-gray-100 hover:border-brand-green/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green shrink-0">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Local Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Why {city.name} Needs {subService.name}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                {city.weatherNote} For the {city.population} residents of{" "}
                {city.name}, this means {subService.name.toLowerCase()} is not
                just a convenience — it&apos;s essential for maintaining healthy
                indoor air quality and protecting your property year-round.
              </p>
              <p>
                Whether you live near{" "}
                {city.localLandmarks.slice(0, 2).join(" or ")} or in popular
                neighborhoods like{" "}
                {city.neighborhoodKeywords.slice(0, 4).join(", ")}, the local
                climate and environment create conditions that demand regular{" "}
                {subService.name.toLowerCase()}. Dust, allergens, and
                contaminants accumulate faster in {city.areaDescription}, making
                professional service a smart investment.
              </p>
              <p>
                Eco Clear Air has served {city.name} and {city.areaDescription}{" "}
                with top-rated {subService.name.toLowerCase()} for years. Our
                certified technicians use eco-friendly, EPA-registered botanical
                products that are safe for your family, pets, and the
                environment. We understand the unique challenges properties in{" "}
                {city.name} face and tailor every service accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Guide — Long-form SEO Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-blue bg-brand-blue/10 rounded-full mb-4">
            Complete Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
            {subService.name} in {city.name}, {city.stateAbbr} — What You Need to Know
          </h2>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            {/* Paragraph 1 — Introduction */}
            <p>
              With a population of {city.population}, {city.name} is one of {city.stateAbbr}&apos;s most vibrant communities — and that means thousands of residential and commercial properties rely on well-maintained HVAC and ventilation systems every single day. If you own or manage a property in neighborhoods like {city.neighborhoodKeywords.slice(0, 4).join(", ")}, or anywhere across {city.areaDescription}, understanding the importance of professional {subService.name.toLowerCase()} is critical for protecting your investment, safeguarding indoor air quality, and keeping energy costs under control. {subService.description} At Eco Clear Air, we specialize in delivering thorough, certified {subService.name.toLowerCase()} to {city.name} homeowners and businesses — backed by NADCA-certified technicians, eco-friendly products, and a commitment to excellence that has made us {city.areaDescription}&apos;s trusted choice for indoor air quality services. Whether your property sits near {city.localLandmarks.slice(0, 2).join(" or ")} or in the heart of the city, our team is ready to help.
            </p>

            {/* H3 — Why properties need this service */}
            <h3 className="text-2xl font-bold text-gray-900 !mt-10">
              Why {city.name} Properties Need {subService.name}
            </h3>
            <p>
              {city.weatherNote} These local climate patterns directly affect the air ducts, vents, and chimney systems inside {city.name} homes and businesses. The seasonal temperature swings common across {city.areaDescription} force heating and cooling systems to work overtime, pushing dust, allergens, pet dander, mold spores, and other contaminants through your ductwork with every cycle. Over time, these particles build up and compromise both air quality and system efficiency. Older properties throughout {city.name} — many built decades ago — often feature ductwork that has never been professionally cleaned, making {subService.name.toLowerCase()} even more urgent. {city.areaDescription} is known for a diverse mix of historic homes, mid-century construction, and modern developments, each presenting unique ventilation challenges. The combination of {city.name}&apos;s weather patterns, aging housing stock, and high population density creates an environment where regular professional {subService.name.toLowerCase()} is not optional — it&apos;s a necessity for healthy, efficient living.
            </p>

            {/* H3 — What our service includes */}
            <h3 className="text-2xl font-bold text-gray-900 !mt-10">
              What Our {subService.name} Service Includes in {city.name}
            </h3>
            <p>
              When you schedule {subService.name.toLowerCase()} with Eco Clear Air in {city.name}, you receive a comprehensive, multi-step process designed for maximum effectiveness. Our NADCA-certified technicians begin with a thorough inspection using advanced video camera technology to assess the condition of your system and identify problem areas. We then deploy professional-grade HEPA-filtered negative air machines and specialized rotary brush systems to dislodge and extract years of accumulated debris, dust, and contaminants from every register, trunk line, and branch run in your system. For {subService.name.toLowerCase()} specifically, our team follows industry best practices refined over years of serving {city.name} and {city.areaDescription}. As part of our broader {service.name.toLowerCase()} offerings in {city.name}, we ensure every job includes sanitization with Benefect Decon 30 — a botanical, EPA-registered antimicrobial that eliminates bacteria, mold, and viruses without harsh chemicals. The entire process typically takes two to four hours depending on system size, and our technicians leave your property spotless with full before-and-after documentation so you can see the difference.
            </p>

            {/* H3 — Warning signs */}
            <h3 className="text-2xl font-bold text-gray-900 !mt-10">
              Warning Signs {city.name} Homeowners Should Watch For
            </h3>
            <p>
              Many {city.name} property owners don&apos;t realize they need {subService.name.toLowerCase()} until the problem becomes severe. Here are six common warning signs that indicate it&apos;s time to call Eco Clear Air for professional service in {city.name}:
            </p>
            <ul className="space-y-3 !mt-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold shrink-0 mt-0.5">1</span>
                <span><strong>Visible dust buildup around vents and registers</strong> — If you notice dust accumulating on vent covers shortly after cleaning, your system is circulating contaminated air throughout your {city.name} property.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold shrink-0 mt-0.5">2</span>
                <span><strong>Unexplained increase in energy bills</strong> — {city.name}&apos;s climate already pushes HVAC systems hard; clogged ducts and vents force equipment to work even harder, spiking utility costs significantly.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold shrink-0 mt-0.5">3</span>
                <span><strong>Musty or stale odors when the system runs</strong> — Mold growth inside ducts is common in {city.areaDescription} due to humidity fluctuations, and these odors are often the first sign.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold shrink-0 mt-0.5">4</span>
                <span><strong>Worsening allergy or asthma symptoms indoors</strong> — Pollen, pet dander, and dust mites thrive in dirty ductwork. {city.name} residents with respiratory conditions often notice immediate relief after professional cleaning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold shrink-0 mt-0.5">5</span>
                <span><strong>Uneven heating or cooling between rooms</strong> — Blockages in your duct system prevent conditioned air from reaching all areas evenly, a frequent issue in {city.name}&apos;s older multi-story homes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold shrink-0 mt-0.5">6</span>
                <span><strong>Recent renovation or construction work</strong> — Drywall dust, sawdust, and construction debris quickly infiltrate duct systems. If you&apos;ve recently remodeled your {city.name} property, professional cleaning is essential.</span>
              </li>
            </ul>

            {/* H3 — Health & safety benefits */}
            <h3 className="text-2xl font-bold text-gray-900 !mt-10">
              Health &amp; Safety Benefits for {city.name} Families
            </h3>
            <p>
              The EPA estimates that indoor air can be two to five times more polluted than outdoor air — and {city.name} properties are no exception. Professional {subService.name.toLowerCase()} dramatically reduces airborne particulates including dust mites, mold spores, bacteria, pollen, and volatile organic compounds (VOCs) that circulate through your living space every time your HVAC system operates. For {city.name} families with children, elderly residents, or anyone with asthma, allergies, or respiratory sensitivities, the health impact is substantial. Studies show that thorough duct and vent cleaning can reduce airborne allergens by up to 85%, leading to fewer sick days, better sleep quality, and improved overall well-being. Beyond air quality, {subService.name.toLowerCase()} provides critical fire prevention benefits — the U.S. Fire Administration reports that failure to clean dryer vents and chimneys is a leading cause of residential fires nationwide. In {city.name}&apos;s densely built neighborhoods, this safety consideration is especially important. By choosing Eco Clear Air for your {subService.name.toLowerCase()} in {city.name}, you&apos;re making a proactive investment in your family&apos;s health, safety, and comfort.
            </p>

            {/* H3 — Eco-friendly approach */}
            <h3 className="text-2xl font-bold text-gray-900 !mt-10">
              Our Eco-Friendly Approach in {city.name}
            </h3>
            <p>
              At Eco Clear Air, sustainability isn&apos;t just our name — it&apos;s the foundation of every service we deliver in {city.name}. We exclusively use Benefect Decon 30, a hospital-grade botanical antimicrobial made from thyme oil that is EPA-registered, Health Canada-approved, and requires zero rinse or wipe after application. Unlike traditional chemical sanitizers, Benefect achieves a 99.99% kill rate on bacteria, mold, and viruses while remaining completely safe for children, pets, and anyone with chemical sensitivities. This matters tremendously to {city.name} families who want a clean, healthy home without introducing harsh toxins into their living environment. Our technicians also use HEPA-filtered containment systems that capture 99.97% of particles as small as 0.3 microns — ensuring that the contaminants we remove from your system don&apos;t end up elsewhere in your {city.name} property. From our low-emission service vehicles to our recyclable protective materials, every aspect of our operation in {city.areaDescription} is designed to minimize environmental impact while maximizing results for your indoor air quality.
            </p>

            {/* H3 — Schedule today */}
            <h3 className="text-2xl font-bold text-gray-900 !mt-10">
              Schedule {subService.name} in {city.name} Today
            </h3>
            <p>
              Ready to experience the difference professional {subService.name.toLowerCase()} makes for your {city.name} property? Eco Clear Air offers free, no-obligation estimates for every service, with transparent pricing and no hidden fees. Most {subService.name.toLowerCase()} appointments in {city.name} can be completed in a single visit, and we offer same-day and next-day availability for urgent situations. We proudly serve every neighborhood in {city.name} — including {city.neighborhoodKeywords.join(", ")} — as well as all surrounding communities across {city.areaDescription}. Our service area covers ZIP codes {city.zipCodes.join(", ")} and beyond. To schedule your appointment or request a free estimate, call us today at{" "}
              <a href="tel:+18882741204" className="font-bold text-brand-green hover:underline">(888) 274-1204</a>. Our friendly team is available seven days a week to answer your questions and get you on the schedule. Don&apos;t wait until small problems become expensive repairs — invest in professional {subService.name.toLowerCase()} from {city.areaDescription}&apos;s most trusted indoor air quality company and breathe easier starting today.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-14 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* NADCA Certified */}
            <div className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-900">NADCA Certified</span>
              <span className="text-xs text-gray-500">National Air Duct Cleaners Association</span>
            </div>
            {/* CSIA Certified */}
            <div className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-900">CSIA Certified</span>
              <span className="text-xs text-gray-500">Chimney Safety Institute of America</span>
            </div>
            {/* Licensed */}
            <div className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-900">Licensed in {city.state}</span>
              <span className="text-xs text-gray-500">Fully Licensed &amp; Insured</span>
            </div>
            {/* Eco-Friendly */}
            <div className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m-5.657.274a9 9 0 009.879-4.894" />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-900">Eco-Friendly Products</span>
              <span className="text-xs text-gray-500">EPA-Registered Botanical Sanitizers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sub-Services */}
      {siblingSubServices.length > 0 && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
                Related Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Other {service.name} in {city.name}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Explore our full range of {service.name.toLowerCase()} available
                throughout {city.areaDescription}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siblingSubServices.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/${city.slug}/${service.slug}/${sub.slug}`}
                  className="group bg-white border-2 border-gray-100 hover:border-brand-green/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-green transition-colors mb-2">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {sub.shortDescription}
                  </p>
                  <ul className="space-y-2">
                    {sub.benefits.slice(0, 3).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 text-brand-green shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-brand-green group-hover:gap-2 transition-all">
                    Learn more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection
        faqs={cityFaqs}
        heading={`${subService.name} FAQ — ${city.name}`}
      />

      {/* Coupons */}
      <CouponsSection />

      {/* CTA */}
      <CTABanner />

      {/* More Services in City */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              More Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              More Services in {city.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our full range of air quality and chimney services
              available in {city.name}, {city.stateAbbr}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${city.slug}/${s.slug}`}
                className="group bg-white border-2 border-gray-100 hover:border-brand-green/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={s.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-green transition-colors mb-2">
                  {s.name}
                </h3>
                <p className="text-sm text-gray-600">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
