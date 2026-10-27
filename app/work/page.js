import { WorkGallery } from "@/components/WorkGallery";
import { Compare } from "@/components/Compare";

export const metadata = {
  title: "Work",
  description: "Project photographs from Texas Landscape Services: commercial turf, estate grounds, seasonal color, and lawns.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-12">
      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Portfolio</p>
      <h1 className="mt-3 max-w-2xl font-serif text-5xl leading-none">The grounds, as photographed.</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-mute">
        Documented on-site across North Texas estates and commercial grounds. Open a photograph for what it actually shows, then ask for a quote on similar work.
      </p>
      <div className="mt-10">
        <WorkGallery />
      </div>
      <div className="mt-16 max-w-4xl">
        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Two finishes</p>
        <h2 className="mt-2 font-serif text-3xl">Drag to compare two real properties.</h2>
        <div className="mt-6">
          <Compare />
        </div>
      </div>
    </main>
  );
}
