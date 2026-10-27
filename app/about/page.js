import { business } from "@/lib/data";

export const metadata = {
  title: "About",
  description: "Texas Landscape Services is based at 10841 FM 1385 in Pilot Point and works across North Dallas–Fort Worth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-12">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Company</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-none">A Pilot Point grounds company for commercial sites and private estates.</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4 text-sm leading-7 text-mute">
          <p>
            Texas Landscape Services manages commercial grounds and private estate landscapes. The public listing covers maintenance, seasonal planting, renovation, irrigation, and pressure washing.
          </p>
          <p>
            Design for renovations and enhancements is done in house. Larger design work is coordinated with landscape architects. This is not a standalone architecture practice.
          </p>
          <p>
            Serving regular maintenance routes across Frisco, Prosper, Celina, and surrounding North DFW communities. The company also says it serves clients throughout Texas.
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
