import Image from "next/image";
import Link from "next/link";
import { ServiceMap } from "@/components/ServiceMap";
import { reviews, business, projects, services } from "@/lib/data";

const featuredSlugs = ["estate-entry", "color-bed", "commercial-turf", "stone-terrace"];

const steps = [
  ["01", "Tell us about your property", "Share the location, the kind of property, the service you need, and any details that matter on the site."],
  ["02", "Review the property", "The office reviews what you sent and decides what further look at the grounds is needed."],
  ["03", "Agree on the scope", "The work, and the pricing that applies, are agreed before the job begins."],
  ["04", "Schedule the work", "Once that is agreed, the work is scheduled. Timing follows the property and the company’s calendar."],
];

export default function HomePage() {
  const featured = featuredSlugs.map((slug) => projects.find((item) => item.slug === slug)).filter(Boolean);
  const leadReview = reviews[0];

  return (
    <main>
      <section className="mx-auto grid max-w-page items-center gap-6 px-5 py-6 sm:py-8 lg:grid-cols-2 lg:gap-10 lg:py-10">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-brass">Pilot Point · North Dallas–Fort Worth</p>
          <h1 className="mt-3 max-w-md font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl">
            Grounds kept to the standard of the property.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-mute">
            Commercial grounds and private estates. Maintenance, seasonal color, renovation, and irrigation from a Pilot Point crew.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact#estimate" className="inline-flex h-12 items-center bg-moss px-5 text-sm text-paper">
              Request a quote
            </Link>
            <Link href="/work" className="inline-flex h-12 items-center border border-ink/20 px-5 text-sm">
              View our work
            </Link>
          </div>
          <p className="mt-5 text-sm text-mute">
            {business.hours}
            {" · "}
            <a className="text-ink underline-offset-4 hover:underline" href={business.phoneHref}>
              {business.phone}
            </a>
          </p>
        </div>
        <div className="relative h-[340px] sm:h-[400px] lg:h-[min(62vh,560px)]">
          <Image
            src="/media/estate-gate.jpg"
            alt="Yellow and cream flowers in a bed in front of a black iron fence and a stone estate entrance."
            fill
            priority
            className="object-cover object-[center_35%]"
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
            <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Properties</span>
            Commercial grounds and private estates
          </p>
          <p>
            <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Also</span>
            Renovation, irrigation, pressure washing
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-10 md:py-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Selected work</p>
            <h2 className="mt-2 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">Estates, color, and commercial turf.</h2>
          </div>
          <Link href="/work" className="text-sm underline-offset-4 hover:underline">
            All projects
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Link
              key={project.slug}
              href="/work"
              className={`group ${index === 0 ? "sm:col-span-2" : ""}`}
            >
              <span
                className={`relative block overflow-hidden bg-moss ${
                  index === 0 ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                />
              </span>
              <span className="mt-2 block text-[0.68rem] uppercase tracking-[0.14em] text-brass">{project.badge}</span>
              <span className="mt-1 block font-serif text-2xl leading-tight">{project.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-page px-5 py-10 md:py-12">
          <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Services</p>
          <h2 className="mt-2 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">A program for the property, not a generic route.</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="grid gap-1 py-3.5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-baseline sm:gap-6">
                  <strong className="font-serif text-xl font-medium sm:text-2xl">{service.title}</strong>
                  <span className="text-sm leading-6 text-mute">{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-10 md:py-12">
        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">How a project moves</p>
        <h2 className="mt-2 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Your Project, From Enquiry to Completion</h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map(([number, title, copy], index) => (
            <li key={number} className="relative grid grid-cols-[2rem_1fr] gap-x-4 md:block">
              {index < steps.length - 1 ? (
                <span className="absolute left-8 top-4 hidden h-px w-[calc(100%-0.75rem)] bg-line md:block" aria-hidden="true" />
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
                Taken from the Pilot Point Yelp profile. One of the five, Jeff R. in June 2023, says a large project was left unfinished.
              </p>
            </div>
            <a href={business.yelp} className="text-sm underline-offset-4 hover:underline">
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
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-10 md:py-12">
        <div className="mb-5 max-w-2xl">
          <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Service area</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">Serving North Dallas–Fort Worth</h2>
          <p className="mt-3 text-sm leading-6 text-mute">
            Based at the Pilot Point yard. Regular routes named on the company site include Frisco, Prosper, Celina, and the surrounding communities below. The company also works with clients elsewhere in Texas. No other office is shown here.
          </p>
        </div>
        <ServiceMap />
        <ul className="mt-4 grid grid-cols-2 gap-y-1 text-sm sm:grid-cols-4">
          {business.cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </section>

      <section className="bg-moss text-paper">
        <div className="mx-auto flex max-w-page flex-col gap-5 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Ready for a look at the property?</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-paper/75">Call the office or send the property details. Each site is reviewed on its own.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact#estimate" className="inline-flex h-12 items-center bg-paper px-5 text-sm text-moss">
              Request a quote
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
