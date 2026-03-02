export default function HomePage() {
  return (
    <section className="flex-1 flex items-center justify-center py-24 px-6">
      <div className="max-w-xl text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">
          Martha Z Jeffrey
        </h1>
        <p className="text-warm-gray text-lg mb-6">
          Sotheby&apos;s International Realty | Greenwich, CT
        </p>
        <div className="w-16 h-px bg-gold mx-auto my-8" />
        <div className="bg-cream border border-gray-200 px-8 py-6 mb-8">
          <p className="text-sm font-semibold text-navy uppercase tracking-widest mb-2">
            Under Construction
          </p>
          <p className="text-warm-gray leading-relaxed">
            A new website is being built. In the meantime, please visit my
            main site or give me a call.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-navy font-medium text-lg">
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
              className="inline-block bg-navy text-white text-sm font-medium px-6 py-3 hover:bg-navy-light transition-colors"
            >
              Visit marthazjeffrey.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
