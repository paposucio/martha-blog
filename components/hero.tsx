import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-navy text-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
          Your Greenwich Real Estate Expert
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          With over 40 years of experience, Martha Z Jeffrey helps buyers and
          sellers navigate Greenwich, Old Greenwich, Riverside, Cos Cob, and all
          of Fairfield County through Sotheby&apos;s International Realty.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/about"
            className="bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 text-sm transition-colors"
          >
            Meet Martha
          </Link>
          <Link
            href="/blog"
            className="border border-white/30 hover:bg-white/10 px-6 py-3 text-sm transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
