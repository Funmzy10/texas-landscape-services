"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { filters, projects } from "@/lib/data";

export function WorkGallery() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const shown = filter === "all" ? projects : projects.filter((item) => item.filter === filter);

  useEffect(() => {
    if (!active) return undefined;
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <div className="flex w-full max-w-full gap-2 overflow-x-auto pb-2" role="group" aria-label="Project types">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={`shrink-0 border px-4 py-2 text-sm ${
              filter === item.id ? "border-moss bg-moss text-paper" : "border-line bg-paper text-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project) => (
          <button key={project.slug} type="button" onClick={() => setActive(project)} className="group text-left">
            <span className="relative block aspect-[4/3] overflow-hidden bg-moss">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
              />
            </span>
            <span className="mt-3 block text-[0.68rem] uppercase tracking-[0.16em] text-brass">{project.badge}</span>
            <span className="mt-2 block font-serif text-xl leading-snug">{project.title}</span>
          </button>
        ))}
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
              <button ref={closeRef} type="button" onClick={() => setActive(null)} className="border border-line p-2" aria-label="Close project details">
                <X size={16} />
              </button>
            </div>
            <h2 id="project-title" className="mt-4 font-serif text-3xl leading-tight">
              {active.title}
            </h2>
            <div className="relative mt-5 aspect-[4/3]">
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
              North Texas. A city or client name is shown only when it was recorded with the photograph.
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
