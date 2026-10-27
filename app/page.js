import Image from "next/image";
import Link from "next/link";
import { reviews, business, projects, services } from "@/lib/data";

const featuredSlugs = ["estate-entry", "color-bed", "commercial-turf", "stone-terrace"];

export default function HomePage() {
  const featured = featuredSlugs.map((slug) => projects.find((item) => item.slug === slug)).filter(Boolean);
  const [lead, ...rest] = featured;
  const leadReview = reviews[0];

  return (
    <main>
      <section className="grid lg:min-h-[calc(100vh-72px)] lg:grid-cols-12">
        <div className="relative order-1 min-h-[58vh] lg:order-2 lg:col-span-7 lg:min-h-full">
          <Image
            src="/media/estate-gate.jpg"
            alt="Yellow and cream flowers in a bed in front of a black iron fence and a stone estate entrance."
            fill
            priority
            className="object-cover object-[center_35%]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
        <div className="order-2 flex flex-col justify-end bg-moss px-5 py-10 text-paper lg:order-1 lg:col-span-5 lg:px-10 lg:py-16">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#d7c4a4]">Pilot Point · North Dallas–Fort Worth</p>
          <h1 className="mt-4 max-w-md font-serif text-[2.7rem] leading-[0.95] tracking-tight sm:text-6xl">
            Grounds kept to the standard of the property.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-paper/80">
            Commercial grounds and private estates. Maintenance, seasonal color, renovation, and irrigation from a Pilot Point crew.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#estimate" className="inline-flex h-12 items-center bg-paper px-5 text-sm text-moss">
              Request a quote
            </Link>
            <Link href="/work" className="inline-flex h-12 items-center border border-paper/40 px-5 text-sm text-paper">
              View our work
            </Link>
          </div>
          <p className="mt-6 text-sm text-paper/70">
            {business.hours} · <a className="text-paper underline-offset-4 hover:underline" href={business.phoneHref}>{business.phone}</a>
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-page gap-6 px-5 py-8 sm:grid-cols-3">
          <p><span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Yard</span>{business.street}, {business.city}</p>
          <p><span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Properties</span>Commercial grounds and private estates</p>
          <p><span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">Also</span>Renovation, irrigation, pressure washing</p>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-4 px-5 pt-14 md:mx-auto md:max-w-page md:pt-20">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Selected work</p>
            <h2 className="mt-2 max-w-xl font-serif text-4xl leading-tight">Estates, color, and commercial turf.</h2>
          </div>
          <Link href="/work" className="text-sm underline-offset-4 hover:underline">All projects</Link>
        </div>
        <Link href="/work" className="group relative mt-6 block min-h-[78vh]">
          <Image src={lead.image} alt={lead.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" sizes="100vw" />
          <span className="absolute bottom-0 left-0 max-w-md bg-paper px-5 py-4">
            <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">{lead.badge}</span>
            <span className="mt-1 block font-serif text-3xl leading-tight">{lead.title}</span>
          </span>
        </Link>
        <div className="grid md:grid-cols-3">
          {rest.map((project) => (
            <Link key={project.slug} href="/work" className="group relative block aspect-[3/4] min-h-[70vw] md:min-h-[46vw]">
              <Image src={project.image} alt={project.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width: 768px) 33vw, 100vw" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4 text-paper">
                <span className="block text-[0.68rem] uppercase tracking-[0.14em] text-paper/80">{project.badge}</span>
                <span className="mt-1 block font-serif text-2xl leading-tight">{project.title}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-page gap-10 px-5 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:py-20">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Services</p>
            <h2 className="mt-2 font-serif text-4xl leading-tight">A program for the property, not a generic route.</h2>
            <div className="relative mt-6 aspect-[4/5] max-h-[520px]">
              <Image src="/media/commercial-turf.jpg" alt="A wide mowed lawn in front of a retail center with a brick monument sign." fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="grid gap-1 py-4 sm:grid-cols-[1fr_1.1fr] sm:items-baseline sm:gap-6">
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
        <h2 className="mt-2 max-w-xl font-serif text-4xl leading-tight">Tell us the property. We’ll look at the grounds.</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            ["Tell us the property", "City or ZIP, whether it is commercial or a home, and what needs attention."],
            ["The grounds get reviewed", "Every property is evaluated on its own so the scope matches the site."],
            ["You get a clear scope", "Work starts from an agreed program. Call if you would rather talk it through."],
          ].map(([title, copy], index) => (
            <li key={title} className="border-t border-ink pt-4">
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
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Yelp</p>
              <h2 className="mt-2 font-serif text-4xl">{business.yelpScore} from {business.yelpCount} reviews</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-mute">Taken from the Pilot Point Yelp profile. One of the five, Jeff R. in June 2023, says a large project was left unfinished.</p>
            </div>
            <a href={business.yelp} className="text-sm underline-offset-4 hover:underline">Read the Yelp profile</a>
          </div>
          <blockquote className="mt-8 max-w-3xl">
            <p className="font-serif text-3xl leading-snug">“{leadReview.quote}”</p>
            <footer className="mt-4 text-xs uppercase tracking-[0.14em] text-mute">{leadReview.name} · {leadReview.detail}</footer>
          </blockquote>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {reviews.slice(1).map((review) => (
              <blockquote key={review.name} className="border-t border-line pt-4">
                <p className="text-sm leading-6">“{review.quote}”</p>
                <footer className="mt-3 text-xs uppercase tracking-[0.14em] text-mute">{review.name} · {review.detail}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-moss text-paper">
        <div className="mx-auto grid max-w-page gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-paper/60">Service area</p>
            <h2 className="mt-2 font-serif text-4xl leading-tight">North Dallas–Fort Worth, from Pilot Point.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-paper/75">
              Regular routes through Frisco, Prosper, Celina, and the surrounding communities. The company also works with clients elsewhere in Texas.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-1 text-lg sm:grid-cols-3">
              {business.cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-serif text-3xl leading-tight">Ready for a look at the property?</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact#estimate" className="inline-flex h-12 items-center bg-paper px-5 text-sm text-moss">Request a quote</Link>
              <a href={business.phoneHref} className="inline-flex h-12 items-center border border-paper/40 px-5 text-sm">Call {business.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
