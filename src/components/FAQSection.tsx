"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const defaultFAQs: FAQ[] = [
  {
    question: "What areas does Eco Clear Air serve?",
    answer:
      "We serve Greater Boston, South Shore, MetroWest, North Shore, and surrounding communities — over 40 cities and towns from Boston to Providence. Contact us to confirm we service your area.",
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer:
      "Absolutely. We use eco-friendly, EPA-registered botanical antimicrobials like Benefect Decon 30 that are safe for your family, pets, and the environment — no harsh chemicals or toxic residues.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We provide free, no-obligation estimates for all our services. Call us at (888) 274-1204 or request an estimate online to get started.",
  },
  {
    question: "How long does a typical service appointment take?",
    answer:
      "Most residential services take 2-4 hours depending on the scope. Dryer vent cleaning is typically 30-60 minutes. We'll give you a time estimate when scheduling your appointment.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Yes. Our technicians are NADCA-certified for air duct cleaning and CSIA-certified for chimney work. They undergo ongoing training to stay current with industry best practices.",
  },
  {
    question: "Do you offer same-day or emergency service?",
    answer:
      "Yes, we offer same-day service for urgent situations when availability allows. Call us at (888) 274-1204 and let us know your situation — we'll do our best to accommodate you.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-brand-green/40">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-6 py-5 text-left bg-white hover:bg-gray-50/80 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-brand-green text-white rotate-180" : "bg-gray-100 text-gray-500"
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

interface FAQSectionProps {
  faqs?: FAQ[];
  heading?: string;
}

export default function FAQSection({ faqs, heading }: FAQSectionProps) {
  const items = faqs && faqs.length > 0 ? faqs : defaultFAQs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-brand-green bg-brand-green/10 rounded-full mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {heading || "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="tel:+18882741204"
              className="font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
            >
              Call (888) 274-1204
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
