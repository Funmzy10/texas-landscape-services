import { business, servicePlaces } from "@/lib/data";

const labelShift = {
  yard: { dx: -10, dy: 4, anchor: "end" },
  celina: { dx: 9, dy: -2, anchor: "start" },
  prosper: { dx: 9, dy: 14, anchor: "start" },
  denton: { dx: 9, dy: 4, anchor: "start" },
  mckinney: { dx: -9, dy: -2, anchor: "end" },
  "little-elm": { dx: 0, dy: 18, anchor: "middle" },
  frisco: { dx: 9, dy: 4, anchor: "start" },
  plano: { dx: 0, dy: -12, anchor: "middle" },
};

function cross(o, a, b) {
  return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

function convexHull(points) {
  const sorted = [...points].sort((a, b) => a.x - b.x || a.y - b.y);
  const lower = [];
  for (const point of sorted) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) lower.pop();
    lower.push(point);
  }
  const upper = [];
  for (let index = sorted.length - 1; index >= 0; index -= 1) {
    const point = sorted[index];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) upper.pop();
    upper.push(point);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

function plotPlaces() {
  const meanLat = servicePlaces.reduce((sum, place) => sum + place.lat, 0) / servicePlaces.length;
  const cos = Math.cos((meanLat * Math.PI) / 180);
  const xs = servicePlaces.map((place) => place.lon * cos);
  const ys = servicePlaces.map((place) => place.lat);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const width = 720;
  const height = 300;
  const padX = 86;
  const padY = 36;
  return servicePlaces.map((place, index) => ({
    ...place,
    x: padX + ((xs[index] - minX) / (maxX - minX)) * (width - padX * 2),
    y: padY + (1 - (ys[index] - minY) / (maxY - minY)) * (height - padY * 2),
  }));
}

export function ServiceMap() {
  const places = plotPlaces();
  const hull = convexHull(places);
  const region = `${hull.map((place) => `${place.x.toFixed(1)},${place.y.toFixed(1)}`).join(" ")}`;

  return (
    <figure className="border border-line bg-white">
      <svg viewBox="0 0 720 300" role="img" aria-labelledby="service-map-title service-map-desc" className="h-auto w-full">
        <title id="service-map-title">Serving North Dallas–Fort Worth</title>
        <desc id="service-map-desc">
          The Pilot Point yard is marked separately from city centers in Frisco, Plano, McKinney, Denton, Prosper, Little Elm, and Celina. Those cities are service areas, not branch offices.
        </desc>
        <rect width="720" height="300" fill="#f7f4ee" />
        <g stroke="#e4ddd1" strokeWidth="1">
          {Array.from({ length: 5 }, (_, index) => (
            <line key={`h-${index}`} x1="24" x2="696" y1={48 + index * 52} y2={48 + index * 52} />
          ))}
          {Array.from({ length: 8 }, (_, index) => (
            <line key={`v-${index}`} y1="20" y2="280" x1={70 + index * 84} x2={70 + index * 84} />
          ))}
        </g>
        <polygon points={region} fill="#1b3126" fillOpacity="0.08" stroke="#1b3126" strokeOpacity="0.35" strokeWidth="1.25" />
        {places.map((place) => {
          const shift = labelShift[place.id];
          const base = place.role === "base";
          return (
            <g key={place.id}>
              {base ? <circle cx={place.x} cy={place.y} r="11" fill="none" stroke="#1b3126" strokeWidth="1" /> : null}
              <circle cx={place.x} cy={place.y} r={base ? 5.5 : 4} fill={base ? "#1b3126" : "#8a6840"} />
              <text
                x={place.x + shift.dx}
                y={place.y + shift.dy}
                textAnchor={shift.anchor}
                className="fill-ink"
                style={{ fontSize: 13, fontFamily: "var(--font-sans), sans-serif" }}
              >
                {base ? "Pilot Point yard" : place.name}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 text-xs leading-5 text-mute">
        <span>Yard pin is 10841 FM 1385. Other pins are city centers, not offices.</span>
        <a href={business.directions} className="text-ink underline underline-offset-4">
          Directions to the yard
        </a>
      </figcaption>
    </figure>
  );
}
