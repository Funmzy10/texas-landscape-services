"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { filters, projects } from "@/lib/data";

export function WorkGallery() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);
  const shown = filter === "all" ? projects : projects.filter((item) => item.filter === filter);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Project types">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={`shrink-0 border px-4 py-2 text-sm ${
              filter === item.id ? "border-moss bg-moss text-paper" : "border-line bg-paper text-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {shown.map((project, index) => {
          const wide = index % 5 === 0;
          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActive(project)}
              className={`group text-left ${wide ? "lg:col-span-7" : "lg:col-span-5"}`}
            >
              <span className="relative block aspect-[4/5] overflow-hidden bg-moss">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes={wide ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <span className="mt-3 flex items-start justify-between gap-3">
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-brass">{project.badge}</span>
                  <span className="mt-1 block font-serif text-2xl leading-tight">{project.title}</span>
                </span>
                <span className="pt-1 text-xs uppercase tracking-[0.14em] text-mute">View</span>
              </span>
            </button>
          );
        })}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[60] flex justify-end bg-ink/40" onClick={() => setActive(null)}>
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            className="h-full w-full overflow-y-auto bg-paper p-6 shadow-xl sm:max-w-md"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[0.68rem] uppercase tracking-[0.16em] text-brass">{active.badge}</p>
              <button type="button" onClick={() => setActive(null)} className="border border-line p-2" aria-label="Close">
                <X size={16} />
              </button>
            </div>
            <h2 id="project-title" className="mt-4 font-serif text-3xl leading-tight">
              {active.title}
            </h2>
            <div className="relative mt-5 aspect-[4/5]">
              <Image src={active.image} alt={active.alt} fill className="object-cover" sizes="400px" />
            </div>
            <p className="mt-5 text-sm leading-6 text-mute">{active.overview}</p>
            <p className="mt-6 text-[0.68rem] uppercase tracking-[0.16em] text-brass">What the photograph shows</p>
            <ul className="mt-3 space-y-2 text-sm">
              {active.shows.map((item) => (
                <li key={item} className="border-b border-line pb-2">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-mute">
              North Dallas–Fort Worth. A city or client name is shown only when it was recorded with the photograph.
            </p>
            <Link
              href={`/contact?service=${encodeURIComponent(active.badge)}#estimate`}
              className="mt-6 inline-flex h-12 items-center bg-moss px-5 text-sm text-paper"
            >
              Request a quote for similar work
            </Link>
          </aside>
        </div>
      ) : null}
    </>
  );
}
