import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCityBySlug, cities } from "@/data/cities";
import { services } from "@/data/services";
import FAQSection from "@/components/FAQSection";
import CouponsSection from "@/components/CouponsSection";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  return {
    title: `${city.name} Air Duct Cleaning, Dryer Vent & Chimney Services`,
    description: `Professional air duct cleaning, dryer vent services, and chimney sweep & repair in ${city.name}, ${city.stateAbbr}. Serving ${city.neighborhoodKeywords.slice(0, 3).join(", ")} and more. Call (888) 274-1204 for a free estimate.`,
    alternates: {
      canonical: `https://ecoclearair1.com/${city.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const cityFaqs = [
    {
      question: `How much does air duct cleaning cost in ${city.name}?`,
      answer: `Air duct cleaning costs in ${city.name} typically range from $299–$499 for a standard residential home, depending on the size of your home and number of vents. Eco Clear Air provides free, no-obligation estimates for all ${city.name} residents. Call (888) 274-1204 for an exact quote tailored to your home in ${city.areaDescription}.`,
    },
    {
      question: `Do you offer same-day service in ${city.name}, ${city.stateAbbr}?`,
      answer: `Yes! Eco Clear Air offers same-day and next-day service in ${city.name}, ${city.stateAbbr} when availability allows. We understand that air quality and safety issues can be urgent, so our team serving ${city.areaDescription} prioritizes quick response times. Call (888) 274-1204 to check today's availability.`,
    },
    {
      question: `Are your technicians licensed to work in ${city.name}?`,
      answer: `Absolutely. All Eco Clear Air technicians are fully licensed and insured to work in ${city.name}, ${city.state}. Our team holds NADCA certification for air duct cleaning and CSIA certification for chimney services. We comply with all ${city.state} state regulations and local ${city.name} requirements.`,
    },
    {
      question: `How long does a typical service take in ${city.name}?`,
      answer: `Service duration in ${city.name} depends on the type of work. Residential air duct cleaning typically takes 2–4 hours, dryer vent cleaning takes 30–60 minutes, and chimney sweeping takes 1–2 hours. Larger homes in ${city.areaDescription} may require additional time. We'll provide an accurate time estimate when you schedule.`,
    },
    {
      question: `Do you serve all neighborhoods in ${city.name}?`,
      answer: `Yes, we serve every neighborhood in ${city.name} including ${city.neighborhoodKeywords.join(", ")}. Our technicians are familiar with the unique housing styles and HVAC systems found throughout ${city.areaDescription}, ensuring expert service no matter where you're located.`,
    },
    {
      question: `What eco-friendly products do you use in ${city.name}?`,
      answer: `Eco Clear Air uses EPA-registered botanical antimicrobials like Benefect Decon 30 for all sanitizing work in ${city.name} homes. These products kill 99.99% of bacteria, mold, and viruses without harsh chemicals — completely safe for your family, pets, and the environment. It's part of our commitment to healthier homes across ${city.areaDescription}.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://ecoclearair1.com/${city.slug}`,
    name: "Eco Clear Air",
    description: `Professional air duct cleaning, dryer vent services, and chimney sweep & repair in ${city.name}, ${city.stateAbbr}.`,
    url: `https://ecoclearair1.com/${city.slug}`,
    telephone: "+1-888-274-1204",
    image: "https://ecoclearair1.com/og-image.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20 Guest St",
      addressLocality: "Brighton",
      addressRegion: "MA",
      postalCode: "02135",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services in ${city.name}`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
          url: `https://ecoclearair1.com/${city.slug}/${service.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            Serving {city.name}, {city.stateAbbr} &amp; Surrounding Areas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Professional Air Duct &amp; Chimney Services in {city.name},{" "}
            {city.stateAbbr}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-emerald-100 leading-relaxed">
            {city.description}
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-emerald-200/90 text-base italic">
            {city.weatherNote}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white border-2 border-white/40 hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              View Our Services
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Services Available in {city.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive air quality and chimney services for homes and
              businesses in {city.areaDescription}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${city.slug}/${service.slug}`}
                className="group relative bg-white border-2 border-gray-100 hover:border-brand-green/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={`${service.name} in ${city.name}, ${city.stateAbbr}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {service.shortDescription}
                  </p>
                  <p className="text-xs text-gray-400 font-medium mb-4">
                    {service.subServices.length} services available
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                    Learn More →
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Residents Trust Us */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Trusted Professionals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why {city.name} Residents Trust Eco Clear Air
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-van.png"
                alt={`Eco Clear Air service van serving ${city.name}, ${city.stateAbbr}`}
                width={640}
                height={420}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-green/90 to-transparent px-6 py-5">
                <p className="text-white font-bold text-lg">Proudly Serving {city.name} &amp; {city.areaDescription}</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Your Neighbor&apos;s Top-Rated Air Quality Company
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Licensed &amp; Insured in {city.state}</p>
                    <p className="text-sm text-gray-600">Full liability coverage and compliance with all {city.state} state regulations for your peace of mind.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">NADCA &amp; CSIA Certified Technicians</p>
                    <p className="text-sm text-gray-600">Industry-leading certifications ensure your {city.name} home gets the highest standard of care.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Eco-Friendly Botanical Products</p>
                    <p className="text-sm text-gray-600">We use Benefect Decon 30 — an EPA-registered botanical antimicrobial safe for kids, pets, and the planet.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">Transparent Pricing with Free Estimates</p>
                    <p className="text-sm text-gray-600">No hidden fees, no surprises. Get an upfront quote for your {city.name} home before any work begins.</p>
                  </div>
                </li>
              </ul>
              <p className="mt-8 text-gray-600 leading-relaxed">
                As a locally operated company, Eco Clear Air is deeply committed to the health and safety of {city.name} families. We understand the unique challenges that {city.areaDescription} homes face — from aging ductwork in historic properties to heavy dryer usage in multi-family buildings. Our mission is to deliver cleaner, healthier indoor air to every household we serve.
              </p>
              <a
                href="tel:+18882741204"
                className="mt-6 inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl shadow-lg shadow-brand-green/25 transition-all duration-200 hover:scale-[1.03]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (888) 274-1204
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Local Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              About Our Services in {city.name}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Eco Clear Air is proud to serve the {city.name},{" "}
                {city.stateAbbr} community with professional air duct cleaning,
                dryer vent services, chimney sweep &amp; repair, and specialty
                services. With a population of {city.population} residents,{" "}
                {city.name} is a vibrant community where indoor air quality
                matters for every home and business. Whether you own a single-family
                home, manage a multi-unit building, or operate a commercial property
                in {city.areaDescription}, our team has the expertise to improve
                the air you breathe every day.
              </p>

              <p>
                <strong>{city.name} air duct cleaning</strong> is one of our most
                requested services — and for good reason. Over time, your HVAC
                system&apos;s ductwork accumulates dust, pollen, pet dander, mold
                spores, and other contaminants that circulate through your home
                every time your heating or cooling system runs. The National Air
                Duct Cleaners Association (NADCA) recommends having your air ducts
                professionally cleaned every 3 to 5 years, though homes in{" "}
                {city.name} with pets, smokers, recent renovations, or allergy
                sufferers may benefit from more frequent service. Our certified
                technicians use state-of-the-art HEPA-filtered vacuum equipment and
                rotary brush systems to thoroughly clean every supply and return
                vent, main trunk line, and plenum in your {city.name} home —
                including neighborhoods like{" "}
                {city.neighborhoodKeywords.slice(0, 3).join(", ")}, and beyond.
              </p>

              <p>
                <strong>Dryer vent cleaning in {city.name}</strong> is a critical
                safety service that too many homeowners overlook. According to the
                National Fire Protection Association (NFPA), clothes dryers cause
                more than 15,000 house fires each year in the United States, and
                the leading cause is failure to clean the dryer vent. Lint
                accumulation restricts airflow, forces your dryer to work harder,
                and creates a highly flammable environment inside the vent pipe.
                Warning signs include clothes taking longer than one cycle to dry,
                the dryer becoming excessively hot to the touch, a burning smell
                during operation, or visible lint buildup around the exterior vent
                hood. In {city.name}, where many homes — especially multi-family
                buildings in {city.neighborhoodKeywords.slice(0, 2).join(" and ")}
                {" "}— have long or complex dryer vent runs, regular professional
                cleaning is essential to prevent fires and extend the life of your
                appliance.
              </p>

              <p>
                <strong>Chimney sweep services in {city.name}</strong> are
                especially important given the area&apos;s rich architectural
                heritage and abundance of older homes with fireplaces and wood
                stoves. Creosote — a highly flammable byproduct of wood combustion
                — builds up inside your chimney flue with every fire you burn.
                Without regular cleaning, this buildup can ignite and cause a
                devastating chimney fire. Our CSIA-certified chimney sweeps perform
                Level 1, Level 2, and Level 3 inspections depending on your needs,
                along with complete chimney cleaning, cap installation, crown
                repair, and flue relining. For {city.name}&apos;s older homes near{" "}
                {city.localLandmarks.slice(0, 2).join(" and ")}, we pay extra
                attention to the unique masonry conditions and aging flue systems
                that are common in these beloved neighborhoods.
              </p>

              <p>
                Beyond our core services, Eco Clear Air also provides{" "}
                <strong>specialty services in {city.name}</strong> designed to
                address specific air quality and safety concerns. Our bird and
                animal nest removal service safely clears obstructions from
                chimneys, dryer vents, and HVAC systems — a common problem in{" "}
                {city.areaDescription} where birds and small animals frequently
                seek shelter in residential venting. We also offer professional
                odor treatment to eliminate persistent musty, smoky, or biological
                smells trapped in your ductwork. For homeowners looking to take
                indoor air quality to the next level, our UV light germicidal lamp
                installation destroys airborne bacteria, viruses, and mold spores
                as they pass through your HVAC system, providing continuous
                sanitization 24 hours a day.
              </p>

              <p>
                {city.name}, {city.stateAbbr} is home to approximately{" "}
                {city.population} residents living across diverse neighborhoods
                including {city.neighborhoodKeywords.slice(0, 5).join(", ")}, and
                many more. {city.areaDescription} features a mix of historic
                single-family homes, colonial-era row houses, modern condominiums,
                and multi-unit apartment buildings — each with its own HVAC
                challenges. Local landmarks like{" "}
                {city.localLandmarks.join(", ")} define the character of this
                community, and the housing stock surrounding these landmarks often
                includes older construction with original ductwork that benefits
                significantly from professional cleaning and maintenance.{" "}
                {city.weatherNote} These seasonal temperature swings mean your
                heating and cooling systems run hard year-round, making regular{" "}
                {city.name} HVAC cleaning a wise investment in both comfort and
                health.
              </p>

              <p>
                The health benefits of professional <strong>indoor air quality
                services in {city.name}</strong> cannot be overstated. According to
                the Environmental Protection Agency (EPA), indoor air can be 2 to 5
                times more polluted than outdoor air — and in some cases up to 100
                times worse. For the average {city.name} resident who spends 90% of
                their time indoors, this is a serious concern. Dirty air ducts
                circulate allergens like dust mites, pollen, and pet dander that
                trigger asthma attacks, allergic reactions, and respiratory
                infections. Mold growth inside ductwork — particularly common in{" "}
                {city.name}&apos;s humid summer months — releases spores that can
                cause chronic respiratory problems and aggravate existing conditions.
                Professional air duct cleaning by Eco Clear Air removes these
                contaminants at the source, creating a healthier living environment
                for your entire family.
              </p>

              <p>
                What sets Eco Clear Air apart from other {city.name} air duct
                cleaning companies is our <strong>eco-friendly approach</strong>.
                We use Benefect Decon 30, a revolutionary botanical antimicrobial
                made from thyme oil that is registered with the EPA and approved for
                use in hospitals. Unlike harsh chemical-based sanitizers, Benefect
                kills 99.99% of bacteria, mold, and viruses while remaining
                completely safe for children, pets, and individuals with chemical
                sensitivities. Every {city.name} home we service receives this
                premium sanitizing treatment at no additional charge, because we
                believe that truly clean air means more than just removing visible
                debris — it means eliminating the microscopic threats that affect
                your family&apos;s health.
              </p>

              <p>
                Our <strong>{city.name} service process</strong> is designed for
                maximum convenience and transparency. It starts with a free, no-obligation
                estimate — simply call <a href="tel:+18882741204" className="text-brand-green font-semibold hover:underline">(888) 274-1204</a> or
                schedule online, and we&apos;ll provide an accurate quote based on
                your home&apos;s size and needs. We offer same-day availability
                when possible, with flexible morning and afternoon appointment
                windows to fit your schedule. Upon completion, we walk you through
                the results with before-and-after photos and provide maintenance
                recommendations tailored to your specific property. Every service
                is backed by our 100% satisfaction guarantee. Eco Clear Air proudly
                serves all {city.name} ZIP codes
                {city.zipCodes.length > 0 && <> including {city.zipCodes.join(", ")}</>}
                , and surrounding areas throughout {city.areaDescription}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Image Gallery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Professional Results in {city.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See the quality and care that goes into every Eco Clear Air service call throughout {city.areaDescription}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { src: "/images/service-air-duct-cleaning.png", caption: `Air Duct Cleaning in ${city.name}` },
              { src: "/images/service-dryer-vent.png", caption: `Dryer Vent Cleaning in ${city.name}` },
              { src: "/images/service-chimney-sweep.png", caption: `Chimney Sweep & Repair in ${city.name}` },
              { src: "/images/service-specialty.png", caption: `Specialty Services in ${city.name}` },
            ].map((item) => (
              <figure key={item.src} className="group relative rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-5 py-4">
                  <p className="text-white font-semibold text-sm">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services Quick Links */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Full Service Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Detailed Services in {city.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the full range of services available to {city.name}{" "}
              residents and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <Link
                  href={`/${city.slug}/${service.slug}`}
                  className="text-xl font-bold text-gray-900 hover:text-brand-green transition-colors"
                >
                  {service.name}
                </Link>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.subServices.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/${city.slug}/${service.slug}/${sub.slug}`}
                      className="inline-block px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-brand-green hover:text-brand-green transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Service Process in {city.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From your first call to a cleaner, healthier home — here&apos;s how Eco Clear Air delivers results in {city.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Free Estimate",
                description: `Call (888) 274-1204 or schedule online. We'll assess your ${city.name} home's needs and provide a transparent, no-obligation quote — completely free.`,
              },
              {
                step: 2,
                title: "Professional Inspection",
                description: `Our NADCA & CSIA certified technicians arrive on time and perform a thorough inspection of your ductwork, vents, or chimney system using professional-grade cameras.`,
              },
              {
                step: 3,
                title: "Thorough Cleaning",
                description: `Using state-of-the-art HEPA-filtered vacuum equipment and rotary brush systems, we remove every trace of dust, debris, and contaminants from your system.`,
              },
              {
                step: 4,
                title: "Satisfaction Guaranteed",
                description: `We walk you through before-and-after results, share maintenance tips tailored to your ${city.name} property, and ensure you're 100% satisfied with our work.`,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-extrabold mb-5 shadow-lg shadow-brand-green/25">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="tel:+18882741204"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-lg font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl shadow-lg shadow-brand-green/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Your Free Estimate — (888) 274-1204
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Neighborhoods We Serve in {city.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Eco Clear Air proudly serves every corner of {city.name} and{" "}
              {city.areaDescription}.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {city.neighborhoodKeywords.map((neighborhood) => (
              <span
                key={neighborhood}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-800 font-medium shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-brand-green shrink-0"
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
                {neighborhood}
              </span>
            ))}
          </div>

          {city.zipCodes.length > 0 && (
            <p className="mt-10 text-center text-gray-500 text-sm">
              Serving ZIP codes: {city.zipCodes.join(", ")}
            </p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={cityFaqs}
        heading={`Frequently Asked Questions — ${city.name}`}
      />

      {/* Coupons */}
      <CouponsSection />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
