"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="ViaFarma home"
            className="flex items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/viefarma.png"
              alt="ViaFarma Logo"
              width={60}
              height={60}
              className="h-12 w-12 sm:h-[60px] sm:w-[60px]"
            />
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-black hover:bg-green-50 hover:text-green-700 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav aria-label="Main navigation" className="hidden md:block">
            <div className="flex items-center gap-6 text-base font-medium text-black">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-green-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <nav
          id="main-navigation"
          aria-label="Mobile navigation"
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        >
          <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-3 text-base font-medium text-black">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 hover:bg-green-50 hover:text-green-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
