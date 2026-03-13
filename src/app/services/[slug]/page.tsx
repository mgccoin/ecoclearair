import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import { cities } from "@/data/cities";
import FAQSection from "@/components/FAQSection";
import CouponsSection from "@/components/CouponsSection";
import CTABanner from "@/components/CTABanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: "air-duct-cleaning" },
    { slug: "dryer-vent-services" },
    { slug: "chimney-sweep-repair" },
    { slug: "specialty-services" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} in Boston & Greater New England`,
    description: service.description,
    alternates: {
      canonical: `https://ecoclearair1.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | Eco Clear Air`,
      description: service.shortDescription,
      url: `https://ecoclearair1.com/services/${service.slug}`,
      images: [{ url: service.image, alt: service.name }],
    },
  };
}

const serviceGuideContent: Record<
  string,
  {
    whatIs: string;
    signs: { intro: string; items: string[] };
    process: string;
    health: string;
    schedule: string;
    closing: string;
  }
> = {
  "air-duct-cleaning": {
    whatIs:
      "Air duct cleaning is the thorough removal of dust, debris, allergens, mold spores, bacteria, and other contaminants that accumulate inside your HVAC ductwork over time. Every time your heating or cooling system cycles on, air passes through miles of ductwork hidden behind your walls, ceilings, and floors. Over months and years, this ductwork becomes a reservoir for microscopic particles that degrade your indoor air quality. According to the Environmental Protection Agency, indoor air can be two to five times more polluted than outdoor air — and your ducts are one of the primary culprits. For homeowners and businesses across Greater Boston, this is particularly relevant given New England's seasonal extremes: systems run constantly through frigid winters and humid summers, accelerating contamination. Professional air duct cleaning addresses this at the source, using specialized negative-pressure HEPA vacuum systems and rotary brush agitation to dislodge and extract every particle from supply lines, return lines, trunk ducts, and branch runs. The result is measurably cleaner air, better HVAC efficiency, and a healthier living or working environment.",
    signs: {
      intro:
        "Many homeowners and property managers do not realize their ductwork needs attention until problems become severe. Recognizing the early warning signs can save you from costly repairs, health complications, and wasted energy. If you notice any of the following indicators, it is time to schedule a professional air duct cleaning with Eco Clear Air:",
      items: [
        "Visible dust or debris blowing from supply registers when the HVAC system turns on",
        "Persistent musty, stale, or unpleasant odors that worsen when heating or cooling runs",
        "Increased frequency or severity of allergy symptoms, asthma attacks, or respiratory irritation among household members",
        "Uneven airflow or temperature inconsistencies between rooms, with some areas significantly warmer or cooler",
        "Higher-than-normal energy bills despite no change in usage patterns or thermostat settings",
        "Visible mold growth on or around air registers, grilles, or inside accessible ductwork sections",
        "Excessive dust accumulation on furniture and surfaces shortly after cleaning",
        "Recent home renovation, remodeling, or construction that generated drywall dust, sawdust, or paint particles",
      ],
    },
    process:
      "When you choose Eco Clear Air for your air duct cleaning, our NADCA-certified technicians follow a rigorous, multi-step process designed to deliver the deepest clean possible. We begin with a comprehensive inspection of your HVAC system, using remote cameras to assess the condition of your ductwork and identify any areas of concern such as mold growth, excessive debris, or damaged sections. Next, we seal all registers and create negative pressure using our truck-mounted or portable HEPA-filtered vacuum systems — this ensures that every particle dislodged during cleaning is captured and contained, never released into your living space. Our technicians then use rotating brush agitation tools, compressed air whips, and skipper balls to thoroughly scrub every interior surface of your supply and return ducts. For homes and businesses that require sanitization, we apply Benefect Decon 30, an EPA-registered botanical antimicrobial that kills 99.99% of bacteria, mold, viruses, and fungi without toxic chemicals — making it safe for children, pets, and sensitive individuals. Finally, we perform a post-cleaning inspection with camera verification so you can see the dramatic before-and-after difference. The entire process typically takes two to four hours for residential properties, with commercial projects scheduled to minimize business disruption.",
    health:
      "The health benefits of professional air duct cleaning extend far beyond simple dust removal. The EPA has identified indoor air pollution as one of the top five environmental health risks, and contaminated ductwork is a major contributor. By removing accumulated allergens such as pollen, pet dander, dust mite waste, and mold spores, air duct cleaning can significantly reduce allergy and asthma symptoms for sensitive individuals. Studies show that clean ductwork can reduce airborne particulate matter by up to 85%, creating a noticeably healthier breathing environment. For families with young children, elderly members, or anyone with compromised immune systems, this improvement can be transformative. Beyond respiratory health, clean ducts also eliminate the musty odors caused by mold and bacterial growth, improving overall comfort. From an energy perspective, the U.S. Department of Energy estimates that 25 to 40 percent of energy used for heating and cooling is wasted due to contaminant buildup in HVAC systems — clean ducts restore airflow efficiency, potentially reducing your energy bills by 20 to 30 percent while extending the operational lifespan of your equipment.",
    schedule:
      "The National Air Duct Cleaners Association (NADCA) recommends professional air duct cleaning every three to five years for most residential properties. However, several factors may warrant more frequent cleaning. If you have pets that shed fur or dander, a household member with allergies or asthma, smokers in the home, or have recently completed a renovation project, you should consider cleaning every two to three years or even annually. Commercial properties with high foot traffic, healthcare facilities, and food service establishments typically require annual duct cleaning to maintain air quality standards and comply with health regulations. New homeowners should schedule a cleaning upon moving in, as previous occupants' contaminants remain in the ductwork. Seasonal timing also matters — many of our Boston-area customers prefer to schedule cleaning in spring or fall, between heavy heating and cooling seasons, to start each season with a fresh system.",
    closing:
      "At Eco Clear Air, we are committed to providing the highest standard of air duct cleaning services in Greater Boston and throughout New England. Our NADCA-certified technicians bring years of specialized experience to every job, using only the most advanced equipment and eco-friendly products available. We stand behind every service with our 100% satisfaction guarantee — if you are not completely happy with the results, we will return and make it right at no additional cost. From residential homes in Brighton and Brookline to commercial properties in downtown Boston, our team has earned the trust of thousands of customers through transparent pricing, professional workmanship, and genuine care for indoor air quality. Ready to breathe cleaner, healthier air? Call Eco Clear Air today at (888) 274-1204 for a free estimate and same-day appointment availability.",
  },
  "dryer-vent-services": {
    whatIs:
      "Dryer vent services encompass the professional cleaning, inspection, repair, and replacement of the exhaust ventilation system that carries hot, moist air and lint from your clothes dryer to the outside of your building. While often overlooked, this component of your home or business is critically important for both safety and efficiency. According to the National Fire Protection Association (NFPA), clothes dryers are responsible for an estimated 15,970 home structure fires each year in the United States, and the leading cause — accounting for 32% of these fires — is failure to clean the dryer vent. Lint, which is highly flammable, accumulates inside the vent duct over time, restricting airflow and creating conditions ripe for ignition. Beyond fire risk, a clogged dryer vent forces your dryer to work harder and longer to dry each load, increasing energy consumption by up to 30% and accelerating wear on the appliance. For residents and businesses across Greater Boston, South Shore, MetroWest, and into Rhode Island and New Hampshire, Eco Clear Air provides comprehensive dryer vent services that protect your property, reduce your energy bills, and extend the life of your dryer.",
    signs: {
      intro:
        "A clogged or damaged dryer vent rarely announces itself with a single dramatic event. Instead, the warning signs develop gradually, making it easy to dismiss them as normal wear. Learning to recognize these indicators can literally save your home from a devastating fire. Contact Eco Clear Air immediately if you notice any of these signs:",
      items: [
        "Clothes take significantly longer than one cycle to dry completely, especially towels and heavier fabrics",
        "The top of your dryer feels excessively hot to the touch during operation",
        "A burning smell or unusual odor when the dryer is running, indicating lint may be overheating",
        "The laundry room feels unusually hot, humid, or steamy while the dryer is in use",
        "Visible lint accumulation around the dryer vent hood on the exterior of your home",
        "The exterior vent flap does not open properly when the dryer is running, indicating a blockage",
        "It has been more than one year since your last professional dryer vent cleaning",
        "Your dryer vent run exceeds 15 feet or includes multiple elbows and turns, which increases clog risk",
      ],
    },
    process:
      "Eco Clear Air's dryer vent service begins with a thorough inspection of your entire venting system, from the dryer connection point through every foot of ductwork to the exterior termination point. Our certified technicians use specialized rotary brush systems and high-powered compressed air tools to dislodge and remove every trace of lint, debris, and buildup from the interior walls of your vent duct. For longer vent runs or those with multiple turns, we employ flexible rod systems that navigate bends without damaging the duct material. We also inspect and clean the exterior vent hood, ensuring the flap operates freely and that no bird nests, pest debris, or weather damage is obstructing the opening. If we identify any crushed, disconnected, or deteriorated vent sections, we provide on-the-spot repair or replacement using rigid or semi-rigid aluminum duct — never the flexible plastic or foil ducts that are a leading cause of dryer fires. After cleaning, we perform an airflow test to verify that your system is operating at optimal efficiency. The entire process typically takes 30 to 60 minutes for standard residential installations, and we leave your laundry area cleaner than we found it.",
    health:
      "While fire prevention is the primary safety benefit of professional dryer vent services, the health implications are equally important. A clogged dryer vent can cause carbon monoxide — a colorless, odorless, deadly gas — to back up into your living space if you have a gas-powered dryer. The Centers for Disease Control reports that over 400 Americans die from unintentional carbon monoxide poisoning each year, and a blocked dryer vent is a known contributing factor. Even with electric dryers, restricted venting causes excessive moisture to accumulate in your laundry area, creating ideal conditions for mold and mildew growth that can spread through your home and trigger respiratory problems. Properly maintained dryer vents also reduce your household's energy footprint — a clean vent allows your dryer to operate at peak efficiency, reducing drying times by up to 50% and lowering your utility bills. For families concerned about both safety and sustainability, professional dryer vent services from Eco Clear Air deliver peace of mind on every front.",
    schedule:
      "The National Fire Protection Association (NFPA) recommends professional dryer vent cleaning at least once per year for residential properties. However, the ideal frequency depends on several factors specific to your situation. Households that do more than eight loads of laundry per week, families with young children who generate high laundry volumes, homes with longer vent runs exceeding 15 feet, and vents with multiple elbows or turns should consider cleaning every six months. Commercial laundry facilities, laundromats, hotels, salons, and multi-unit residential buildings with shared laundry systems should schedule quarterly cleaning to maintain safety compliance and optimal performance. If your dryer vent has never been professionally cleaned, or if you have recently moved into a new home, we strongly recommend scheduling an immediate inspection. Many of our customers in the Greater Boston area pair their annual dryer vent cleaning with their air duct cleaning appointment for comprehensive HVAC maintenance at a bundled rate.",
    closing:
      "Eco Clear Air takes dryer vent safety seriously because we understand the stakes — a single overlooked vent can put your entire family and home at risk. Our technicians are trained specifically in dryer vent systems, and we carry the certifications and insurance that give you confidence in our work. We use only code-compliant materials for any repairs or replacements, and we educate every customer on best practices for maintaining their vent between professional cleanings. With transparent pricing, no hidden fees, and our 100% satisfaction guarantee, there is no reason to delay this critical safety service. Eco Clear Air serves more than 40 communities across Greater Boston, the South Shore, MetroWest, and into Rhode Island and New Hampshire — so wherever you are in the region, we are ready to help. Call us today at (888) 274-1204 to schedule your dryer vent cleaning or request a free estimate.",
  },
  "chimney-sweep-repair": {
    whatIs:
      "Chimney sweep and repair services encompass the professional cleaning, inspection, maintenance, and structural repair of your chimney and fireplace system — a critical but often neglected component of your home. Every time you burn wood, gas, or any fuel in your fireplace or wood stove, combustion byproducts travel up through your chimney flue. Over time, a tar-like substance called creosote accumulates on the interior walls of the flue liner. Creosote is extremely flammable, and according to the Chimney Safety Institute of America (CSIA), creosote buildup is the leading cause of chimney fires in the United States, with over 25,000 chimney fires reported annually. Beyond fire risk, a poorly maintained chimney can allow carbon monoxide — an invisible, odorless, lethal gas — to seep back into your living space through cracks in the flue liner, deteriorated mortar joints, or blocked flue passages. For homeowners across Greater Boston, the South Shore, MetroWest, and throughout New England, where fireplaces are a cherished part of winter living, professional chimney services from Eco Clear Air are not a luxury — they are a necessity for the safety of your family and home.",
    signs: {
      intro:
        "Your chimney communicates its condition through a variety of warning signs that should never be ignored. A well-maintained chimney operates silently and efficiently, so any deviation from normal performance warrants professional attention. Eco Clear Air recommends scheduling an inspection if you observe any of the following:",
      items: [
        "A strong, acrid odor emanating from the fireplace, especially during humid weather or when the air conditioning is running",
        "Black, oily, or shiny residue visible on the interior walls of the firebox or damper area, indicating heavy creosote buildup",
        "Smoke entering the room instead of drafting up the chimney when a fire is burning, suggesting a blockage or draft problem",
        "White staining on the exterior brick or stone (efflorescence), which indicates moisture is penetrating the masonry",
        "Crumbling or deteriorating mortar joints between bricks, cracked chimney crown, or missing chimney cap",
        "Pieces of flue liner or mortar debris falling into the firebox, signaling structural deterioration",
        "A damper that is difficult to operate, stuck, or does not seal properly when closed",
        "Any evidence of animal nesting, leaves, or debris inside the chimney or visible at the top",
      ],
    },
    process:
      "Eco Clear Air's chimney sweep and repair process follows CSIA-recommended standards to ensure your chimney system is safe, functional, and efficient. Our certified chimney technicians begin every visit with a thorough inspection, assessing the firebox, damper, smoke chamber, flue liner, chimney crown, cap, and exterior masonry for any signs of damage, deterioration, or hazardous buildup. For standard chimney sweeping, we use professional-grade rotary brushes matched to your specific flue size and shape, combined with powerful HEPA-filtered vacuum systems to capture all soot, creosote, and debris without releasing any particulates into your home. We clean from the bottom up, ensuring complete coverage of the entire flue length. For chimneys requiring repair, our technicians are skilled in tuckpointing deteriorated mortar joints, installing or replacing chimney caps and crowns, repairing or relining damaged flue liners, sealing cracks and gaps with high-temperature-rated materials, and applying waterproof sealant to protect masonry from New England's freeze-thaw cycles. We also install chimney caps with spark arrestors to prevent animal entry and reduce fire risk. Every service concludes with a detailed report of our findings and recommendations, so you have complete visibility into the condition of your chimney system.",
    health:
      "The health and safety benefits of professional chimney maintenance cannot be overstated. Carbon monoxide poisoning is perhaps the most serious risk associated with a neglected chimney — the CDC reports that approximately 50,000 Americans visit emergency rooms each year due to accidental carbon monoxide exposure, and a cracked or blocked chimney flue is a common pathway for this deadly gas to enter living spaces. Regular chimney sweeping eliminates creosote buildup, directly reducing the risk of chimney fires that cause millions of dollars in property damage annually and claim lives. A clean, properly functioning chimney also improves the combustion efficiency of your fireplace or wood stove, reducing the amount of harmful particulate matter and volatile organic compounds released into both your indoor air and the surrounding environment. For homes with gas fireplaces or gas-fired heating appliances that vent through the chimney, professional inspection ensures that flue gases are exhausting properly and that no cracks or gaps are allowing combustion byproducts to backdraft into occupied spaces. The peace of mind that comes from knowing your chimney has been professionally inspected and certified as safe is invaluable, especially during the long New England winter when your fireplace is in regular use.",
    schedule:
      "The Chimney Safety Institute of America (CSIA) and the National Fire Protection Association (NFPA Standard 211) both recommend annual chimney inspection and cleaning for all fuel-burning appliances, including wood-burning fireplaces, wood stoves, gas fireplaces, pellet stoves, and oil-fired furnaces that vent through a chimney. Even if you use your fireplace infrequently, an annual inspection is essential because animal nests, moisture damage, and structural deterioration can occur regardless of usage. Homes that burn wood as a primary heat source during New England winters should consider mid-season cleanings if heavy creosote accumulation is observed. The NFPA recommends cleaning when creosote deposits reach one-eighth of an inch thickness. The ideal time to schedule your chimney service is in late summer or early fall, before the heating season begins — this allows time for any necessary repairs before you need your fireplace. Many of our Boston-area customers schedule their chimney sweep alongside their annual furnace tune-up for a comprehensive pre-winter safety check.",
    closing:
      "Eco Clear Air brings CSIA-certified expertise and a genuine commitment to safety to every chimney sweep and repair we perform. Our technicians are not just cleaners — they are trained inspectors who understand the structural engineering and combustion science behind safe chimney operation. We use only premium, code-compliant materials for all repairs, and our eco-friendly cleaning practices ensure that no harmful residue is left behind in your home. With transparent pricing, free detailed estimates, and our 100% satisfaction guarantee, you can trust Eco Clear Air to keep your chimney safe and efficient season after season. We proudly serve more than 40 communities across Greater Boston, the South Shore, MetroWest, and into Rhode Island and New Hampshire. Do not wait until the first cold night to discover a chimney problem — call Eco Clear Air at (888) 274-1204 today to schedule your chimney inspection and cleaning.",
  },
  "specialty-services": {
    whatIs:
      "Specialty services address the unique indoor air quality, safety, and maintenance challenges that go beyond standard duct cleaning or chimney sweeping. Every home and commercial building has its own set of environmental factors — from the age and condition of the structure to the specific contaminants present in the local environment. Eco Clear Air's specialty services are designed to target these specific problems with precision and expertise. Whether you are dealing with mold contamination in your HVAC system, asbestos concerns in older ductwork, radon infiltration through your foundation, or need an indoor air quality assessment to diagnose unexplained health symptoms, our certified specialists have the training, equipment, and experience to help. We also offer insulation services to improve your home's energy envelope, restoring or replacing attic and crawl space insulation that has been damaged by moisture, pests, or age. For the diverse building stock across Greater Boston — from historic brownstones in Back Bay to modern commercial complexes along the South Shore — these specialty services fill critical gaps that general cleaning cannot address.",
    signs: {
      intro:
        "Specialty indoor air quality and safety issues often present with subtle symptoms that are easy to attribute to other causes. If you have addressed the obvious sources of poor air quality and still experience problems, it may be time for a deeper investigation. Eco Clear Air recommends our specialty services when you notice:",
      items: [
        "Persistent musty or moldy odors that remain even after standard duct cleaning and surface remediation",
        "Unexplained health symptoms such as chronic headaches, fatigue, nausea, or respiratory irritation that improve when you leave the building",
        "Visible mold growth inside ductwork, on insulation, or in hidden areas such as crawl spaces and attics",
        "Your home was built before 1980 and you suspect asbestos-containing materials in duct insulation, pipe wrap, or floor tiles",
        "You live in a region with known radon risk and have never tested your home or workplace",
        "Unusually high energy bills despite recent HVAC servicing, suggesting insulation deficiencies",
        "Water damage, flooding, or persistent moisture issues in your basement, crawl space, or attic that may have compromised insulation or created mold conditions",
        "You are preparing for a real estate transaction and need a comprehensive indoor air quality assessment or environmental clearance report",
      ],
    },
    process:
      "Eco Clear Air's specialty services begin with a detailed consultation and assessment to understand the specific challenges facing your property. For mold remediation within HVAC systems, our technicians use moisture mapping, air sampling, and surface testing to identify the type and extent of contamination before developing a targeted treatment plan. We follow industry-standard protocols that include containment of affected areas, HEPA-filtered air scrubbing, physical removal of contaminated materials, and application of EPA-registered antimicrobial treatments like Benefect Decon 30 to prevent recurrence. For asbestos-related concerns, our certified inspectors perform material sampling and laboratory analysis, and if abatement is needed, we coordinate with licensed abatement contractors to ensure full regulatory compliance. Radon testing involves both short-term and long-term monitoring using calibrated continuous radon monitors, with mitigation system design and installation available if elevated levels are detected. Our insulation services include a comprehensive energy assessment of your attic, walls, and crawl spaces, followed by professional removal of damaged or contaminated insulation and installation of new, high-performance materials that meet or exceed current energy code requirements. Every specialty service is documented with detailed reports, test results, and recommendations, giving you a clear understanding of your property's condition and a roadmap for improvement.",
    health:
      "The health implications of the environmental issues addressed by our specialty services are significant and well-documented. Mold exposure is linked to a wide range of health problems including chronic sinusitis, persistent coughing, wheezing, throat irritation, skin rashes, and in severe cases, hypersensitivity pneumonitis and other serious respiratory conditions — the World Health Organization has identified indoor dampness and mold as a significant global health concern. Asbestos, when disturbed, releases microscopic fibers that can cause mesothelioma, asbestosis, and lung cancer — diseases that may not manifest for 20 to 50 years after exposure, making identification and proper management critical. Radon is the second leading cause of lung cancer in the United States after smoking, responsible for approximately 21,000 deaths annually according to the EPA — and it is entirely preventable with proper testing and mitigation. Poor insulation, while not directly toxic, contributes to condensation and moisture buildup that creates ideal conditions for mold growth and pest infestation, indirectly impacting your health. By addressing these specialized concerns, Eco Clear Air helps protect your long-term health and the structural integrity of your property.",
    schedule:
      "The recommended frequency for specialty services varies based on the specific service and your property's conditions. Indoor air quality testing should be performed whenever occupants experience unexplained health symptoms, after any water damage or flooding event, following mold remediation to confirm successful treatment, and as part of any real estate transaction. Radon testing should be conducted every two years according to EPA guidelines, or continuously if a mitigation system is installed. Insulation should be inspected every five to ten years, or immediately after any event that may have caused damage such as roof leaks, pest infestations, or ice dam formation. For commercial properties, many of these assessments are required annually or on specific schedules to maintain compliance with OSHA workplace standards and local health department regulations. If you are unsure whether your property needs specialty services, Eco Clear Air offers a no-obligation consultation to evaluate your situation and recommend the appropriate next steps — because when it comes to your family's health and safety, proactive assessment is always better than reactive treatment.",
    closing:
      "Eco Clear Air's specialty services represent our commitment to going beyond the basics to solve the most challenging indoor environmental problems. Our team includes certified mold inspectors, indoor air quality specialists, and insulation experts who bring focused knowledge to every project. We invest in the latest diagnostic equipment and maintain ongoing training relationships with industry organizations including NADCA, ACAC, and energy efficiency certification bodies. Whether your situation calls for a simple air quality test or a complex multi-phase remediation project, we approach every job with the same thoroughness, transparency, and dedication to customer satisfaction. We proudly serve more than 40 communities throughout Greater Boston, the South Shore, MetroWest, North Shore, and into Rhode Island and New Hampshire. Call Eco Clear Air at (888) 274-1204 to schedule your consultation and take the first step toward a healthier indoor environment.",
  },
};

const whyChooseBenefits = [
  {
    title: "Certified Professionals",
    description:
      "NADCA and CSIA-certified technicians with years of hands-on experience.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Eco-Friendly Products",
    description:
      "We use EPA-registered botanical antimicrobials — safe for families, pets, and the planet.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Transparent Pricing",
    description:
      "Free estimates with no hidden fees. Know exactly what you're paying before we start.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Same-Day Availability",
    description:
      "Urgent needs? We offer same-day and emergency appointments when available.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "100% Satisfaction Guaranteed",
    description:
      "Not satisfied? We'll come back and make it right — at no additional cost.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    title: "40+ Communities Served",
    description:
      "Covering Greater Boston, South Shore, MetroWest, North Shore, and into RI & NH.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
];

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://ecoclearair1.com/services/${service.slug}/#service`,
    name: service.name,
    description: service.description,
    url: `https://ecoclearair1.com/services/${service.slug}`,
    image: `https://ecoclearair1.com${service.image}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://ecoclearair1.com/#business",
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

      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-brand-green-dark/40 pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-300 hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              {service.name}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
              {service.description}
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
              <a
                href="#sub-services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-gray-900 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                Explore Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Stats */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900">40+</span>
              <span className="mt-1 text-sm md:text-base font-medium text-gray-600">Cities Served</span>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900">{service.subServices.length}</span>
              <span className="mt-1 text-sm md:text-base font-medium text-gray-600">Services Available</span>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900">Same-Day</span>
              <span className="mt-1 text-sm md:text-base font-medium text-gray-600">Appointments</span>
            </div>

            <div className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-900">100%</span>
              <span className="mt-1 text-sm md:text-base font-medium text-gray-600">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section id="sub-services" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Our {service.name}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Services We Offer
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our comprehensive range of {service.name.toLowerCase()} to
              find the right solution for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/services/${service.slug}/${sub.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {sub.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {sub.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {sub.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg className="w-4 h-4 shrink-0 text-brand-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

      {/* Comprehensive Guide to [Service Name] */}
      {serviceGuideContent[service.slug] && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
                Expert Resource
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Your Complete Guide to {service.name}
              </h2>
            </div>

            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {service.description} At Eco Clear Air, we specialize in delivering
                professional {service.name.toLowerCase()} to residential and
                commercial customers across more than 40 communities in Greater
                Boston, the South Shore, MetroWest, Rhode Island, and New Hampshire.
                Whether you are a homeowner looking to protect your family&apos;s
                health, a property manager responsible for tenant safety, or a
                business owner aiming to maintain a clean and productive workspace,
                our certified technicians have the expertise and equipment to deliver
                exceptional results. With services spanning{" "}
                {service.subServices.map((s) => s.name).join(", ")}, we offer a
                complete solution for every need in the{" "}
                {service.name.toLowerCase()} category.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                What Is {service.name} and Why Does It Matter?
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {serviceGuideContent[service.slug].whatIs}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Signs You Need {service.name}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {serviceGuideContent[service.slug].signs.intro}
              </p>
              <ul className="mt-6 space-y-3">
                {serviceGuideContent[service.slug].signs.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 shrink-0 text-brand-green mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Our {service.name} Process
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {serviceGuideContent[service.slug].process}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Health and Safety Benefits
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {serviceGuideContent[service.slug].health}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Recommended Maintenance Schedule
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {serviceGuideContent[service.slug].schedule}
              </p>

              <div className="mt-12 p-6 md:p-8 bg-brand-green/5 border border-brand-green/20 rounded-2xl">
                <p className="text-gray-800 leading-relaxed text-base md:text-lg font-medium">
                  {serviceGuideContent[service.slug].closing}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mr-2">
                Related:
              </span>
              {service.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us for this service */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              The Eco Clear Air Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Why Choose Us for {service.name}?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We combine certified expertise with eco-friendly practices to
              deliver results you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-brand-green/30 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 mb-5">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={service.faqs}
        heading={`${service.name} — Frequently Asked Questions`}
      />

      {/* Coupons */}
      <CouponsSection />

      {/* CTA Banner */}
      <CTABanner />

      {/* Cities Served */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {service.name} Near You
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide {service.name.toLowerCase()} across Greater Boston and
              New England. Find your city below.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/${service.slug}`}
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
