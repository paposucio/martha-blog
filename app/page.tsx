export default function HomePage() {
  return (
    <section className="flex-1 flex items-center justify-center py-24 px-6">
      <div className="max-w-xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">
          Martha Z Jeffrey
        </h1>
        <p className="text-warm-gray text-lg mb-2">
          Sotheby&apos;s International Realty | Greenwich, CT
        </p>
        <div className="w-16 h-px bg-gold mx-auto my-8" />
        <p className="text-warm-gray leading-relaxed mb-8">
          Luxury real estate expertise with over 40 years of experience
          serving Greenwich, Old Greenwich, Riverside, Cos Cob, and all of
          Fairfield County. Something new is on the way.
        </p>
        <div className="space-y-3">
          <p className="text-navy font-medium">
            <a
              href="tel:+12039647800"
              className="hover:text-gold transition-colors"
            >
              (203) 964-7800
            </a>
          </p>
          <p>
            <a
              href="https://marthazjeffrey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-warm-gray hover:text-navy underline underline-offset-4 transition-colors"
            >
              marthazjeffrey.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
