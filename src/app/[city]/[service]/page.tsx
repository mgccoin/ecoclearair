import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCityBySlug, cities } from "@/data/cities";
import { services, getServiceBySlug } from "@/data/services";
import FAQSection from "@/components/FAQSection";
import CouponsSection from "@/components/CouponsSection";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};

  return {
    title: `${service.name} in ${city.name}, ${city.stateAbbr}`,
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, ${city.stateAbbr}. ${service.shortDescription} Serving ${city.neighborhoodKeywords.slice(0, 3).join(", ")} and all of ${city.areaDescription}. Call (888) 274-1204.`,
    alternates: {
      canonical: `https://ecoclearair.com/${city.slug}/${service.slug}`,
    },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  const nearbyCities = cities
    .filter((c) => c.slug !== city.slug)
    .sort((a, b) => {
      if (a.stateAbbr === city.stateAbbr && b.stateAbbr !== city.stateAbbr)
        return -1;
      if (a.stateAbbr !== city.stateAbbr && b.stateAbbr === city.stateAbbr)
        return 1;
      return 0;
    })
    .slice(0, 8);

  const cityServiceFaqs = service.faqs.map((faq) => ({
    question: faq.question,
    answer: `${faq.answer} Our team serving ${city.name} and ${city.areaDescription} is available to help — call (888) 274-1204 for a free estimate.`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://ecoclearair.com/${city.slug}/${service.slug}`,
    name: `${service.name} in ${city.name}, ${city.stateAbbr}`,
    description: `${service.description} Available in ${city.name}, ${city.stateAbbr}.`,
    url: `https://ecoclearair.com/${city.slug}/${service.slug}`,
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: sub.name,
          description: sub.shortDescription,
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
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <Image
            src={service.image}
            alt={`${service.name} in ${city.name}`}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            {city.name}, {city.stateAbbr}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {service.name} in {city.name}, {city.stateAbbr}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-blue-100 leading-relaxed">
            {service.description} Serving {city.name} and{" "}
            {city.areaDescription}, our certified technicians deliver expert{" "}
            {service.name.toLowerCase()} tailored to local needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18882741204"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg font-bold text-brand-blue bg-white hover:bg-gray-50 rounded-xl shadow-lg shadow-black/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
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
              View Sub-Services
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

      {/* Sub-Service Cards */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Our Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our {service.name} in {city.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our comprehensive range of {service.name.toLowerCase()}{" "}
              available to homes and businesses throughout {city.areaDescription}
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/${city.slug}/${service.slug}/${sub.slug}`}
                className="group bg-white border-2 border-gray-100 hover:border-brand-green/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {sub.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {sub.shortDescription}
                </p>
                <ul className="space-y-2 mb-4">
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
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Guide — Long-Form SEO Content */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-blue bg-brand-blue/10 rounded-full mb-4">
            In-Depth Resource
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
            Complete Guide to {service.name} in {city.name},{" "}
            {city.stateAbbr}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            {/* Paragraph 1: Introduction */}
            <p>
              For homeowners and businesses in {city.name}, {city.stateAbbr},{" "}
              maintaining clean, safe, and efficient indoor environments starts
              with professional {service.name.toLowerCase()}. With a population
              of {city.population}, {city.name} is home to a diverse mix of
              historic and modern properties that each face unique indoor air
              quality challenges. From neighborhoods near{" "}
              {city.localLandmarks.slice(0, 2).join(" and ")} to the residential
              streets of {city.neighborhoodKeywords.slice(0, 3).join(", ")},{" "}
              {city.name}&apos;s housing stock includes everything from
              century-old brownstones and triple-deckers to newly constructed
              condominiums and commercial spaces. {city.weatherNote} These
              seasonal shifts put extraordinary demands on HVAC systems,
              chimneys, and ventilation throughout {city.areaDescription},
              making regular {service.name.toLowerCase()} not just a
              convenience&mdash;but a necessity for protecting your family&apos;s
              health and your property&apos;s value.
            </p>

            {/* Paragraph 2: Understanding the service */}
            <h3 className="text-2xl font-bold text-gray-900 mt-10">
              Understanding {service.name} for {city.name} Homes
            </h3>
            <p>
              {service.description} At Eco Clear Air, our certified technicians
              deliver a comprehensive suite of{" "}
              {service.name.toLowerCase()} solutions specifically designed for
              the properties found throughout {city.name} and{" "}
              {city.areaDescription}. Our full range of offerings includes{" "}
              {service.subServices.map((sub) => sub.name).join(", ")}
              &mdash;each performed with state-of-the-art equipment and
              eco-friendly products. {city.name}&apos;s unique combination of{" "}
              {city.weatherNote.toLowerCase().includes("cold")
                ? "harsh winters and humid summers"
                : city.weatherNote.toLowerCase().includes("humid")
                  ? "high humidity and variable temperatures"
                  : "seasonal temperature extremes"}{" "}
              accelerates the accumulation of dust, allergens, mold spores, and
              other contaminants in residential and commercial systems. Older
              homes in neighborhoods like{" "}
              {city.neighborhoodKeywords.slice(0, 2).join(" and ")} are
              particularly susceptible to ductwork deterioration, chimney liner
              degradation, and lint buildup in dryer vents, making professional{" "}
              {service.name.toLowerCase()} essential for both comfort and safety.
            </p>

            {/* Paragraph 3: When to schedule + warning signs */}
            <h3 className="text-2xl font-bold text-gray-900 mt-10">
              When to Schedule {service.name} in {city.name}
            </h3>
            <p>
              Knowing when to schedule professional{" "}
              {service.name.toLowerCase()} can save {city.name} residents from
              costly repairs, health issues, and potential safety hazards.
              While the National Air Duct Cleaners Association (NADCA)
              recommends servicing every 3&ndash;5 years, properties in{" "}
              {city.name} may need more frequent attention due to local
              environmental factors, construction activity, and the age of the
              housing stock. Here are the key warning signs that it&apos;s time
              to contact Eco Clear Air:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Visible dust or debris blowing from vents when your HVAC system
                turns on&mdash;common in older {city.name} homes with aging
                ductwork
              </li>
              <li>
                Unexplained increases in allergy or asthma symptoms among
                household members, especially during {city.name}&apos;s spring
                pollen season and fall leaf mold period
              </li>
              <li>
                Musty, stale, or unpleasant odors when your heating or cooling
                system runs, which may indicate mold growth within the ducts or
                chimney
              </li>
              <li>
                Excessive dust accumulating on furniture and surfaces despite
                regular cleaning&mdash;a telltale sign of contaminated ductwork
                or poor ventilation
              </li>
              <li>
                Your dryer takes longer than one cycle to fully dry
                clothes, signaling a clogged dryer vent that poses a
                significant fire risk in densely built {city.name} neighborhoods
              </li>
              <li>
                Recent home renovations, remodeling, or construction near your{" "}
                {city.name} property that may have introduced drywall dust,
                sawdust, or other particulates into your system
              </li>
              <li>
                It has been more than one year since your last chimney inspection,
                which is the minimum recommended by the National Fire Protection
                Association (NFPA) for safe operation
              </li>
              <li>
                You notice inconsistent heating or cooling across rooms, higher
                than expected energy bills, or your HVAC system cycling more
                frequently than normal
              </li>
            </ul>

            {/* Paragraph 4: How Eco Clear Air performs the service */}
            <h3 className="text-2xl font-bold text-gray-900 mt-10">
              How Eco Clear Air Performs {service.name} in {city.name}
            </h3>
            <p>
              When you choose Eco Clear Air for {service.name.toLowerCase()} in{" "}
              {city.name}, you receive a meticulous, multi-step process
              performed by NADCA-certified technicians who understand the
              specific needs of {city.areaDescription} properties. Our process
              begins with a thorough visual and video inspection using
              high-definition camera systems to assess the current condition of
              your system and identify problem areas. We then protect your home
              with drop cloths and plastic sheeting before connecting our
              truck-mounted HEPA-filtered negative air vacuum system, which
              generates up to 16,000 CFM of suction to extract contaminants
              without releasing them into your living space. Our technicians use
              specialized rotary brushes and compressed air tools to agitate and
              dislodge years of accumulated dust, allergens, mold, and debris
              from every supply duct, return duct, and register. For chimney
              services, we employ professional-grade chimney rods, wire brushes,
              and video inspection cameras to thoroughly clean and assess the
              flue, smoke chamber, and firebox. Following the mechanical
              cleaning, we apply Benefect Decon 30&mdash;a botanical antimicrobial
              that is EPA-registered, hospital-grade, and completely safe for
              children and pets&mdash;to sanitize the entire system and inhibit
              future microbial growth. Every job concludes with a post-service
              inspection and before-and-after photo documentation so {city.name}{" "}
              homeowners can see exactly what we accomplished.
            </p>

            {/* Paragraph 5: Health benefits */}
            <h3 className="text-2xl font-bold text-gray-900 mt-10">
              Health Benefits of {service.name} for {city.name} Families
            </h3>
            <p>
              The Environmental Protection Agency (EPA) reports that indoor air
              can be two to five times more polluted than outdoor air&mdash;and
              in some cases up to 100 times worse. For {city.name} residents who
              spend the majority of their time indoors, especially during the
              region&apos;s cold winter months and humid summer days, this
              statistic is particularly concerning. Professional{" "}
              {service.name.toLowerCase()} directly addresses the root causes of
              poor indoor air quality by removing accumulated dust mites, pet
              dander, pollen, mold spores, bacteria, and volatile organic
              compounds from your home&apos;s ventilation system. Families in{" "}
              {city.name} who invest in regular {service.name.toLowerCase()}{" "}
              report significant reductions in allergy and asthma symptoms,
              fewer respiratory infections, and better sleep quality. Beyond
              air quality, this service also provides critical safety
              benefits: the NFPA estimates that failure to clean dryer vents
              causes approximately 15,000 structure fires each year in the
              United States, while dirty chimneys are responsible for thousands
              of chimney fires and carbon monoxide incidents annually. In
              densely populated {city.name} neighborhoods near{" "}
              {city.localLandmarks.slice(0, 2).join(" and ")}, where homes are
              built close together, a single fire or CO leak can endanger
              multiple families. Regular {service.name.toLowerCase()} is one of
              the most effective ways to protect your {city.name} home and
              community.
            </p>

            {/* Paragraph 6: Eco-friendly approach */}
            <h3 className="text-2xl font-bold text-gray-900 mt-10">
              Eco-Friendly Approach in {city.name}
            </h3>
            <p>
              At Eco Clear Air, our name reflects our mission: delivering
              spotless indoor environments using products and methods that are
              safe for your family and the planet. Our signature sanitizing
              agent, Benefect Decon 30, is a breakthrough botanical
              antimicrobial derived from thyme oil that achieves a 99.99% kill
              rate against bacteria, mold, and fungi&mdash;all without harsh
              chemicals, synthetic fragrances, or toxic residues. It is
              EPA-registered and classified as a hospital-grade disinfectant,
              yet it requires no &quot;keep out of reach of children&quot;
              warnings because it is that safe. This product is applied
              following every {service.name.toLowerCase()} job to ensure your
              system is not just clean, but hygienically treated. We also use
              HEPA-filtered vacuum systems that capture 99.97% of particles
              down to 0.3 microns, preventing any cross-contamination during the
              cleaning process. Our commitment to environmentally responsible
              practices resonates deeply with {city.name}&apos;s community
              values&mdash;a city that consistently ranks among the most
              environmentally conscious in {city.state}. From our biodegradable
              cleaning solutions to our fuel-efficient service vehicles, every
              aspect of our operation in {city.name} and {city.areaDescription}{" "}
              is designed to minimize our ecological footprint while maximizing
              results for your home.
            </p>

            {/* Paragraph 7: Costs */}
            <h3 className="text-2xl font-bold text-gray-900 mt-10">
              {service.name} Costs in {city.name}
            </h3>
            <p>
              We believe that every {city.name} homeowner deserves transparent,
              upfront pricing with no hidden fees or surprise charges. The cost
              of professional {service.name.toLowerCase()} varies based on the
              size of your system, the level of contamination, and the specific
              services required, but here are general guidelines for our{" "}
              {city.name} service area: whole-home air duct cleaning typically
              ranges from $299 to $499, dryer vent cleaning from $99 to $199,
              and chimney sweep and inspection services from $149 to $299. Every
              job begins with a free, no-obligation estimate where our
              technician assesses your specific situation and provides an exact
              quote before any work begins. We frequently offer seasonal specials
              and multi-service discounts for {city.name} customers who bundle
              services together&mdash;for instance, combining air duct cleaning
              with dryer vent cleaning is one of our most popular packages. We
              accept all major credit cards, offer flexible scheduling including
              weekends and evenings, and stand behind every job with our 100%
              satisfaction guarantee. Contact us at{" "}
              <a href="tel:+18882741204" className="text-brand-blue font-semibold hover:underline">
                (888) 274-1204
              </a>{" "}
              for your free estimate.
            </p>

            {/* Paragraph 8: Closing */}
            <p className="mt-6">
              Eco Clear Air is proud to be the trusted provider of professional{" "}
              {service.name.toLowerCase()} for the {city.name},{" "}
              {city.stateAbbr} community. We serve every neighborhood
              including{" "}
              {city.neighborhoodKeywords.join(", ")} and all surrounding areas
              within {city.areaDescription}. Our service territory covers ZIP
              codes {city.zipCodes.join(", ")}, and we offer same-day and
              next-day availability for both residential and commercial
              properties. Whether you live in a historic home near{" "}
              {city.localLandmarks[0]} or a modern apartment complex in{" "}
              {city.neighborhoodKeywords[city.neighborhoodKeywords.length - 1]},
              our NADCA-certified team has the expertise and equipment to deliver
              exceptional {service.name.toLowerCase()} results. We are fully
              licensed and insured in {city.state}, and every member of our crew
              undergoes rigorous background checks and ongoing training. Your
              satisfaction is guaranteed&mdash;if you&apos;re not completely happy
              with our work, we&apos;ll come back and make it right at no
              additional cost. Ready to breathe cleaner, healthier air in your{" "}
              {city.name} home? Call Eco Clear Air today at{" "}
              <a href="tel:+18882741204" className="text-brand-blue font-semibold hover:underline">
                (888) 274-1204
              </a>{" "}
              or request your free estimate online. We look forward to serving
              you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Service Image Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={service.image}
              alt={`Professional ${service.name.toLowerCase()} service by Eco Clear Air in ${city.name}, ${city.stateAbbr}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-white text-lg md:text-xl font-bold">
                Professional {service.name} in {city.name}
              </p>
              <p className="text-white/80 text-sm md:text-base mt-1">
                Eco Clear Air&apos;s certified technicians use advanced equipment
                and eco-friendly products to deliver superior results across{" "}
                {city.areaDescription}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why City Residents Choose Us */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Local Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Why {city.name} Residents Choose Eco Clear Air for{" "}
              {service.name}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                {city.name} homeowners and businesses trust Eco Clear Air for
                professional {service.name.toLowerCase()} because we combine
                local expertise with industry-leading equipment and eco-friendly
                practices. Our certified technicians understand the unique
                challenges that properties in {city.areaDescription} face
                throughout the year.
              </p>
              <p>
                {city.weatherNote} This makes regular{" "}
                {service.name.toLowerCase()} particularly important for{" "}
                {city.name} residents. Whether your home is near{" "}
                {city.localLandmarks.slice(0, 2).join(" or ")} or in
                neighborhoods like{" "}
                {city.neighborhoodKeywords.slice(0, 3).join(", ")}, our team
                delivers thorough, professional service every time.
              </p>
              <p>
                With a population of {city.population}, {city.name} is a
                thriving community where indoor air quality and home safety
                matter. Eco Clear Air is committed to keeping {city.name} homes
                safe, efficient, and healthy with our comprehensive{" "}
                {service.name.toLowerCase()}. We use EPA-registered botanical
                products that are safe for your family, pets, and the
                environment.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green shrink-0">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Licensed &amp; Insured</p>
                  <p className="text-sm text-gray-600">
                    Fully licensed in {city.state}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green shrink-0">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Same-Day Available</p>
                  <p className="text-sm text-gray-600">
                    Fast service in {city.name}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green shrink-0">
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Eco-Friendly</p>
                  <p className="text-sm text-gray-600">
                    Botanical, non-toxic products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={cityServiceFaqs}
        heading={`${service.name} FAQ — ${city.name}`}
      />

      {/* Coupons */}
      <CouponsSection />

      {/* CTA */}
      <CTABanner />

      {/* Other Services in City */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              More Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Other Services in {city.name}
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
                className="group bg-white border-2 border-gray-100 hover:border-brand-green/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.name} in ${city.name}, ${city.stateAbbr}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-green/10 text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <svg
                        className="w-5 h-5"
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
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-green transition-colors">
                      {s.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{s.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-brand-green">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* We Also Serve */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              We Also Serve
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Need {service.name.toLowerCase()} in a nearby city? We&apos;ve got
              you covered.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/${service.slug}`}
                className="flex items-center gap-2 bg-white border border-gray-200 hover:border-brand-green/40 rounded-xl px-4 py-3 transition-all duration-200 hover:shadow-md group"
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
                <span className="text-sm font-semibold text-gray-800 group-hover:text-brand-green transition-colors">
                  {c.name}, {c.stateAbbr}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
