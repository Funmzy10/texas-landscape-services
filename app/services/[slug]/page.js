import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <main>
      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[320px]">
          <Image src={service.image} alt={service.alt} fill priority className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="flex flex-col justify-center px-5 py-12 md:px-12">
          <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Service</p>
          <h1 className="mt-3 font-serif text-5xl leading-none">{service.title}</h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-mute">{service.summary}</p>
          <p className="mt-4 text-sm"><span className="text-brass">Suitable for </span>{service.who}</p>
          <Link href={`/contact?service=${encodeURIComponent(service.title)}#estimate`} className="mt-8 inline-flex h-12 w-fit items-center bg-moss px-5 text-sm text-paper">
            Request a quote
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-page px-5 py-14">
        <h2 className="font-serif text-3xl">What it covers</h2>
        <ul className="mt-6 max-w-xl divide-y divide-line border-y border-line">
          {service.includes.map((item) => (
            <li key={item} className="py-3 text-sm">{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
