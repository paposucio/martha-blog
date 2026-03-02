import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide text-navy">
          Martha Z Jeffrey
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-warm-gray hover:text-navy transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-warm-gray hover:text-navy transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-sm text-warm-gray hover:text-navy transition-colors"
          >
            Blog
          </Link>
          <a
            href="tel:+12039647800"
            className="text-sm text-navy font-medium hover:text-gold transition-colors"
          >
            (203) 964-7800
          </a>
        </nav>
      </div>
    </header>
  );
}
