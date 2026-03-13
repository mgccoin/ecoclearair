"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "@/data/services";

const navServices = services.map((s) => ({
  name: s.name,
  href: `/services/${s.slug}`,
}));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            className="h-8 w-8 text-brand-green transition-transform group-hover:scale-110"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C16 2 6 10 6 18c0 5.523 4.477 10 10 10s10-4.477 10-10C26 10 16 2 16 2z"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M16 4C10 10 8 15 8 18a8 8 0 0016 0c0-3-2-8-8-14z"
              fill="currentColor"
            />
            <path
              d="M16 28c-1-4-1-8 2-13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 22c-3-2-4-5-3-8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Eco <span className="text-brand-green">Clear Air</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-green"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-green"
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {servicesOpen && (
              <div
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-xl animate-fade-in-down"
              >
                {navServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/service-areas"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-green"
          >
            Service Areas
          </Link>
          <Link
            href="/coupons"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-green"
          >
            Coupons
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-brand-green"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+18882741204"
          className="hidden items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-green/25 transition-all hover:bg-brand-green-dark hover:shadow-xl hover:shadow-brand-green/30 lg:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          (888) 274-1204
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex h-5 w-6 flex-col items-center justify-center gap-[5px]">
            <span
              className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <span className="text-lg font-bold text-gray-900">Menu</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-green"
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-green"
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 border-l-2 border-brand-green/20 pl-2">
                {navServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-brand-green/10 hover:text-brand-green"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/service-areas"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-green"
          >
            Service Areas
          </Link>
          <Link
            href="/coupons"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-green"
          >
            Coupons
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-brand-green"
          >
            Contact
          </Link>
        </nav>

        <div className="border-t border-gray-100 p-4">
          <a
            href="tel:+18882741204"
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-green px-4 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-brand-green-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (888) 274-1204
          </a>
        </div>
      </div>
    </header>
  );
}
