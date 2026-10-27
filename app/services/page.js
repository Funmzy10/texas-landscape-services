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
          <article key={service.slug} className="grid grid-cols-[7.25rem_minmax(0,1fr)] items-start gap-4 border-t border-line pt-5 sm:grid-cols-[11rem_minmax(0,1fr)] md:grid-cols-[15rem_minmax(0,1fr)] md:items-center md:pt-6">
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
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Link href={`/contact?service=${encodeURIComponent(service.title)}#estimate`} data-cta="services-quote" className="inline-flex h-11 w-full items-center justify-center bg-moss px-4 text-sm text-paper sm:w-auto">
                  Request a Quote
                </Link>
                <Link href={`/services/${service.slug}`} className="inline-flex h-11 w-full items-center justify-center border border-ink/20 px-4 text-sm sm:w-auto">
                  What is included
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
