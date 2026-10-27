"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { business, estimateServices, propertyTypes } from "@/lib/data";

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

const presetService = {
  "Commercial landscape management": "Full grounds maintenance",
  "Estate and residential grounds": "Full grounds maintenance",
  "Design, build, and renovation": "Landscape renovation",
  "Maintenance programs": "Full grounds maintenance",
  "Irrigation and water management": "Irrigation & water management",
  "Pressure washing": "Pressure washing",
  "Commercial grounds": "Full grounds maintenance",
  "Private estates": "Full grounds maintenance",
  "Turf & lawn care": "Full grounds maintenance",
};

export function Estimator() {
  const params = useSearchParams();
  const preset = params.get("service") || "";
  const matched = presetService[preset] || "";
  const [form, setForm] = useState({
    ...empty,
    services: matched ? [matched] : [],
    notes: preset ? `Asking about: ${preset}` : "",
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const lock = useRef(false);

  function toggleService(name) {
    setForm((current) => ({
      ...current,
      services: current.services.includes(name)
        ? current.services.filter((item) => item !== name)
        : [...current.services, name],
    }));
  }

  async function submit(event) {
    event.preventDefault();
    setError("");
    const missing = [];
    if (!form.name.trim()) missing.push("your name");
    if (!form.place.trim()) missing.push("a city, ZIP, or address");
    if (!form.phone.trim() && !form.email.trim()) missing.push("a phone number or an email");
    if (!form.property) missing.push("the property type");
    if (form.services.length === 0) missing.push("at least one service");
    if (missing.length) {
      setError(`Add ${missing.join(", ")}.`);
      return;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("That email address does not look complete.");
      return;
    }
    if (form.company || lock.current) return;
    lock.current = true;
    setStatus("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@txlandscapeservices.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone || "not provided",
          email: form.email || "not provided",
          property: form.property,
          services: form.services.join(", "),
          place: form.place,
          notes: form.notes,
          _subject: "Estimate request, Texas Landscape Services",
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await response.json().catch(() => ({}));
      const accepted = response.ok && (data.success === true || data.success === "true");
      if (!accepted) {
        lock.current = false;
        setStatus("error");
        const message = String(data.message || "");
        setError(
          message.toLowerCase().includes("activation")
            ? `FormSubmit emailed ${business.email} an activation link. The office has to open that email once before requests are delivered. Until then, call ${business.phone}.`
            : `The note did not send. Call ${business.phone} or email ${business.email}.`,
        );
        return;
      }
      setStatus("sent");
    } catch {
      lock.current = false;
      setStatus("error");
      setError(`The note did not send. Call ${business.phone} or email ${business.email}.`);
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-white p-6">
        <p className="font-serif text-3xl">Request received.</p>
        <p className="mt-3 text-sm leading-6 text-mute">
          FormSubmit accepted this request for {business.email}. If you need a person now, call {business.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-line bg-white p-5 sm:p-7" noValidate data-form="quote">
      <p className="font-serif text-2xl">Tell us about the property.</p>
      <p className="mt-2 text-sm leading-6 text-mute">The office needs this much to start. Nothing else.</p>
      <div className="mt-5 grid gap-3">
        <label className="text-sm">
          Name
          <input required autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="mt-1 h-12 w-full border border-line bg-paper px-3 text-base" />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            Phone
            <input inputMode="tel" autoComplete="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="mt-1 h-12 w-full border border-line bg-paper px-3 text-base" />
          </label>
          <label className="text-sm">
            Email
            <input type="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="mt-1 h-12 w-full border border-line bg-paper px-3 text-base" />
          </label>
        </div>
        <p id="contact-either" className="text-xs leading-5 text-mute">Include a phone number or an email. One is enough.</p>
        <label className="text-sm">
          City, ZIP, or property address
          <input required autoComplete="street-address" value={form.place} onChange={(event) => setForm({ ...form, place: event.target.value })} className="mt-1 h-12 w-full border border-line bg-paper px-3 text-base" />
        </label>
        <label className="text-sm">
          Property type
          <select value={form.property} onChange={(event) => setForm({ ...form, property: event.target.value })} className="mt-1 h-12 w-full border border-line bg-paper px-3 text-base">
            <option value="">Choose one</option>
            {propertyTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <fieldset>
          <legend className="text-sm">Service needed</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {estimateServices.map((item) => {
              const on = form.services.includes(item);
              return (
                <label key={item} className={`flex cursor-pointer items-center gap-2 border px-3 py-3 text-sm ${on ? "border-moss bg-moss text-paper" : "border-line"}`}>
                  <input className="sr-only" type="checkbox" checked={on} onChange={() => toggleService(item)} />
                  {item}
                </label>
              );
            })}
          </div>
        </fieldset>
        <label className="text-sm">
          Project notes <span className="text-mute">(optional)</span>
          <textarea rows={3} value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} className="mt-1 w-full border border-line bg-paper px-3 py-2 text-base" />
        </label>
        <label className="absolute -left-[9999px]" aria-hidden>
          Company
          <input tabIndex={-1} autoComplete="off" value={form.company} onChange={(event) => setForm({ ...form, company: event.target.value })} />
        </label>
      </div>
      {error ? (
        <p role="alert" className="mt-4 text-sm text-red-800">
          {error}
        </p>
      ) : null}
      <button type="submit" data-cta="form-submit" disabled={status === "sending"} className="mt-6 h-12 bg-moss px-5 text-sm text-paper disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request a Quote"}
      </button>
    </form>
  );
}
