export const siteUrl = "https://texaslandscape.vercel.app";

export const business = {
  name: "Texas Landscape Services",
  tagline: "Commercial Grounds & Private Estate Landscape Management",
  phone: "(469) 455-9733",
  phoneHref: "tel:4694559733",
  email: "info@txlandscapeservices.com",
  emailHref: "mailto:info@txlandscapeservices.com",
  street: "10841 FM 1385",
  city: "Pilot Point",
  region: "TX",
  postal: "76258",
  mail: "PO Box 1266, Celina, TX 75009",
  hours: "Monday–Friday, 8:00 AM – 5:00 PM",
  yelp: "https://www.yelp.com/biz/texas-landscape-services-pilot-point",
  yelpScore: "4.0",
  yelpCount: "5",
  existingSite: "https://txlandscapeservices.com/",
  lat: 33.3576581,
  lon: -96.9021033,
  cities: ["Frisco", "Plano", "McKinney", "Denton", "Prosper", "Little Elm", "Celina"],
};

export const filters = [
  { id: "all", label: "All projects" },
  { id: "commercial", label: "Commercial grounds" },
  { id: "estates", label: "Private estates" },
  { id: "color", label: "Seasonal color & planting" },
  { id: "turf", label: "Turf & lawn care" },
];

export const projects = [
  {
    slug: "sweeping-lawn",
    title: "Sweeping lawn and mixed border",
    filter: "turf",
    badge: "Turf & lawn care",
    image: "/media/lawn-sweep.jpg",
    alt: "A broad green lawn curving beside a dense border of flowering shrubs and mature trees.",
    overview:
      "A wide mowed lawn with a curved border of flowering shrubs and trees. The address and the date of the work were not recorded with this photograph.",
    shows: ["Mowed turf", "Mixed shrub border", "Tree line kept clear of the lawn"],
  },
  {
    slug: "striped-lawn",
    title: "Striped residential lawn",
    filter: "turf",
    badge: "Turf & lawn care",
    image: "/media/lawn-stripes.jpg",
    alt: "A brick house behind a closely mowed lawn with visible mowing stripes and foundation shrubs.",
    overview:
      "Residential turf with a clean stripe pattern, foundation shrubs, and a brick home. No street address was supplied.",
    shows: ["Striped mowing pattern", "Foundation shrubs", "Lawn edge against the house"],
  },
  {
    slug: "estate-entry",
    title: "Estate entry planting",
    filter: "estates",
    badge: "Private estates",
    image: "/media/estate-gate.jpg",
    alt: "Yellow and cream flowers in a bed in front of a black iron fence and a stone estate entrance.",
    overview:
      "Seasonal color at a gated entry, with clipped shrubs behind an iron fence. The property name was not provided.",
    shows: ["Seasonal color at an entry", "Clipped shrubs", "Bed in front of an iron fence"],
  },
  {
    slug: "stone-terrace",
    title: "Stone terrace and daylilies",
    filter: "estates",
    badge: "Private estates",
    image: "/media/stone-terrace.jpg",
    alt: "A stacked-stone retaining wall with yellow daylilies, shrubs, and a stone house above.",
    overview:
      "A stone retaining wall, turf, and a planted slope with daylilies and shrubs. Plant lists beyond what is visible were not documented.",
    shows: ["Stone retaining wall", "Daylilies and shrubs", "Turf at the base of the wall"],
  },
  {
    slug: "outdoor-living",
    title: "Covered outdoor living",
    filter: "estates",
    badge: "Private estates",
    image: "/media/outdoor-living.jpg",
    alt: "A large home with a columned outdoor living area, lawn, and foundation beds at dusk.",
    overview:
      "Lawn and foundation planting beside a covered outdoor room. The photograph does not show who built the house or the hardscape.",
    shows: ["Lawn beside an outdoor room", "Foundation planting", "Evening light on the facade"],
  },
  {
    slug: "color-bed",
    title: "Seasonal color bed",
    filter: "color",
    badge: "Seasonal color & planting",
    image: "/media/color-bed.jpg",
    alt: "A dense planting of lime and burgundy coleus, dark purple foliage, and pink flowers against a building.",
    overview:
      "A high-contrast seasonal bed of coleus, dark foliage, and pink bedding flowers at a building edge.",
    shows: ["Coleus and dark foliage", "Pink bedding flowers", "Planting tight to a wall"],
  },
  {
    slug: "entry-border",
    title: "Front-entry border",
    filter: "color",
    badge: "Seasonal color & planting",
    image: "/media/entry-border.jpg",
    alt: "A mulched flower border with purple, pink, red, and yellow blooms beside a brick entry and stone edging.",
    overview:
      "A residential entry border with mixed flowers, ornamental grass, and a clipped hedge. No client name is attached.",
    shows: ["Mixed perennial border", "Ornamental grass", "Stone edge at a brick entry"],
  },
  {
    slug: "layered-beds",
    title: "Layered perennial beds",
    filter: "color",
    badge: "Seasonal color & planting",
    image: "/media/layered-garden.jpg",
    alt: "Tiered garden beds edged in stone, planted with hostas, shrubs, and dark foliage, with drip lines visible.",
    overview:
      "Tiered beds with stone edging, mixed perennials, and visible drip lines. This is one finished planting, not a before-and-after.",
    shows: ["Tiered stone-edged beds", "Hostas and mixed shrubs", "Drip lines on the soil"],
  },
  {
    slug: "commercial-turf",
    title: "Commercial turf",
    filter: "commercial",
    badge: "Commercial grounds",
    image: "/media/commercial-turf.jpg",
    alt: "A wide mowed lawn in front of a retail center with a brick monument sign.",
    overview:
      "Maintained turf in front of a retail monument sign. Store names on the sign belong to the center, not to this company. The center’s city was not recorded with the photo.",
    shows: ["Open commercial lawn", "Mowing up to a monument sign", "Tree shade on the turf"],
  },
  {
    slug: "foundation-bed",
    title: "Foundation bed and lawn",
    filter: "turf",
    badge: "Turf & lawn care",
    image: "/media/foundation-bed.jpg",
    alt: "A brick house with a gravel and mulch foundation bed, small shrubs, and a green lawn in front.",
    overview:
      "A simple foundation bed of gravel, mulch, and young shrubs in front of mowed turf. Scope and date were not recorded.",
    shows: ["Mowed front lawn", "Mulched foundation bed", "Young shrubs at the wall"],
  },
];

export const services = [
  {
    slug: "commercial",
    title: "Commercial landscape management",
    who: "Property managers, healthcare facilities, building owners, developers, and HOAs.",
    summary:
      "A grounds program written for the site, so the exterior stays consistent for tenants and for the people who own the building.",
    image: "/media/commercial-turf.jpg",
    alt: "Mowed commercial lawn in front of a retail monument sign.",
    includes: [
      "Ongoing commercial maintenance",
      "Planting and plant selection for the site",
      "Irrigation kept as part of the grounds program",
      "Healthcare, office, retail, and association properties",
    ],
  },
  {
    slug: "estates",
    title: "Estate and residential grounds",
    who: "Private homes and estates where the grounds are the first thing a visitor sees.",
    summary:
      "Landscape management for residences and estates: turf, borders, and seasonal color on a program, not a single visit.",
    image: "/media/estate-gate.jpg",
    alt: "Yellow flowers at a gated estate entrance.",
    includes: [
      "Estate grounds management",
      "Residential landscaping and upkeep",
      "Seasonal color and entry borders",
      "Turf on private properties",
    ],
  },
  {
    slug: "design-build",
    title: "Design, build, and renovation",
    who: "Owners who want an updated landscape without throwing out what is already in the ground.",
    summary:
      "Renovation and enhancement designed in house. Full landscape architecture is coordinated with an architect — not offered as a standalone practice.",
    image: "/media/stone-terrace.jpg",
    alt: "Stone retaining wall and planted slope with yellow daylilies.",
    includes: [
      "Landscape renovation and enhancement",
      "In-house design for improvements",
      "Coordination with landscape architects",
      "Materials and plants matched to the site",
    ],
  },
  {
    slug: "maintenance",
    title: "Maintenance programs",
    who: "Commercial sites and residential properties that need a repeating standard.",
    summary:
      "Each property gets a program adjusted to the grounds and the budget. Visit frequency is set in that agreement, not on this page.",
    image: "/media/lawn-stripes.jpg",
    alt: "Closely striped lawn in front of a brick house.",
    includes: [
      "Commercial maintenance",
      "Residential and estate upkeep",
      "Programs written per property",
      "Cleanup as part of grounds care",
    ],
  },
  {
    slug: "water",
    title: "Irrigation and water management",
    who: "Properties where plant health, appearance, and water use all have to be watched.",
    summary:
      "Irrigation managed so the landscape holds its look without treating water as unlimited. Drainage appears on public service listings; it is confirmed per property.",
    image: "/media/layered-garden.jpg",
    alt: "Garden beds with drip irrigation lines across the soil.",
    includes: [
      "Irrigation as part of grounds care",
      "Plant health and water use together",
      "Repair and adjustment discussed per site",
      "Drainage reviewed when the property needs it",
    ],
  },
  {
    slug: "pressure-washing",
    title: "Pressure washing",
    who: "Commercial buildings and homes that need the hard surfaces cleaned without stressing the planting.",
    summary:
      "Surface cleaning for commercial and residential properties. The company says it uses products that will not harm grass, plants, or trees.",
    image: "/media/foundation-bed.jpg",
    alt: "Brick house wall above a foundation bed and lawn.",
    includes: [
      "Buildings, walks, and parking areas",
      "Homes and apartment exteriors",
      "Hotels, restaurants, parks, and fuel stations as publicly listed",
      "Cleaning products described as safe for plants",
    ],
  },
];

export const reviews = [
  {
    quote:
      "Very affordable, timely and did a great job. Will use again without any hesitation. They were prompt. They cleaned up very well and the trees look awesome.",
    name: "Carolyn M.",
    detail: "Yelp · April 2026",
  },
  {
    quote: "Kevin and company did a great job with my flowerbed.",
    name: "Thao N.",
    detail: "Yelp · August 2021",
  },
  {
    quote:
      "My husband and I are extremely pleased with Texas Landscape Services. The staff is amazing, and the landscape is superb.",
    name: "Jessica H.",
    detail: "Yelp · April 2019",
  },
];

export const propertyTypes = [
  "Commercial office",
  "HOA / community",
  "Private estate",
  "Residential",
];

export const estimateServices = [
  "Full grounds maintenance",
  "Irrigation & water management",
  "Landscape renovation",
  "Pressure washing",
];
