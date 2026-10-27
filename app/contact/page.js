import { Suspense } from "react";
import { Estimator } from "@/components/Estimator";
import { business } from "@/lib/data";

export const metadata = {
  title: "Request a quote",
  description: "Ask Texas Landscape Services for an estimate. Call +1 (469) 455-9733 or send the property details.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-page gap-10 px-5 py-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-[0.72rem] uppercase tracking-[0.18em] text-brass">Estimate</p>
        <h1 className="mt-3 font-serif text-5xl leading-none">Tell us about the property.</h1>
        <p className="mt-4 text-sm leading-6 text-mute">
          Every property is evaluated individually to ensure an accurate, customized scope. A call is just as direct.
        </p>
        <p className="mt-6 text-sm leading-7">
          <a href={business.phoneHref} className="text-lg underline underline-offset-4">{business.phone}</a><br />
          <a href={business.emailHref} className="underline underline-offset-4">{business.email}</a><br />
          <span className="text-mute">{business.hours}</span>
        </p>
        <p className="mt-4 text-sm text-mute">
          {business.street}, {business.city}, {business.region} {business.postal}
        </p>
      </div>
      <div id="estimate">
        <Suspense fallback={<p className="text-sm text-mute">Loading the form…</p>}>
          <Estimator />
        </Suspense>
      </div>
    </main>
  );
}
