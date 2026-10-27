import Link from "next/link";
import { business } from "@/lib/data";

export const metadata = {
  title: "About",
  description: "Texas Landscape Services is based at 10841 FM 1385 in Pilot Point and works with commercial sites and private estates in North Texas.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-12">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Company</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl sm:leading-none">A Pilot Point crew for commercial grounds and private estates.</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4 text-sm leading-7 text-mute">
          <p>
            If you manage a building, the useful question is whether someone will keep the exterior to a standard you can describe. If you own the home, it is whether the lawn, the beds, and the seasonal color will be looked after without you chasing the next visit.
          </p>
          <p>
            Texas Landscape Services does that work from the yard at {business.street}, {business.city}. The public listing covers maintenance, seasonal planting, renovation, irrigation, and pressure washing.
          </p>
          <p>
            Design for renovations is done in house. Larger design work is coordinated with landscape architects. This is not a standalone architecture practice.
          </p>
          <p>
            Regular routes named by the company include Frisco, Prosper, and Celina, plus nearby North Texas communities. The company site also says it serves clients throughout Texas. Confirm your address when you enquire.
          </p>
          <p>
            <Link href="/contact#estimate" className="text-ink underline underline-offset-4">Request a Quote</Link>
            {" or call "}
            <a className="text-ink underline underline-offset-4" href={business.phoneHref}>{business.phone}</a>.
          </p>
        </div>
        <aside className="border border-line bg-white p-5 text-sm leading-6">
          <p className="text-[0.68rem] uppercase tracking-[0.16em] text-brass">On the record</p>
          <p className="mt-3">{business.street}<br />{business.city}, {business.region} {business.postal}</p>
          <p className="mt-2 text-mute">{business.mail}</p>
          <p className="mt-3"><a className="underline underline-offset-4" href={business.phoneHref}>{business.phone}</a><br /><a className="underline underline-offset-4" href={business.emailHref}>{business.email}</a></p>
          <p className="mt-3 text-mute">{business.hours}</p>
          <p className="mt-4 text-mute">Yelp shows {business.yelpScore} from {business.yelpCount} reviews for this Pilot Point listing. Yelp also marks the profile “Commercial only”; the company’s own site lists residential and estate work as well. License numbers and insurance certificates are not published here.</p>
        </aside>
      </div>
    </main>
  );
}
