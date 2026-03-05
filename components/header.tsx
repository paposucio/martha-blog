"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/80">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-navy hover:text-gold transition-colors"
        >
          Martha Z Jeffrey
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.1em] font-medium transition-colors ${
                isActive(link.href)
                  ? "text-gold"
                  : "text-navy hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+12039647800"
            className="text-sm text-navy font-medium hover:text-gold transition-colors"
          >
            (203) 964-7800
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200/80 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-sm uppercase tracking-[0.1em] font-medium min-h-[44px] flex items-center transition-colors ${
                isActive(link.href)
                  ? "text-gold bg-cream"
                  : "text-navy hover:text-gold hover:bg-cream/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+12039647800"
            className="block px-6 py-3 text-sm text-navy font-medium min-h-[44px] flex items-center hover:text-gold border-t border-gray-100"
          >
            (203) 964-7800
          </a>
        </nav>
      )}
    </header>
  );
}
