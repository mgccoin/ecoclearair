import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CouponsSection from "@/components/CouponsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title:
    "Eco Clear Air | #1 Air Duct Cleaning & Chimney Sweep in Boston, MA",
  description:
    "Boston's most trusted air duct cleaning, dryer vent cleaning, and chimney sweep & repair company. Eco-friendly service for Greater Boston, South Shore, MetroWest & New England. Call (888) 274-1204 for a free estimate.",
  alternates: {
    canonical: "https://ecoclearair1.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ecoclearair1.com/#webpage",
  url: "https://ecoclearair1.com",
  name: "Eco Clear Air | #1 Air Duct Cleaning & Chimney Sweep in Boston, MA",
  description:
    "Boston's most trusted air duct cleaning, dryer vent cleaning, and chimney sweep & repair company. Eco-friendly service for Greater Boston, South Shore, MetroWest & New England.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://ecoclearair1.com/#website",
    url: "https://ecoclearair1.com",
    name: "Eco Clear Air",
  },
  about: {
    "@type": "LocalBusiness",
    "@id": "https://ecoclearair1.com/#business",
    name: "Eco Clear Air",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://ecoclearair1.com/og-image.jpg",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />

      {/* ── About Eco Clear Air — long-form SEO section ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Eco Clear Air — Boston&apos;s Premier Air Quality Experts
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Founded with a single mission — to help families and businesses
              across Greater Boston breathe cleaner, healthier air — Eco Clear
              Air has grown into one of the region&apos;s most trusted names in
              air duct cleaning, chimney sweep and repair, and dryer vent
              cleaning. From our headquarters at{" "}
              <strong>20 Guest St, Brighton, MA 02135</strong>, our certified
              technicians serve homeowners and commercial property managers
              throughout eastern Massachusetts, southern New Hampshire, and Rhode
              Island every single day.
            </p>

            <p>
              What sets Eco Clear Air apart from other HVAC cleaning companies is
              our unwavering commitment to eco-friendly, family-safe products.
              Every solution we use is non-toxic, biodegradable, and safe for
              children, pets, and individuals with respiratory sensitivities. We
              believe that improving your indoor air quality should never come at
              the cost of introducing harsh chemicals into your home. That
              philosophy drives every service call we make — and it&apos;s why
              thousands of Boston-area homeowners trust us year after year.
            </p>

            <h3 className="pt-4 text-2xl font-semibold text-gray-900">
              Serving Greater Boston &amp; Beyond
            </h3>
            <p>
              Our service area spans the entire Greater Boston metropolitan
              region and well beyond. We proudly serve families in{" "}
              <strong>
                Boston, Cambridge, Brookline, Somerville, Newton, Quincy,
                Braintree, Weymouth, Framingham, Natick, Waltham, Medford,
                Malden, Salem, Plymouth, Worcester, Providence (RI), Nashua
                (NH), Manchester (NH),
              </strong>{" "}
              and dozens of surrounding communities. Whether you&apos;re on the
              South Shore, in MetroWest, along the North Shore, or across the
              state line in Rhode Island or New Hampshire, Eco Clear Air delivers
              the same premium service with no travel surcharges.
            </p>

            <h3 className="pt-4 text-2xl font-semibold text-gray-900">
              Why Indoor Air Quality Matters More Than You Think
            </h3>
            <p>
              According to the U.S. Environmental Protection Agency (EPA),
              indoor air can be <strong>two to five times</strong> more polluted
              than outdoor air — and in some cases up to 100 times worse. This
              is a staggering statistic when you consider that the average
              American spends roughly <strong>90 percent of their time indoors</strong>,
              whether at home, at work, or at school. Poor indoor air quality has
              been linked to aggravated asthma, chronic allergies, respiratory
              infections, headaches, fatigue, and even long-term cardiovascular
              problems.
            </p>
            <p>
              Your HVAC system is the lungs of your home. Over time, dust,
              pollen, pet dander, mold spores, bacteria, and other contaminants
              accumulate inside your air ducts. Every time your furnace or air
              conditioner cycles on, those pollutants are circulated through
              every room. Professional air duct cleaning in Boston removes these
              buildups at the source, dramatically improving the air your family
              breathes and reducing allergen levels throughout the house.
            </p>

            <h3 className="pt-4 text-2xl font-semibold text-gray-900">
              The Hidden Health Risks in Your Air Ducts
            </h3>
            <p>
              Dirty air ducts are more than an inconvenience — they are a genuine
              health hazard. Dust mites, one of the most common indoor
              allergens, thrive in the warm, dark environment inside ductwork.
              Mold colonies can establish themselves wherever moisture is present,
              releasing spores that trigger allergic reactions and respiratory
              distress. Pet dander, even in homes without pets, can travel
              through shared ventilation systems in multi-unit buildings.
            </p>
            <p>
              For households with infants, elderly family members, or anyone
              living with asthma or COPD, regular HVAC cleaning is not optional
              — it&apos;s essential. Eco Clear Air&apos;s allergen reduction
              service uses hospital-grade HEPA filtration equipment to capture
              99.97 percent of airborne particles as small as 0.3 microns,
              leaving your ducts — and your air — genuinely clean.
            </p>

            <h3 className="pt-4 text-2xl font-semibold text-gray-900">
              Dryer Vent Cleaning — A Fire Safety Essential
            </h3>
            <p>
              Clogged dryer vents are responsible for an estimated{" "}
              <strong>15,000 or more residential fires every year</strong> in the
              United States, according to the National Fire Protection
              Association (NFPA). Lint — which is highly flammable — accumulates
              inside the vent line over months and years of normal use. When
              airflow becomes restricted, your dryer overheats, and the risk of
              ignition skyrockets.
            </p>
            <p>
              Warning signs of a clogged dryer vent include clothes taking longer
              than one cycle to dry, a burning smell during operation, excessive
              heat in the laundry area, and visible lint buildup around the
              outdoor exhaust hood. If you notice any of these symptoms, schedule
              a professional dryer vent cleaning immediately. Our technicians
              clear the entire vent line from the dryer to the exterior wall,
              restoring proper airflow, reducing your energy bills, and — most
              importantly — eliminating a serious fire hazard in your home.
            </p>

            <h3 className="pt-4 text-2xl font-semibold text-gray-900">
              Chimney Sweep &amp; Repair — Protecting Your Family from
              Invisible Dangers
            </h3>
            <p>
              A well-maintained chimney does more than ensure a cozy fire on a
              cold New England evening — it protects your family from carbon
              monoxide poisoning, chimney fires, and structural damage. Every
              time you burn wood, gas, or oil, byproducts travel up the flue.
              Over time, a tar-like substance called{" "}
              <strong>creosote</strong> builds up on the interior walls of your
              chimney liner. Creosote is extremely combustible; just a quarter
              inch of buildup is enough to fuel a dangerous chimney fire.
            </p>
            <p>
              Beyond creosote, blockages from animal nests, debris, or
              deteriorating masonry can prevent proper venting of combustion
              gases, causing carbon monoxide — an odorless, colorless,
              potentially lethal gas — to back-draft into your living space. The
              Chimney Safety Institute of America (CSIA) recommends an annual
              chimney inspection for every home with a fireplace, wood stove, or
              fuel-burning furnace. Eco Clear Air&apos;s certified chimney sweep
              service in Boston includes a full inspection, thorough creosote
              removal, and a detailed report on the condition of your flue liner,
              cap, crown, and masonry.
            </p>

            <h3 className="pt-4 text-2xl font-semibold text-gray-900">
              Certifications You Can Trust
            </h3>
            <p>
              Eco Clear Air holds certifications from two of the most respected
              organizations in our industry:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>NADCA</strong> (National Air Duct Cleaners Association) —
                the leading authority on air duct cleaning standards, requiring
                members to follow a strict code of ethics and adhere to
                ACR&nbsp;(Assessment, Cleaning &amp; Restoration) standards.
              </li>
              <li>
                <strong>CSIA</strong> (Chimney Safety Institute of America) — the
                gold standard for chimney service professionals, ensuring our
                technicians are trained in the latest safety protocols, building
                codes, and inspection techniques.
              </li>
            </ul>
            <p>
              These certifications are not just plaques on a wall. They mean
              every technician who enters your home has undergone rigorous
              training, passed industry examinations, and is committed to
              continuing education. When you choose Eco Clear Air for air duct
              cleaning, chimney inspection, or vent cleaning near you, you are
              choosing verified expertise.
            </p>

            <h3 className="pt-4 text-2xl font-semibold text-gray-900">
              Our Process — Simple, Transparent, Guaranteed
            </h3>
            <p>
              We designed our process to be as stress-free as possible for
              homeowners and business owners alike:
            </p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>
                <strong>Free Estimate</strong> — Call us at{" "}
                <a
                  href="tel:+18882741204"
                  className="font-semibold text-blue-700 underline"
                >
                  (888) 274-1204
                </a>{" "}
                or request a quote online. We&apos;ll discuss your concerns,
                ask about your system, and provide a clear, upfront price with
                no hidden fees.
              </li>
              <li>
                <strong>Scheduled Appointment</strong> — We arrive within your
                chosen time window — on time, every time. Our technicians wear
                shoe covers, lay down drop cloths, and treat your home with the
                same respect they&apos;d give their own.
              </li>
              <li>
                <strong>Professional Service</strong> — Using state-of-the-art
                equipment, including truck-mounted vacuum systems and HEPA
                filtration, we perform a thorough cleaning or repair. For mold
                removal jobs, we follow EPA and NADCA guidelines to the letter.
              </li>
              <li>
                <strong>Satisfaction Guarantee</strong> — Before we leave, we
                walk you through everything we did, show you before-and-after
                photos, and make sure you are 100&nbsp;percent satisfied. If
                you&apos;re not, we&apos;ll make it right — that&apos;s our
                promise.
              </li>
            </ol>

            <p className="pt-4">
              Whether you need air duct cleaning in Boston, a chimney sweep
              before winter, dryer vent cleaning to protect against fire, or a
              comprehensive chimney repair to address crumbling masonry and
              leaks, Eco Clear Air is the name Greater Boston trusts. Call us
              today at{" "}
              <a
                href="tel:+18882741204"
                className="font-semibold text-blue-700 underline"
              >
                (888) 274-1204
              </a>{" "}
              to schedule your free consultation and take the first step toward
              cleaner, safer air in your home.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Service Process — visual step cards ── */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Our Service Process Works
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
            From your first call to the final walkthrough, we make professional
            air duct cleaning, chimney service, and dryer vent cleaning simple
            and hassle-free.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                1
              </span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Free Consultation &amp; Estimate
              </h3>
              <p className="mt-3 text-gray-600">
                Call{" "}
                <a
                  href="tel:+18882741204"
                  className="font-medium text-blue-700 underline"
                >
                  (888) 274-1204
                </a>{" "}
                or schedule online. We assess your needs, answer every question,
                and provide a no-obligation quote — upfront pricing with zero
                hidden fees.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                2
              </span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Professional Inspection
              </h3>
              <p className="mt-3 text-gray-600">
                Our certified technicians arrive within your scheduled window —
                on time, every time. We perform a detailed inspection of your air
                ducts, chimney, or dryer vent system and explain exactly what we
                find.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                3
              </span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Thorough Service
              </h3>
              <p className="mt-3 text-gray-600">
                Using state-of-the-art HEPA vacuum systems and eco-friendly,
                non-toxic products, we clean or repair your system to the highest
                industry standards — following NADCA and CSIA protocols.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-200">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                4
              </span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Quality Guarantee
              </h3>
              <p className="mt-3 text-gray-600">
                We walk you through the results with before-and-after photos,
                ensure your complete satisfaction, and provide personalized
                maintenance recommendations to keep your system running safely.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-lg leading-relaxed text-gray-700">
            <p>
              At Eco Clear Air, quality is not a marketing slogan — it is a
              measurable standard we hold ourselves to on every single job. Our
              team is proud to serve the communities of Greater Boston, the South
              Shore, MetroWest, the North Shore, and neighboring areas in Rhode
              Island and New Hampshire. From a studio apartment in Back Bay to a
              sprawling colonial in Wellesley, every customer receives the same
              meticulous attention to detail, transparent communication, and
              100&nbsp;percent satisfaction guarantee. Ready to breathe easier?
              Call{" "}
              <a
                href="tel:+18882741204"
                className="font-semibold text-blue-700 underline"
              >
                (888) 274-1204
              </a>{" "}
              today.
            </p>
          </div>
        </div>
      </section>

      <div id="coupons">
        <CouponsSection />
      </div>
      <FAQSection />
      <CTABanner />
    </>
  );
}
