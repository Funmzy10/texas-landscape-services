import Link from "next/link";
import { WorkGallery } from "@/components/WorkGallery";
import { business } from "@/lib/data";

export const metadata = {
  title: "Work",
  description: "Project photographs from Texas Landscape Services: commercial turf, estate grounds, seasonal color, and lawns.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-page overflow-x-clip px-5 py-12 md:py-16">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Portfolio</p>
      <h1 className="mt-3 max-w-2xl font-serif text-5xl leading-[0.95]">The grounds, as photographed.</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-mute">
        Documented on-site across North Texas estates and commercial grounds. Open a photograph, then ask for a quote on similar work.
      </p>
      <div className="mt-10">
        <WorkGallery />
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
        <p className="font-serif text-3xl">Want this standard on your property?</p>
        <Link href="/contact#estimate" className="inline-flex h-12 items-center bg-moss px-5 text-sm text-paper">
          Request a quote
        </Link>
      </div>
      <p className="mt-4 text-sm text-mute">
        Or call <a className="underline underline-offset-4" href={business.phoneHref}>{business.phone}</a>
      </p>
    </main>
  );
}
