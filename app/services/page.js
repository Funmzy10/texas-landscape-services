import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services",
  description: "Commercial grounds, estate care, renovation, maintenance, irrigation, and pressure washing from Texas Landscape Services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-12">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Services</p>
      <h1 className="mt-3 max-w-2xl font-serif text-5xl leading-none">Care matched to the property.</h1>
      <div className="mt-10 grid gap-10">
        {services.map((service) => (
          <article key={service.slug} className="grid items-center gap-6 border-t border-line pt-8 md:grid-cols-[280px_1fr]">
            <div className="relative aspect-[4/5]">
              <Image src={service.image} alt={service.alt} fill className="object-cover" sizes="280px" />
            </div>
            <div>
              <h2 className="font-serif text-3xl">{service.title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-mute">{service.summary}</p>
              <p className="mt-3 text-sm"><span className="text-brass">For </span>{service.who}</p>
              <Link href={`/services/${service.slug}`} className="mt-5 inline-flex h-11 items-center border border-ink/20 px-4 text-sm">
                Service details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
