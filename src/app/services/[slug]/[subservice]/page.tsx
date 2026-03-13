import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getSubServiceBySlug,
  services,
} from "@/data/services";
import { cities } from "@/data/cities";
import FAQSection from "@/components/FAQSection";
import CouponsSection from "@/components/CouponsSection";
import CTABanner from "@/components/CTABanner";

interface PageProps {
  params: Promise<{ slug: string; subservice: string }>;
}

export function generateStaticParams() {
  const params: { slug: string; subservice: string }[] = [];
  for (const service of services) {
    for (const sub of service.subServices) {
      params.push({ slug: service.slug, subservice: sub.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, subservice } = await params;
  const service = getServiceBySlug(slug);
  const subService = getSubServiceBySlug(slug, subservice);
  if (!service || !subService) return {};

  const description = `${subService.description} ${subService.keywords.join(", ")}.`;

  return {
    title: `${subService.name} | ${service.name} | Eco Clear Air`,
    description,
    alternates: {
      canonical: `https://ecoclearair.com/services/${service.slug}/${subService.slug}`,
    },
    openGraph: {
      title: `${subService.name} | ${service.name} | Eco Clear Air`,
      description: subService.shortDescription,
      url: `https://ecoclearair.com/services/${service.slug}/${subService.slug}`,
      images: [{ url: service.image, alt: subService.name }],
    },
  };
}

export default async function SubServicePage({ params }: PageProps) {
  const { slug, subservice } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const subService = getSubServiceBySlug(slug, subservice);
  if (!subService) notFound();

  const siblingSubServices = service.subServices.filter(
    (s) => s.slug !== subService.slug
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://ecoclearair.com/services/${service.slug}/${subService.slug}/#service`,
    name: subService.name,
    description: subService.description,
    url: `https://ecoclearair.com/services/${service.slug}/${subService.slug}`,
    image: `https://ecoclearair.com${service.image}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://ecoclearair.com/#business",
      name: "Eco Clear Air",
      telephone: "+1-888-274-1204",
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
      "@type": "State",
      name: "Massachusetts",
    },
    serviceType: subService.name,
    category: service.name,
    keywords: subService.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src={service.image}
          alt={subService.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-brand-green-dark/40 pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-emerald-300">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <svg className="w-3.5 h-3.5 text-emerald-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <svg className="w-3.5 h-3.5 text-emerald-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
                <li>
                  <svg className="w-3.5 h-3.5 text-emerald-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="text-white">{subService.name}</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              {subService.name}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
              {subService.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18882741204"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg font-bold text-white bg-brand-green hover:bg-brand-green-dark rounded-xl shadow-lg shadow-brand-green/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (888) 274-1204
              </a>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-gray-900 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to {service.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Key Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Choose Our {subService.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the advantages of professional {subService.name.toLowerCase()} from Eco Clear Air.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subService.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-brand-green/30 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

      {/* What to Expect Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Service Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              What to Expect
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{subService.description}</p>
            <p>
              At Eco Clear Air, our certified technicians specialize in{" "}
              {subService.keywords.slice(0, 3).join(", ")}. We use
              state-of-the-art equipment and eco-friendly products to deliver
              results that exceed industry standards. Serving Brighton, Greater
              Boston, and over 40 communities across New England, we make it
              easy to schedule professional {subService.name.toLowerCase()} at
              your convenience.
            </p>
            <p>
              Whether you need {subService.keywords.slice(3).join(", ")}{" "}
              {subService.keywords.length > 3 ? "or " : ""}related services,
              our team is ready to help. Call us at{" "}
              <a
                href="tel:+18882741204"
                className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors no-underline"
              >
                (888) 274-1204
              </a>{" "}
              for a free estimate.
            </p>
          </div>
        </div>
      </section>

      {/* In-Depth Guide Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Complete Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Everything You Need to Know About {subService.name}
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              When it comes to maintaining a safe, healthy, and efficient property, {subService.name.toLowerCase()} is
              one of the most important investments homeowners and business operators in the Greater Boston area can
              make. As a core offering within our {service.name.toLowerCase()} category, this service addresses critical
              concerns ranging from indoor air quality and energy efficiency to fire prevention and long-term system
              performance. Eco Clear Air has provided expert {subService.name.toLowerCase()} to thousands of residential
              and commercial clients across Massachusetts and New England, earning a reputation for thoroughness,
              professionalism, and lasting results. Whether you are dealing with a specific issue or simply staying
              ahead of routine maintenance, our NADCA-certified team delivers the quality and care your property
              deserves.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What {subService.name} Involves
            </h3>
            <p>
              {subService.description} Our trained technicians begin every job with a comprehensive inspection using
              video camera systems to assess the condition of your system and identify areas of concern. From there,
              we deploy commercial-grade HEPA-filtered vacuum equipment capable of capturing 99.97% of particles down
              to 0.3 microns, along with specialized agitation tools such as rotary brushes, air whips, and skipper
              balls designed to dislodge even the most stubborn buildup of dust, debris, mold, and contaminants. The
              entire process is carefully controlled to prevent cross-contamination of your living or working spaces.
              Depending on the size and complexity of the system, a typical {subService.name.toLowerCase()} appointment
              takes between two and five hours. We finish every job with a post-service inspection and before-and-after
              photo documentation so you can see the difference firsthand. Our commitment to
              {" "}{subService.keywords[0]?.toLowerCase() || "quality service"} and related techniques ensures your
              system operates at peak performance once we are done.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Who Needs {subService.name}?
            </h3>
            <p>
              Many property owners are surprised to learn just how many situations call for
              professional {subService.name.toLowerCase()}. If any of the following scenarios apply to you, it may be
              time to schedule a service appointment with Eco Clear Air:
            </p>
            <ul className="mt-4 space-y-3 list-none pl-0">
              {[
                `Homeowners experiencing increased dust, musty odors, or visible debris around vents — common signs that ${subService.keywords[0]?.toLowerCase() || "professional service"} is overdue.`,
                `Families with members who suffer from allergies, asthma, or other respiratory conditions and need cleaner indoor air to manage symptoms effectively.`,
                `Property owners who have recently completed renovations, construction, or remodeling work that may have introduced drywall dust, sawdust, and other fine particulates into the ductwork or system.`,
                `Landlords, property managers, and real estate professionals preparing a unit for new tenants or staging a home for sale who want to ensure optimal indoor air quality and system efficiency.`,
                `Business owners and facility managers responsible for commercial HVAC systems, restaurant kitchens, dryer exhaust systems, or other high-use ventilation infrastructure that requires regular ${subService.name.toLowerCase()}.`,
                `Anyone who has not had their system professionally serviced in three or more years, as contaminants accumulate steadily over time and can significantly degrade both air quality and energy efficiency.`,
              ].map((scenario, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 text-brand-green mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{scenario}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Eco Clear Air Difference
            </h3>
            <p>
              Not all {subService.name.toLowerCase()} providers are created equal, and the difference between a
              substandard job and a truly professional one can have a major impact on your health, safety, and wallet.
              Eco Clear Air holds certifications from both the National Air Duct Cleaners Association (NADCA) and the
              Chimney Safety Institute of America (CSIA), two of the most respected credentialing bodies in our
              industry. Our technicians undergo rigorous ongoing training in the latest cleaning methodologies, safety
              protocols, and equipment operation. We exclusively use Benefect Decon 30 — a botanical, EPA-registered
              antimicrobial agent that eliminates 99.99% of bacteria, mold, and fungi without introducing harsh
              chemicals into your environment. Combined with our HEPA-filtered negative air machines and
              source-removal cleaning techniques, we deliver a level of {subService.keywords[1]?.toLowerCase() ||
              "thoroughness"} that exceeds NADCA standards and leaves your system in like-new condition. From our
              transparent pricing and free estimates to our satisfaction guarantee, every aspect of the Eco Clear Air
              experience is designed to earn your trust and exceed your expectations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Health and Safety Impact
            </h3>
            <p>
              The health and safety implications of neglecting {subService.name.toLowerCase()} are well documented by
              leading authorities. According to the U.S. Environmental Protection Agency (EPA), indoor air can be two
              to five times more polluted than outdoor air, and in some cases up to 100 times worse. Much of this
              pollution originates from or is circulated through dirty HVAC ductwork, clogged dryer vents, and
              unmaintained chimney flues. The National Fire Protection Association (NFPA) reports that failure to clean
              dryer vents and chimneys is a leading cause of residential structure fires each year in the United
              States. Beyond fire risk, accumulated dust, pet dander, pollen, mold spores, and bacteria in your system
              can trigger allergic reactions, aggravate asthma, cause chronic respiratory infections, and contribute
              to sick building syndrome in commercial environments. Professional {subService.name.toLowerCase()} from
              Eco Clear Air directly addresses these risks by removing contaminants at their source, improving airflow,
              reducing strain on your HVAC equipment, and creating a cleaner, healthier indoor environment for everyone
              in your household or workplace. Many of our clients report noticeable improvements in air quality,
              reduced allergy symptoms, and lower energy bills within days of their service appointment.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How Often Should You Get {subService.name}?
            </h3>
            <p>
              Industry guidelines from NADCA recommend having your air ducts professionally cleaned every three to five
              years under normal conditions, with more frequent service for homes with pets, smokers, or family members
              with respiratory sensitivities. The NFPA recommends annual dryer vent cleaning and chimney inspections to
              prevent fire hazards, while the CSIA advises at least one chimney sweep per year for any fireplace or
              wood-burning appliance that is used regularly. For commercial properties, restaurants, and multi-unit
              residential buildings, the recommended frequency may be even higher depending on usage patterns, local
              building codes, and insurance requirements. Eco Clear Air makes it easy to stay on schedule with
              convenient appointment booking, seasonal maintenance reminders, and multi-service discounts that reward
              proactive property owners. Our technicians will also provide personalized recommendations based on the
              specific condition of your system during every visit, so you always know exactly when your
              next {subService.name.toLowerCase()} appointment should be.
            </p>

            <p className="mt-8 text-lg">
              Ready to experience the difference that professional {subService.name.toLowerCase()} can make for your
              property? Eco Clear Air proudly serves over 40 cities and towns across Greater Boston and New England,
              and every job comes backed by our satisfaction guarantee and free, no-obligation estimates. Call our
              friendly team today at{" "}
              <a
                href="tel:+18882741204"
                className="text-brand-green font-bold hover:text-brand-green-dark transition-colors no-underline"
              >
                (888) 274-1204
              </a>{" "}
              or visit us at 20 Guest St, Brighton, MA 02135 to schedule your appointment. Whether you need a
              one-time deep clean or want to set up a recurring maintenance plan, we are here to help you breathe
              easier and live safer.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Across New England Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-brand-green bg-brand-green/10 rounded-full mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Serving 40+ Communities Across New England
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Trusted Across New England
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                label: "NADCA Certified",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                desc: "National Air Duct Cleaners Association",
              },
              {
                label: "CSIA Certified",
                icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                desc: "Chimney Safety Institute of America",
              },
              {
                label: "Eco-Friendly",
                icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
                desc: "Benefect Decon 30 botanical products",
              },
              {
                label: "Satisfaction Guaranteed",
                icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
                desc: "100% satisfaction or we make it right",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center text-center bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-brand-green/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={metric.icon} />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{metric.label}</h3>
                <p className="text-sm text-gray-500">{metric.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed text-lg">
              From our headquarters at 20 Guest St in Brighton, MA, Eco Clear Air dispatches certified technicians
              to over 40 cities and towns across Massachusetts and New England every day. Our service area spans
              from the South Shore to the North Shore, from MetroWest to Cape Cod, ensuring that expert{" "}
              {subService.name.toLowerCase()} is always just a phone call away — no matter where you are located.
              Call{" "}
              <a
                href="tel:+18882741204"
                className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                (888) 274-1204
              </a>{" "}
              to find out if we serve your area.
            </p>
          </div>
        </div>
      </section>

      {/* Related Sub-Services */}
      {siblingSubServices.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
                Explore More
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Other {service.name} Services
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Browse our full range of {service.name.toLowerCase()} to find
                the right solution for your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siblingSubServices.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/services/${service.slug}/${sibling.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-5">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                    {sibling.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {sibling.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQSection
        faqs={service.faqs}
        heading={`${service.name} — Frequently Asked Questions`}
      />

      {/* Coupons */}
      <CouponsSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* Cities Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Get {subService.name} in Your City
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide professional {subService.name.toLowerCase()} across
              Greater Boston and New England. Find your city below.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/${service.slug}/${subService.slug}`}
                className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-brand-green/5 border border-gray-100 hover:border-brand-green/30 rounded-xl text-sm font-medium text-gray-700 hover:text-brand-green transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 shrink-0 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {city.name}, {city.stateAbbr}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
