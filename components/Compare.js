"use client";

import { useState } from "react";
import Image from "next/image";

export function Compare() {
  const [value, setValue] = useState(56);

  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden bg-moss sm:aspect-[16/10]">
        <Image
          src="/media/color-bed.jpg"
          alt="A dense seasonal bed of coleus and pink flowers against a building."
          fill
          className="object-cover"
          sizes="(min-width: 768px) 70vw, 100vw"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
          <Image
            src="/media/lawn-stripes.jpg"
            alt="A closely striped residential lawn in front of a brick house."
            fill
            className="object-cover"
            sizes="(min-width: 768px) 70vw, 100vw"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-paper"
          style={{ left: `${value}%` }}
        />
        <input
          type="range"
          min="8"
          max="92"
          value={value}
          aria-label="Compare a striped lawn with a seasonal color bed"
          onChange={(event) => setValue(Number(event.target.value))}
          className="absolute inset-x-6 bottom-5 h-8 w-[calc(100%-3rem)] cursor-ew-resize accent-paper"
        />
      </div>
      <figcaption className="mt-3 flex justify-between gap-4 text-xs uppercase tracking-[0.14em] text-mute">
        <span>Striped lawn</span>
        <span>Seasonal color</span>
      </figcaption>
      <p className="mt-2 max-w-xl text-sm leading-6 text-mute">
        Two finished properties from the project photographs. This is not a before-and-after. No “before” frame was supplied.
      </p>
    </figure>
  );
}
