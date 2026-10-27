import Image from "next/image";
import Link from "next/link";
import { reviews, business, projects, services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const featured = projects.slice(0, 4);
  return (
    <main>
      <section className="grid lg:min-h-[calc(100vh-72px)] lg:grid-cols-12">
        <Reveal className="flex flex-col justify-end px-5 py-12 lg:col-span-5 lg:px-10 lg:py-16">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-brass">Pilot Point, Texas</p>
          <h1 className="mt-4 max-w-md font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            Grounds kept to the standard of the property.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-mute">
            Commercial sites and private estates across North Dallas–Fort Worth. Maintenance, renovation, and design support — not a generic mow-and-go.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#estimate" className="inline-flex h-12 items-center bg-moss px-5 text-sm text-paper">
              Request a quote
            </Link>
            <Link href="/work" className="inline-flex h-12 items-center border border-ink/20 px-5 text-sm">
              View the work
            </Link>
          </div>
          <p className="mt-6 text-sm text-mute">
            {business.hours} · <a href={business.phoneHref}>{business.phone}</a>
          </p>
        </Reveal>
        <div className="relative min-h-[70vw] lg:col-span-7 lg:min-h-full">
          <Image
            src="/media/lawn-sweep.jpg"
            alt="A broad green lawn curving beside a dense border of flowering shrubs and mature trees."
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-page gap-6 px-5 py-8 sm:grid-cols-3">
          <p><span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Based</span>{business.street}, {business.city}</p>
          <p><span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Work</span>Commercial grounds and private estates</p>
          <p><span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Also</span>Renovation, irrigation, pressure washing</p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Selected work</p>
            <h2 className="mt-2 font-serif text-4xl">Photographs from the company’s projects.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-mute">Documented on-site across North Texas estates and commercial grounds.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <Link href="/work" className="group md:col-span-7">
            <span className="relative block aspect-[4/5] overflow-hidden">
              <Image src={featured[0].image} alt={featured[0].alt} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(min-width: 768px) 55vw, 100vw" />
            </span>
            <span className="mt-3 block font-serif text-2xl">{featured[0].title}</span>
          </Link>
          <div className="grid gap-4 md:col-span-5">
            {featured.slice(1).map((project) => (
              <Link key={project.slug} href="/work" className="grid grid-cols-[112px_1fr] items-center gap-3">
                <span className="relative block aspect-square overflow-hidden">
                  <Image src={project.image} alt={project.alt} fill className="object-cover" sizes="112px" />
                </span>
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-brass">{project.badge}</span>
                  <span className="mt-1 block font-serif text-xl leading-tight">{project.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-page px-5 py-16">
          <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Services</p>
          <h2 className="mt-2 max-w-xl font-serif text-4xl">What the company actually offers.</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="grid gap-2 py-5 sm:grid-cols-[4rem_1fr_1.2fr] sm:items-baseline">
                  <span className="text-sm text-brass">0{index + 1}</span>
                  <strong className="font-serif text-2xl font-medium">{service.title}</strong>
                  <span className="text-sm leading-6 text-mute">{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-16">
        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">How a quote starts</p>
        <h2 className="mt-2 font-serif text-4xl">Three steps. No invented timeline.</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Tell us the property", "City or ZIP, commercial or home, and what needs attention."],
            ["The site gets looked at", "Every property is evaluated individually to ensure an accurate, customized scope."],
            ["You get a clear scope", "Work starts from an agreed program. Reply time depends on the office, not this page."],
          ].map(([title, copy], index) => (
            <li key={title}>
              <span className="text-sm text-brass">0{index + 1}</span>
              <h3 className="mt-2 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-page px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">From public reviews</p>
              <h2 className="mt-2 font-serif text-4xl">Yelp, {business.yelpScore} from {business.yelpCount} reviews.</h2>
            </div>
            <a href={business.yelp} className="text-sm underline-offset-4 hover:underline">Read the Yelp profile</a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.name} className="border-t border-ink pt-4">
                <p className="text-sm leading-6">“{review.quote}”</p>
                <footer className="mt-4 text-xs uppercase tracking-[0.14em] text-mute">{review.name} · {review.detail}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss text-paper">
        <div className="mx-auto grid max-w-page gap-8 px-5 py-16 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-paper/60">Service area</p>
            <h2 className="mt-2 font-serif text-4xl">North Dallas–Fort Worth.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-paper/75">
              Serving regular maintenance routes across Frisco, Prosper, Celina, and surrounding North DFW communities. The company also says it serves clients throughout Texas.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-y-2 text-lg">
            {business.cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
