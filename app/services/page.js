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
    <main className="mx-auto max-w-page px-5 py-10 md:py-12">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Services</p>
      <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-none sm:text-5xl">Care matched to the property.</h1>
      <div className="mt-8 grid gap-8">
        {services.map((service) => (
          <article key={service.slug} className="grid grid-cols-[7.25rem_1fr] items-start gap-4 border-t border-line pt-5 sm:grid-cols-[11rem_1fr] md:grid-cols-[15rem_1fr] md:items-center md:pt-6">
            <div className="relative aspect-[4/3]">
              <Image src={service.image} alt={service.alt} fill className="object-cover object-center" sizes="(min-width: 768px) 240px, 176px" />
            </div>
            <div>
              <h2 className="font-serif text-xl leading-tight sm:text-2xl md:text-3xl">{service.title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-mute">{service.summary}</p>
              <p className="mt-3 text-sm">
                <span className="text-brass">For </span>
                {service.who}
              </p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-flex h-11 items-center border border-ink/20 px-4 text-sm">
                Service details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
