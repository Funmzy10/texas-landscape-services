"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { estimateServices, propertyTypes } from "@/lib/data";

const empty = {
  property: "",
  services: [],
  name: "",
  phone: "",
  email: "",
  place: "",
  notes: "",
  company: "",
};

export function Estimator() {
  const params = useSearchParams();
  const preset = params.get("service") || "";
  const [step, setStep] = useState(preset ? 2 : 0);
  const [form, setForm] = useState({ ...empty, notes: preset ? `Interested in similar work: ${preset}` : "" });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  const progress = useMemo(() => ["Property", "Services", "Details"][step], [step]);

  function toggleService(name) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(name)
        ? current.services.filter((item) => item !== name)
        : [...current.services, name],
    }));
  }

  function nextFrom(index) {
    setError("");
    if (index === 0 && !form.property) {
      setError("Choose the kind of property.");
      return;
    }
    if (index === 1 && form.services.length === 0) {
      setError("Choose at least one service.");
      return;
    }
    setStep(index + 1);
  }

  async function submit(event) {
    event.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim() || !form.place.trim()) {
      setError("Name, phone, and city or address are required.");
      return;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("That email address does not look complete.");
      return;
    }
    if (form.company) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          property: form.property,
          services: form.services.join(", "),
          place: form.place,
          notes: form.notes,
          company: form.company,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        setStatus("error");
        setError("The note did not send. Call (469) 455-9733 or email info@txlandscapeservices.com.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("The note did not send. Call (469) 455-9733 or email info@txlandscapeservices.com.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-white p-6">
        <p className="font-serif text-3xl">Request received.</p>
        <p className="mt-3 text-sm leading-6 text-mute">
          The office inbox at info@txlandscapeservices.com has the details. The first time this form is used, FormSubmit
          asks that inbox to confirm delivery. If you need a person now, call (469) 455-9733.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-line bg-white p-5 sm:p-7" noValidate>
      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-brass">
        Step {step + 1} of 3 · {progress}
      </p>
      {step === 0 ? (
        <fieldset className="mt-5">
          <legend className="font-serif text-2xl">What kind of property?</legend>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {propertyTypes.map((item) => (
              <label key={item} className={`cursor-pointer border px-4 py-3 text-sm ${form.property === item ? "border-moss bg-moss text-paper" : "border-line"}`}>
                <input
                  className="sr-only"
                  type="radio"
                  name="property"
                  checked={form.property === item}
                  onChange={() => setForm({ ...form, property: item })}
                />
                {item}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}
      {step === 1 ? (
        <fieldset className="mt-5">
          <legend className="font-serif text-2xl">What do you need?</legend>
          <div className="mt-4 grid gap-2">
            {estimateServices.map((item) => {
              const on = form.services.includes(item);
              return (
                <label key={item} className={`cursor-pointer border px-4 py-3 text-sm ${on ? "border-moss bg-moss text-paper" : "border-line"}`}>
                  <input className="sr-only" type="checkbox" checked={on} onChange={() => toggleService(item)} />
                  {item}
                </label>
              );
            })}
          </div>
        </fieldset>
      ) : null}
      {step === 2 ? (
        <div className="mt-5 grid gap-3">
          <p className="font-serif text-2xl">How should the office reach you?</p>
          <label className="text-sm">
            Name
            <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-1 h-11 w-full border border-line bg-paper px-3" />
          </label>
          <label className="text-sm">
            Phone
            <input required inputMode="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="mt-1 h-11 w-full border border-line bg-paper px-3" />
          </label>
          <label className="text-sm">
            Email <span className="text-mute">(optional)</span>
            <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-1 h-11 w-full border border-line bg-paper px-3" />
          </label>
          <label className="text-sm">
            City, ZIP, or property address
            <input required value={form.place} onChange={(event) => setForm({ ...form, place: event.target.value })} className="mt-1 h-11 w-full border border-line bg-paper px-3" />
          </label>
          <label className="text-sm">
            Project notes <span className="text-mute">(optional)</span>
            <textarea rows={4} value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} className="mt-1 w-full border border-line bg-paper px-3 py-2" />
          </label>
          <label className="absolute -left-[9999px]" aria-hidden>
            Company
            <input tabIndex={-1} autoComplete="off" value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} />
          </label>
        </div>
      ) : null}
      {error ? <p className="mt-4 text-sm text-red-800">{error}</p> : null}
      <div className="mt-6 flex gap-3">
        {step > 0 ? (
          <button type="button" onClick={() => setStep(step - 1)} className="h-12 border border-ink/20 px-5 text-sm">
            Back
          </button>
        ) : null}
        {step < 2 ? (
          <button type="button" onClick={() => nextFrom(step)} className="h-12 bg-moss px-5 text-sm text-paper">
            Continue
          </button>
        ) : (
          <button type="submit" disabled={status === "sending"} className="h-12 bg-moss px-5 text-sm text-paper disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send the request"}
          </button>
        )}
      </div>
    </form>
  );
}
