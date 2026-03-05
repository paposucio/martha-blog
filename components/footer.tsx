import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-20">
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-3">
              Martha Z Jeffrey
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Licensed Real Estate Agent with 40+ years of experience serving
              Greenwich, Connecticut and surrounding communities through
              Sotheby&apos;s International Realty.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gold mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:+12039647800" className="hover:text-gold transition-colors">
                  (203) 964-7800
                </a>
              </li>
              <li>Sotheby&apos;s International Realty</li>
              <li>1 Pickwick Plaza, Greenwich, CT 06830</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-gold mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Martha
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://marthazjeffrey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  marthazjeffrey.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Martha Z Jeffrey |
          Sotheby&apos;s International Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
