import Link from "next/link";

interface HeroCTA {
  label: string;
  href: string;
  style: "gold" | "outline";
}

interface HeroProps {
  headline: string;
  subheadline?: string;
  ctas?: HeroCTA[];
}

export function Hero({ headline, subheadline, ctas }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-navy via-navy to-navy-dark text-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up">
          {headline}
        </h1>
        {subheadline && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {subheadline}
          </p>
        )}
        {ctas && ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctas.map((cta) => {
              const isExternal = cta.href.startsWith("http") || cta.href.startsWith("tel:");
              const className = cta.style === "gold" ? "btn-gold" : "btn-outline";
              if (isExternal) {
                return (
                  <a key={cta.label} href={cta.href} className={className}>
                    {cta.label}
                  </a>
                );
              }
              return (
                <Link key={cta.label} href={cta.href} className={className}>
                  {cta.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
