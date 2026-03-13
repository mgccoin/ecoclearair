export interface SubService {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  keywords: string[];
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  subServices: SubService[];
  keywords: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    name: "Air Duct Cleaning Services",
    slug: "air-duct-cleaning",
    shortDescription: "Professional air duct cleaning for healthier indoor air quality.",
    description:
      "Eco Clear Air provides comprehensive air duct cleaning services using state-of-the-art HEPA vacuum equipment and eco-friendly sanitizers. Our certified technicians remove dust, allergens, mold spores, and contaminants from your entire HVAC ductwork system, improving indoor air quality and energy efficiency.",
    image: "/images/service-air-duct-cleaning.png",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    keywords: [
      "air duct cleaning",
      "HVAC cleaning",
      "duct sanitizing",
      "indoor air quality",
      "vent cleaning",
      "air quality improvement",
      "duct inspection",
      "HEPA vacuum cleaning",
    ],
    subServices: [
      {
        name: "Residential Air Duct Cleaning",
        slug: "residential-air-duct-cleaning",
        shortDescription: "Specialized cleaning for homes and apartments.",
        description:
          "Our residential air duct cleaning service removes years of accumulated dust, pet dander, pollen, mold spores, and other contaminants from your home's ductwork. Using advanced HEPA-filtered vacuum systems and rotary brush agitation, we restore your air ducts to like-new condition, improving your family's health and your HVAC system's efficiency.",
        benefits: [
          "Remove up to 99.97% of airborne contaminants",
          "Reduce allergy and asthma triggers",
          "Lower energy bills by improving HVAC efficiency",
          "Eliminate musty odors from ductwork",
          "Extend the life of your HVAC system",
        ],
        keywords: ["residential air duct cleaning", "home duct cleaning", "apartment duct cleaning", "house vent cleaning"],
      },
      {
        name: "Commercial Air Duct Cleaning",
        slug: "commercial-air-duct-cleaning",
        shortDescription: "Scaled services for office buildings and commercial properties.",
        description:
          "Keep your employees healthy and your workspace comfortable with our commercial air duct cleaning services. We handle large-scale HVAC systems in offices, retail spaces, warehouses, and multi-story buildings with minimal disruption to your business operations.",
        benefits: [
          "Improve employee health and productivity",
          "Meet commercial indoor air quality standards",
          "Reduce sick building syndrome",
          "Comply with OSHA and EPA guidelines",
          "Flexible scheduling including nights and weekends",
        ],
        keywords: ["commercial air duct cleaning", "office duct cleaning", "commercial HVAC cleaning", "business vent cleaning"],
      },
      {
        name: "Renovation Air Duct Cleaning",
        slug: "renovation-air-duct-cleaning",
        shortDescription: "Post-construction cleaning to remove drywall dust and debris.",
        description:
          "After any renovation or construction project, your air ducts collect drywall dust, sawdust, paint particles, and construction debris. Our post-renovation duct cleaning service ensures these harmful particulates don't circulate throughout your home or building, protecting your family and your HVAC equipment.",
        benefits: [
          "Remove construction dust and debris from ductwork",
          "Prevent drywall dust from circulating",
          "Protect your HVAC system from damage",
          "Ensure clean air after renovation",
          "Recommended by contractors and home inspectors",
        ],
        keywords: ["post renovation duct cleaning", "construction cleanup ducts", "after remodel duct cleaning", "new construction duct cleaning"],
      },
      {
        name: "Unit Cleaning",
        slug: "unit-cleaning",
        shortDescription: "Cleaning of internal HVAC unit components.",
        description:
          "Our HVAC unit cleaning service targets the internal components of your heating and cooling system, including the heat exchanger, blower assembly, and drain pan. By removing accumulated grime and buildup, we restore your system's peak performance and prevent costly breakdowns.",
        benefits: [
          "Restore HVAC system efficiency",
          "Prevent unexpected breakdowns",
          "Reduce energy consumption",
          "Extend equipment lifespan",
          "Improve heating and cooling performance",
        ],
        keywords: ["HVAC unit cleaning", "furnace cleaning", "AC unit cleaning", "heating unit maintenance"],
      },
      {
        name: "Coil Cleaning Service",
        slug: "coil-cleaning",
        shortDescription: "Cleaning evaporator and condenser coils to improve efficiency.",
        description:
          "Dirty evaporator and condenser coils are one of the leading causes of HVAC inefficiency. Our professional coil cleaning service removes dirt, grime, and biological growth from both indoor and outdoor coils, restoring your system's heat transfer capability and reducing energy consumption by up to 30%.",
        benefits: [
          "Save up to 30% on energy costs",
          "Restore cooling capacity",
          "Prevent compressor failure",
          "Extend AC system lifespan",
          "Improve dehumidification performance",
        ],
        keywords: ["coil cleaning service", "evaporator coil cleaning", "condenser coil cleaning", "AC coil maintenance"],
      },
      {
        name: "Blower Cleaning Service",
        slug: "blower-cleaning",
        shortDescription: "Removing dust and buildup from the furnace blower motor.",
        description:
          "The blower motor is the heart of your HVAC system, and when it's coated in dust and debris, your entire system suffers. Our blower cleaning service carefully disassembles, cleans, and reassembles your blower assembly, restoring proper airflow and reducing strain on your system.",
        benefits: [
          "Restore proper airflow throughout your home",
          "Reduce blower motor strain and noise",
          "Lower energy consumption",
          "Prevent overheating and motor failure",
          "Improve overall HVAC performance",
        ],
        keywords: ["blower cleaning service", "furnace blower cleaning", "blower motor cleaning", "HVAC blower maintenance"],
      },
      {
        name: "Disinfecting & Sanitizing",
        slug: "disinfecting-sanitizing",
        shortDescription: "Eco-friendly agents to kill mold and bacteria.",
        description:
          "Our duct disinfecting and sanitizing service uses EPA-registered, eco-friendly products like Benefect Decon 30 — a botanical antimicrobial that kills 99.99% of bacteria, viruses, mold, and fungi without harsh chemicals. Safe for your family, pets, and the environment.",
        benefits: [
          "Kill 99.99% of bacteria, mold, and viruses",
          "EPA-registered botanical antimicrobial",
          "Safe for children, pets, and the environment",
          "Eliminate mold growth in ductwork",
          "Hospital-grade disinfection without toxic chemicals",
        ],
        keywords: ["duct disinfecting", "duct sanitizing", "mold removal ducts", "antimicrobial duct treatment", "Benefect Decon 30"],
      },
      {
        name: "UV Lights Installation",
        slug: "uv-lights-installation",
        shortDescription: "UV systems to maintain ongoing air purity.",
        description:
          "Upgrade your HVAC system with professional UV light installation for continuous air purification. Our UV-C germicidal lights are installed inside your ductwork or near the evaporator coil, destroying mold, bacteria, and viruses 24/7 as air passes through your system.",
        benefits: [
          "Continuous 24/7 air purification",
          "Destroy mold and bacteria at the source",
          "Reduce allergy and illness symptoms",
          "Keep evaporator coils clean",
          "Low maintenance with annual bulb replacement",
        ],
        keywords: ["UV light installation HVAC", "germicidal UV lights", "UV air purifier", "UV-C duct installation"],
      },
    ],
    faqs: [
      {
        question: "How often should I have my air ducts cleaned?",
        answer:
          "The National Air Duct Cleaners Association (NADCA) recommends cleaning your air ducts every 3-5 years. However, you may need more frequent cleaning if you have pets, allergies, smokers in the home, or have recently completed renovations.",
      },
      {
        question: "How long does air duct cleaning take?",
        answer:
          "A typical residential air duct cleaning takes 2-4 hours depending on the size of your home and the complexity of your HVAC system. Commercial properties may take longer based on the scope of the system.",
      },
      {
        question: "Will air duct cleaning reduce my energy bills?",
        answer:
          "Yes! According to the U.S. Department of Energy, 25-40% of energy used for heating or cooling is wasted due to contaminant buildup. Clean ducts allow your HVAC system to operate more efficiently, potentially reducing your energy bills by 20-30%.",
      },
      {
        question: "Is air duct cleaning messy?",
        answer:
          "Not at all. Our technicians use powerful HEPA-filtered vacuum systems that create negative pressure in your ductwork, ensuring all dust and debris is captured — not released into your home. We also protect your floors and furniture during the process.",
      },
      {
        question: "Do you clean all types of ductwork?",
        answer:
          "Yes, we clean all types including flexible ducts, sheet metal ducts, and fiberglass-lined ducts. Our technicians are trained and equipped to handle any ductwork configuration.",
      },
      {
        question: "What are the signs I need air duct cleaning?",
        answer:
          "Common signs include visible dust around vents, musty or stale odors when the HVAC runs, increased allergy symptoms, uneven heating/cooling, and higher than normal energy bills. If you notice any of these, it's time for a professional cleaning.",
      },
    ],
  },
  {
    name: "Dryer Vent Services",
    slug: "dryer-vent-services",
    shortDescription: "Expert dryer vent cleaning, repair, and replacement for safety.",
    description:
      "Clogged dryer vents are a leading cause of house fires, responsible for over 15,000 fires annually in the United States. Eco Clear Air's dryer vent services protect your home and family by ensuring safe, efficient dryer operation through professional cleaning, repair, and replacement.",
    image: "/images/service-dryer-vent.png",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    keywords: [
      "dryer vent cleaning",
      "dryer vent repair",
      "lint removal",
      "dryer fire prevention",
      "dryer vent replacement",
      "dryer exhaust cleaning",
    ],
    subServices: [
      {
        name: "Residential Dryer Vent Cleaning",
        slug: "residential-dryer-vent-cleaning",
        shortDescription: "Lint removal for single-family homes.",
        description:
          "Our residential dryer vent cleaning service removes dangerous lint buildup from your dryer's exhaust system, from the dryer connection all the way to the exterior vent cap. This critical maintenance prevents fires, reduces drying times, and extends the life of your dryer.",
        benefits: [
          "Prevent dryer fires — the #1 cause of home fires",
          "Reduce drying times by up to 50%",
          "Lower energy costs",
          "Extend dryer lifespan",
          "Eliminate excess humidity and musty odors",
        ],
        keywords: ["residential dryer vent cleaning", "home dryer vent cleaning", "lint removal service", "dryer exhaust cleaning"],
      },
      {
        name: "Commercial Dryer Vent Cleaning",
        slug: "commercial-dryer-vent-cleaning",
        shortDescription: "High-volume vent cleaning for laundromats or hotels.",
        description:
          "Commercial dryers process vastly more laundry than residential units, creating significantly more lint buildup. Our commercial dryer vent cleaning service keeps laundromats, hotels, hospitals, and multi-unit facilities safe and efficient with thorough, professional cleaning.",
        benefits: [
          "Meet fire safety code requirements",
          "Reduce commercial energy costs",
          "Minimize equipment downtime",
          "Protect your business liability",
          "Flexible scheduling to avoid business disruption",
        ],
        keywords: ["commercial dryer vent cleaning", "laundromat vent cleaning", "hotel dryer vent", "industrial dryer vent cleaning"],
      },
      {
        name: "Property Management Annual Cleaning",
        slug: "property-management-annual-cleaning",
        shortDescription: "Recurring maintenance for multi-unit buildings.",
        description:
          "Protect your investment and your tenants with our annual dryer vent cleaning contracts for property managers. We handle scheduling, access coordination, and provide detailed documentation for each unit — keeping your buildings safe and code-compliant year after year.",
        benefits: [
          "Reduce liability risk for property owners",
          "Meet insurance and code requirements",
          "Coordinate scheduling across all units",
          "Detailed reporting and documentation",
          "Volume discounts for multi-unit properties",
        ],
        keywords: [
          "property management dryer vent cleaning",
          "apartment dryer vent service",
          "multi-unit vent cleaning",
          "annual dryer vent maintenance",
        ],
      },
      {
        name: "Dryer Vent Clog Removal",
        slug: "dryer-vent-clog-removal",
        shortDescription: "Clearing major obstructions to restore airflow.",
        description:
          "When your dryer takes forever to dry clothes or the exterior vent flap doesn't open, you likely have a major clog. Our technicians use specialized rotary tools and high-powered vacuums to remove even the most stubborn obstructions, restoring full airflow to your dryer vent system.",
        benefits: [
          "Restore full dryer performance",
          "Eliminate fire hazards from blocked vents",
          "Fix clothes that won't dry properly",
          "Remove bird nests and debris blockages",
          "Same-day emergency service available",
        ],
        keywords: ["dryer vent clog removal", "blocked dryer vent", "dryer not drying", "dryer vent obstruction"],
      },
      {
        name: "Dryer Vent Repair",
        slug: "dryer-vent-repair",
        shortDescription: "Fixing disconnected or damaged ducting.",
        description:
          "Disconnected, crushed, or damaged dryer vent ducting is a serious fire and carbon monoxide hazard. Our repair service identifies and fixes all issues in your dryer vent line, including disconnections, kinks, improper transitions, and damaged sections.",
        benefits: [
          "Fix disconnected vent connections",
          "Repair crushed or kinked ducting",
          "Replace improper flexible-to-rigid transitions",
          "Ensure proper vent slope and routing",
          "Bring venting up to current building codes",
        ],
        keywords: ["dryer vent repair", "dryer duct repair", "disconnected dryer vent", "dryer vent fix"],
      },
      {
        name: "Dryer Vent Replacement",
        slug: "dryer-vent-replacement",
        shortDescription: "Installing new, code-compliant venting systems.",
        description:
          "If your dryer vent system is beyond repair — using plastic or foil ducting, improperly routed, or severely damaged — we provide complete dryer vent replacement with code-compliant rigid or semi-rigid aluminum ducting, proper exterior vent caps, and professional installation.",
        benefits: [
          "Code-compliant rigid aluminum ducting",
          "Proper exterior vent cap installation",
          "Optimized vent routing for maximum airflow",
          "Full system warranty",
          "Meets all local building codes",
        ],
        keywords: ["dryer vent replacement", "new dryer vent installation", "dryer duct replacement", "dryer vent upgrade"],
      },
    ],
    faqs: [
      {
        question: "How often should dryer vents be cleaned?",
        answer:
          "Dryer vents should be cleaned at least once a year. If you do a lot of laundry, have pets, or notice your dryer taking longer to dry clothes, you may need cleaning more frequently. The U.S. Fire Administration recommends annual cleaning.",
      },
      {
        question: "How do I know if my dryer vent is clogged?",
        answer:
          "Signs include: clothes taking more than one cycle to dry, the dryer feels very hot to the touch, a burning smell during operation, the laundry room feels humid, or the exterior vent flap doesn't open when the dryer is running.",
      },
      {
        question: "Can a clogged dryer vent cause a fire?",
        answer:
          "Absolutely. According to the National Fire Protection Association (NFPA), failure to clean dryer vents is the leading cause of dryer fires. Over 15,000 dryer fires occur annually in the U.S., causing injuries, deaths, and millions in property damage.",
      },
      {
        question: "How long does dryer vent cleaning take?",
        answer: "Most residential dryer vent cleanings take 30-60 minutes. More complex installations or heavily clogged systems may take longer.",
      },
      {
        question: "Do you clean dryer vents on the roof?",
        answer:
          "Yes, we clean dryer vents regardless of where they terminate — through walls, roofs, or soffits. Our technicians are fully equipped for roof-level access and cleaning.",
      },
    ],
  },
  {
    name: "Chimney Sweep & Repair",
    slug: "chimney-sweep-repair",
    shortDescription: "Complete chimney cleaning, inspection, repair, and installation.",
    description:
      "From annual chimney sweeps to complete restorations, Eco Clear Air provides comprehensive chimney services to keep your home safe and your fireplace performing at its best. Our CSIA-certified technicians handle everything from routine maintenance to complex repairs and installations.",
    image: "/images/service-chimney-sweep.png",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    keywords: [
      "chimney sweep",
      "chimney cleaning",
      "chimney repair",
      "chimney inspection",
      "fireplace maintenance",
      "chimney cap",
      "chimney liner",
    ],
    subServices: [
      {
        name: "Chimney Sweep/Cleaning",
        slug: "chimney-sweep-cleaning",
        shortDescription: "Professional chimney sweep and creosote removal.",
        description:
          "Our professional chimney sweep service removes dangerous creosote buildup, soot, and debris from your chimney flue. Creosote is highly flammable and is the leading cause of chimney fires. Regular sweeping keeps your family safe and your fireplace working efficiently.",
        benefits: [
          "Remove flammable creosote buildup",
          "Prevent chimney fires",
          "Improve fireplace draft and efficiency",
          "Eliminate smoke odors",
          "CSIA-certified technicians",
        ],
        keywords: ["chimney sweep", "chimney cleaning", "creosote removal", "fireplace cleaning", "chimney sweep service"],
      },
      {
        name: "Furnace & Boiler Chimney Cleaning",
        slug: "furnace-boiler-chimney-cleaning",
        shortDescription: "Cleaning for heating system chimneys.",
        description:
          "Gas and oil furnaces and boilers vent through chimney flues that require regular cleaning. Acidic condensation and soot from combustion gases can deteriorate your chimney liner and create dangerous carbon monoxide backup situations. Our specialized cleaning keeps these critical venting systems safe.",
        benefits: [
          "Prevent carbon monoxide backup",
          "Remove acidic soot deposits",
          "Protect chimney liner integrity",
          "Ensure proper furnace venting",
          "Meet annual maintenance requirements",
        ],
        keywords: ["furnace chimney cleaning", "boiler chimney cleaning", "heating chimney maintenance", "furnace flue cleaning"],
      },
      {
        name: "Chimney Inspection",
        slug: "chimney-inspection",
        shortDescription: "Level 1, 2, or 3 chimney inspections.",
        description:
          "Our chimney inspections follow NFPA 211 standards with three levels of inspection. Level 1 is a basic visual inspection for routine maintenance. Level 2 includes video camera scanning and is required for home sales or after a chimney fire. Level 3 involves partial demolition to access concealed areas when serious hazards are suspected.",
        benefits: [
          "NFPA 211 compliant inspections",
          "Video camera flue scanning (Level 2+)",
          "Detailed written reports with photos",
          "Required for real estate transactions",
          "Identify hidden damage and hazards",
        ],
        keywords: ["chimney inspection", "chimney camera inspection", "Level 2 chimney inspection", "home sale chimney inspection"],
      },
      {
        name: "Chimney Repair & Full Restoration",
        slug: "chimney-repair-restoration",
        shortDescription: "Complete chimney repair and restoration services.",
        description:
          "From minor mortar repairs to complete chimney rebuilds, our masonry experts restore your chimney to safe, functional condition. We handle cracked bricks, deteriorated mortar, leaning chimneys, water damage, and structural issues with skilled craftsmanship and quality materials.",
        benefits: [
          "Restore structural integrity",
          "Stop water penetration and damage",
          "Preserve your home's value and appearance",
          "Expert masonry craftsmanship",
          "Full warranties on all repairs",
        ],
        keywords: ["chimney repair", "chimney restoration", "chimney rebuild", "chimney masonry repair"],
      },
      {
        name: "Chimney Pointing",
        slug: "chimney-pointing",
        shortDescription: "Masonry and mortar joint repair.",
        description:
          "Chimney pointing (also called tuckpointing or repointing) involves removing deteriorated mortar from between bricks and replacing it with fresh mortar. This critical maintenance prevents water infiltration, structural damage, and extends the life of your chimney by decades.",
        benefits: [
          "Prevent water damage to chimney structure",
          "Restore mortar joints to full strength",
          "Extend chimney lifespan by 25+ years",
          "Improve chimney appearance",
          "Prevent brick spalling from freeze-thaw cycles",
        ],
        keywords: ["chimney pointing", "chimney tuckpointing", "chimney repointing", "chimney mortar repair"],
      },
      {
        name: "Chimney Crown Repair",
        slug: "chimney-crown-repair",
        shortDescription: "Repair and waterproof your chimney crown.",
        description:
          "The chimney crown is the concrete cap at the top of your chimney that prevents water from entering the chimney structure. Cracked or deteriorated crowns are a leading cause of chimney water damage. We repair or rebuild crowns with proper materials and waterproof coatings.",
        benefits: [
          "Stop water from entering chimney",
          "Prevent freeze-thaw damage",
          "Extend chimney life significantly",
          "Proper crown construction with drip edges",
          "Waterproof coating for lasting protection",
        ],
        keywords: ["chimney crown repair", "chimney crown replacement", "chimney cap concrete repair", "chimney waterproofing"],
      },
      {
        name: "Chimney Damper Repair",
        slug: "chimney-damper-repair",
        shortDescription: "Fix or replace your chimney damper.",
        description:
          "A broken or missing chimney damper allows heated or cooled air to escape through your chimney 24/7, significantly increasing your energy bills. Our damper repair and replacement service restores proper function, including top-mounted damper upgrades that double as rain caps.",
        benefits: [
          "Stop energy loss through the chimney",
          "Reduce heating and cooling costs",
          "Prevent animal and debris entry",
          "Top-mount damper upgrades available",
          "Improve fireplace draft control",
        ],
        keywords: ["chimney damper repair", "chimney damper replacement", "fireplace damper fix", "top mount chimney damper"],
      },
      {
        name: "Chimney Flue & Liner Repair",
        slug: "chimney-flue-liner-repair",
        shortDescription: "Repair or replace chimney flue liners.",
        description:
          "The chimney liner protects your home from the extreme heat and corrosive gases produced by your fireplace or heating system. Cracked, deteriorated, or missing liners are a serious fire and carbon monoxide hazard. We install stainless steel, aluminum, and cast-in-place liners.",
        benefits: [
          "Prevent chimney fires and CO poisoning",
          "Stainless steel liners with lifetime warranty",
          "Improve fireplace efficiency",
          "Meet current building codes",
          "Protect masonry from corrosive gases",
        ],
        keywords: ["chimney liner repair", "chimney flue repair", "chimney relining", "stainless steel chimney liner"],
      },
      {
        name: "Chimney Installation",
        slug: "chimney-installation",
        shortDescription: "New chimney construction and installation.",
        description:
          "Whether you're adding a new fireplace, wood stove, or need a chimney for a new construction project, our team provides complete chimney installation services. We build code-compliant chimneys using quality materials and expert craftsmanship.",
        benefits: [
          "Complete new chimney construction",
          "Code-compliant design and installation",
          "Quality masonry and materials",
          "Wood stove and fireplace chimney systems",
          "Factory-built chimney options available",
        ],
        keywords: ["chimney installation", "new chimney construction", "chimney building", "fireplace chimney installation"],
      },
      {
        name: "Chimney Flue & Vent Installation",
        slug: "chimney-flue-vent-installation",
        shortDescription: "Install new flue liners and vent systems.",
        description:
          "We install new chimney flue liners and venting systems for fireplaces, furnaces, boilers, and water heaters. Proper flue sizing and installation is critical for safe operation and code compliance. Our technicians ensure your venting system meets all local and national codes.",
        benefits: [
          "Proper flue sizing for your appliance",
          "UL-listed liner systems",
          "Code-compliant installation",
          "Improved draft and efficiency",
          "All fuel types supported",
        ],
        keywords: ["chimney flue installation", "chimney vent installation", "flue liner installation", "chimney venting system"],
      },
      {
        name: "Chimney Insulation",
        slug: "chimney-insulation",
        shortDescription: "Insulate your chimney for better performance.",
        description:
          "Chimney insulation improves draft performance, reduces condensation, and helps your fireplace or heating appliance operate more efficiently. We install wrap insulation around stainless steel liners and provide insulated chimney chase covers for factory-built systems.",
        benefits: [
          "Improve chimney draft significantly",
          "Reduce condensation and corrosion",
          "Better fireplace/stove performance",
          "Required for many liner installations",
          "Energy savings from reduced heat loss",
        ],
        keywords: ["chimney insulation", "chimney liner insulation", "chimney wrap insulation", "insulated chimney liner"],
      },
      {
        name: "Chimney Cap & Rain Cap",
        slug: "chimney-cap-rain-cap",
        shortDescription: "Replacement and repair of chimney caps.",
        description:
          "A chimney cap is your chimney's first line of defense against rain, snow, animals, and debris. Our stainless steel and copper chimney caps come with lifetime warranties and are custom-fitted to your chimney flue for maximum protection.",
        benefits: [
          "Prevent rain and moisture entry",
          "Keep animals and birds out",
          "Block downdrafts and debris",
          "Spark arrestor for fire safety",
          "Lifetime warranty on stainless steel caps",
        ],
        keywords: ["chimney cap replacement", "chimney cap installation", "rain cap chimney", "chimney cap repair"],
      },
    ],
    faqs: [
      {
        question: "How often should I have my chimney swept?",
        answer:
          "The National Fire Protection Association (NFPA) recommends annual chimney inspections and cleaning as needed. If you burn wood regularly, annual sweeping is essential. Even gas fireplaces and furnaces should have their chimneys inspected yearly.",
      },
      {
        question: "What is creosote and why is it dangerous?",
        answer:
          "Creosote is a tar-like substance that builds up inside your chimney from burning wood. It's highly flammable and is the primary cause of chimney fires. There are three stages of creosote — Stage 3 (glazed creosote) is the most dangerous and requires professional removal.",
      },
      {
        question: "Do I need a chimney inspection to sell my home?",
        answer:
          "While requirements vary by municipality, most home inspectors will flag chimney issues and many lenders require a Level 2 chimney inspection before approving a mortgage. A clean inspection report gives buyers confidence and can prevent deal delays.",
      },
      {
        question: "How much does a chimney repair cost?",
        answer:
          "Chimney repair costs vary widely depending on the scope — from $200-$500 for minor crown repairs to several thousand for major masonry restoration or liner replacement. We provide free estimates so you know the exact cost before we begin.",
      },
      {
        question: "What's the difference between chimney inspection levels?",
        answer:
          "Level 1 is a basic visual inspection during routine maintenance. Level 2 adds video scanning and is required for home sales, after a chimney fire, or when changing fuel types. Level 3 involves accessing concealed areas and is used when serious hazards are suspected.",
      },
      {
        question: "Can I use my fireplace if my chimney liner is cracked?",
        answer:
          "No. A cracked chimney liner is a serious safety hazard that can allow heat to reach combustible materials in your home's structure, causing a house fire. It can also allow carbon monoxide to leak into your living space. Have it repaired or replaced before using your fireplace.",
      },
    ],
  },
  {
    name: "Specialty Services",
    slug: "specialty-services",
    shortDescription: "Nest removal, odor elimination, and specialized treatments.",
    description:
      "Eco Clear Air offers specialized services beyond standard cleaning, including professional removal of animal and bird nests from chimneys and vents, as well as advanced odor removal treatments for persistent smells within your duct system. These targeted services address unique problems that standard cleaning alone cannot solve.",
    image: "/images/service-specialty.png",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    keywords: ["nest removal chimney", "bird nest removal", "odor removal ducts", "animal removal chimney", "duct deodorizing"],
    subServices: [
      {
        name: "Nest Removal",
        slug: "nest-removal",
        shortDescription: "Professional removal of bird or animal nests.",
        description:
          "Birds, squirrels, raccoons, and other animals frequently build nests in chimneys and dryer vents, creating fire hazards and blockages. Our humane nest removal service safely extracts nesting materials, sanitizes the affected area, and installs protective caps to prevent future nesting.",
        benefits: [
          "Safe, humane animal and bird nest removal",
          "Eliminate fire hazards from nesting material",
          "Restore proper chimney and vent airflow",
          "Sanitize and deodorize affected areas",
          "Install protective caps to prevent recurrence",
        ],
        keywords: ["nest removal chimney", "bird nest removal vent", "animal nest removal", "chimney nest removal service"],
      },
      {
        name: "Odor Removal & Deodorizing",
        slug: "odor-removal-deodorizing",
        shortDescription: "Specialized treatments for persistent smells.",
        description:
          "Persistent odors in your ductwork — from mold, pet smells, cooking, smoke, or deceased animals — can make your home uncomfortable. Our advanced odor removal service uses professional-grade deodorizing agents, ozone treatment, and thorough cleaning to eliminate odors at the source, not just mask them.",
        benefits: [
          "Eliminate odors at the source",
          "Professional-grade deodorizing treatments",
          "Ozone treatment for severe odors",
          "Effective on mold, smoke, pet, and cooking odors",
          "Long-lasting results, not just masking",
        ],
        keywords: ["duct odor removal", "HVAC deodorizing", "vent smell removal", "duct odor treatment", "musty duct smell"],
      },
    ],
    faqs: [
      {
        question: "How do I know if there's a nest in my chimney?",
        answer:
          "Common signs include chirping or scratching sounds from the chimney, debris falling into the fireplace, a foul odor, poor draft performance, or actually seeing birds entering and exiting the chimney top. If you suspect a nest, don't light a fire — call us for safe removal.",
      },
      {
        question: "Is it legal to remove bird nests from chimneys?",
        answer:
          "Most bird nests can be legally removed. However, some species like chimney swifts are protected under the Migratory Bird Treaty Act and cannot be disturbed during nesting season (typically May-October). We'll identify the species and advise on the proper legal course of action.",
      },
      {
        question: "Why do my air ducts smell bad?",
        answer:
          "Common causes include mold or mildew growth (often from excess moisture), accumulated dust and bacteria, pet dander, a deceased animal in the ductwork, or chemical residues. Our technicians diagnose the source and provide targeted treatment to eliminate the odor permanently.",
      },
      {
        question: "How long does odor treatment last?",
        answer:
          "Our professional odor removal treatments provide long-lasting results because we address the source of the odor, not just the symptoms. Most treatments eliminate odors permanently. In severe cases (like smoke damage), multiple treatments may be needed.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getSubServiceBySlug(serviceSlug: string, subServiceSlug: string): SubService | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.subServices.find((ss) => ss.slug === subServiceSlug);
}
