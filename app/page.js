import Image from "next/image";
import Link from "next/link";
import { ServiceMap } from "@/components/ServiceMap";
import { reviews, business, projects, services } from "@/lib/data";

const featuredSlugs = ["estate-entry", "commercial-turf", "color-bed", "stone-terrace", "sweeping-lawn", "entry-border"];

const steps = [
  ["01", "Tell us about your property", "Send the city or address, the type of property, and the work you want done."],
  ["02", "Review the property", "The office reads that note and decides what else it needs before pricing the work. A visit is not promised from this page."],
  ["03", "Agree on the scope", "The work, and any repeating maintenance, is settled before the crew starts."],
];

export default function HomePage() {
  const featured = featuredSlugs.map((slug) => projects.find((item) => item.slug === slug)).filter(Boolean);
  const leadReview = reviews[0];

  return (
    <main>
      <section className="mx-auto grid max-w-page items-center gap-6 px-5 py-6 sm:py-8 lg:grid-cols-2 lg:gap-10 lg:py-10">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-brass">Pilot Point · commercial grounds and private estates</p>
          <h1 className="mt-3 max-w-md font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl">
            Grounds kept to the standard of the property.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-mute">
            Maintenance, seasonal color, renovation, irrigation, and pressure washing for offices, associations, and private homes in Frisco, Plano, McKinney, Denton, Prosper, Little Elm, Celina, and nearby.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact#estimate" data-cta="hero-quote" className="inline-flex h-12 items-center bg-moss px-5 text-sm text-paper">
              Request a Quote
            </Link>
            <Link href="/work" data-cta="hero-work" className="inline-flex h-12 items-center border border-ink/20 px-5 text-sm">
              View Our Work
            </Link>
          </div>
          <p className="mt-5 text-sm text-mute">
            {business.hours}
            {" · "}
            <a className="text-ink underline underline-offset-4" href={business.phoneHref}>
              {business.phone}
            </a>
          </p>
        </div>
        <div className="relative h-[320px] sm:h-[380px] lg:h-[min(58vh,560px)]">
          <Image
            src="/media/estate-gate.jpg"
            alt="Yellow and cream flowers in a bed in front of a black iron fence and a stone estate entrance."
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-page gap-4 px-5 py-5 text-sm sm:grid-cols-3">
          <p>
            <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Yard</span>
            {business.street}, {business.city}
          </p>
          <p>
            <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Managers</span>
            A grounds program written for the site
          </p>
          <p>
            <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Homeowners</span>
            Turf, beds, and seasonal color on a schedule
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-10 md:py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Selected work</p>
            <h2 className="mt-2 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Look at the grounds before you call.</h2>
          </div>
          <Link href="/work" className="text-sm underline underline-offset-4">
            All projects
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link key={project.slug} href="/work" className="group">
              <span className="relative block aspect-[4/3] overflow-hidden bg-moss">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                />
              </span>
              <span className="mt-2 block text-[0.68rem] uppercase tracking-[0.14em] text-brass">{project.badge}</span>
              <span className="mt-1 block font-serif text-lg leading-snug">{project.title}</span>
              <span className="mt-1 block text-sm leading-5 text-mute">{project.shows[0]}</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="max-w-md text-sm leading-6 text-mute">Addresses were not recorded with most of these photographs. If one is close to the work you need, send the property details.</p>
          <Link href="/contact#estimate" data-cta="portfolio-quote" className="inline-flex h-12 items-center bg-moss px-5 text-sm text-paper">
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-page px-5 py-10 md:py-12">
          <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Services</p>
          <h2 className="mt-2 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Find the work your property needs.</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.slug} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8">
                <div>
                  <h3 className="font-serif text-xl font-medium leading-tight sm:text-2xl">
                    <Link href={`/services/${service.slug}`} className="underline-offset-4 hover:underline">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-brass">{service.who}</p>
                </div>
                <div>
                  <p className="text-sm leading-6 text-mute">{service.summary}</p>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}#estimate`} data-cta="service-quote" className="underline underline-offset-4">
                      Request a Quote
                    </Link>
                    <Link href={`/services/${service.slug}`} className="underline underline-offset-4">
                      What is included
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-10 md:py-12">
        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">How a project moves</p>
        <h2 className="mt-2 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">What happens after you write</h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-8">
          {steps.map(([number, title, copy], index) => (
            <li key={number} className="relative grid grid-cols-[2rem_1fr] gap-x-4 md:block">
              {index < steps.length - 1 ? (
                <span className="absolute left-8 top-4 hidden h-px w-full bg-line md:block" aria-hidden="true" />
              ) : null}
              {index < steps.length - 1 ? (
                <span className="absolute bottom-[-2rem] left-4 top-8 w-px bg-line md:hidden" aria-hidden="true" />
              ) : null}
              <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center border border-moss bg-paper font-serif text-sm">
                {number}
              </span>
              <div>
                <h3 className="font-serif text-xl leading-tight md:mt-3">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-mute">{copy}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link href="/contact#estimate" data-cta="roadmap-quote" className="mt-8 inline-flex h-12 items-center bg-moss px-5 text-sm text-paper">
          Request a Quote
        </Link>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-page px-5 py-10 md:py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Yelp</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                {business.yelpScore} from {business.yelpCount} reviews
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-mute">
                The score is from the Pilot Point Yelp profile, checked again in October 2026. Quotes below are shortened from reviews on that page.
              </p>
            </div>
            <a href={business.yelp} className="text-sm underline underline-offset-4">
              Read the Yelp profile
            </a>
          </div>
          <blockquote className="mt-6 max-w-3xl">
            <p className="font-serif text-2xl leading-snug">“{leadReview.quote}”</p>
            <footer className="mt-3 text-xs uppercase tracking-[0.14em] text-mute">
              {leadReview.name} · {leadReview.detail}
            </footer>
          </blockquote>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reviews.slice(1).map((review) => (
              <blockquote key={review.name} className="border-t border-line pt-4">
                <p className="text-sm leading-6">“{review.quote}”</p>
                <footer className="mt-3 text-xs uppercase tracking-[0.14em] text-mute">
                  {review.name} · {review.detail}
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-mute">
            The same Yelp profile includes a June 2023 review from Jeff R. He says a large project was left unfinished. The lines above are excerpts, not the whole record.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-10 md:py-12">
        <div className="mb-5 max-w-2xl">
          <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Service area</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">Check the area before you enquire.</h2>
          <p className="mt-3 text-sm leading-6 text-mute">
            The yard is at {business.street}, {business.city}. Regular routes named by the company include Frisco, Prosper, and Celina, along with the communities below. If the property is farther out, put the city on the form and the office will say whether it can take the work. Clients elsewhere in Texas are also mentioned on the company site. No second office is shown here.
          </p>
        </div>
        <ServiceMap />
        <ul className="mt-4 grid grid-cols-2 gap-y-1 text-sm sm:grid-cols-4">
          {business.cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
        <Link href="/contact#estimate" data-cta="area-quote" className="mt-5 inline-flex h-12 items-center bg-moss px-5 text-sm text-paper">
          Request a Quote
        </Link>
      </section>

      <section className="bg-moss text-paper">
        <div className="mx-auto flex max-w-page flex-col gap-5 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Send the property details.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-paper/75">The office is open weekdays. A call works if you would rather not fill in the form.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#estimate" data-cta="footer-quote" className="inline-flex h-12 items-center bg-paper px-5 text-sm text-moss">
              Request a Quote
            </Link>
            <a href={business.phoneHref} className="inline-flex h-12 items-center border border-paper/40 px-5 text-sm">
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
