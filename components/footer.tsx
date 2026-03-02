import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-cream mt-20">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg text-navy mb-3">
              Martha Z Jeffrey
            </h3>
            <p className="text-sm text-warm-gray leading-relaxed">
              Licensed Real Estate Agent with 40+ years of experience serving
              Greenwich, Connecticut and surrounding communities.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-warm-gray">
              <li>
                <a href="tel:+12039647800" className="hover:text-navy">
                  (203) 964-7800
                </a>
              </li>
              <li>Sotheby&apos;s International Realty</li>
              <li>1 Pickwick Plaza, Greenwich, CT 06830</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-2 text-sm text-warm-gray">
              <li>
                <Link href="/about" className="hover:text-navy">
                  About Martha
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-navy">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://marthazjeffrey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy"
                >
                  marthazjeffrey.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-300 text-center text-xs text-warm-gray">
          &copy; {new Date().getFullYear()} Martha Z Jeffrey |
          Sotheby&apos;s International Realty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
