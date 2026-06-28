import {
  Home,
  PaintRoller,
  Paintbrush,
  Layers,
  ChefHat,
  Bath,
  Trees,
  Hammer,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  items: string[];
  wide?: boolean;
};

const services: Service[] = [
  {
    icon: Home,
    title: "Roofing",
    items: [
      "Roof Installation",
      "Roof Replacement",
      "Roof Repair",
      "Shingle • Metal • Flat Roofs",
      "Gutter Installation & Repair",
      "Soffit & Fascia",
    ],
  },
  {
    icon: PaintRoller,
    title: "Exterior Services",
    items: [
      "Siding (Vinyl, Wood, Fiber Cement)",
      "Exterior Painting",
      "Trim & Molding",
      "Decks & Patios",
      "Power Washing",
      "Window & Door Replacement",
    ],
  },
  {
    icon: Paintbrush,
    title: "Interior Services",
    items: [
      "Interior Painting",
      "Drywall Installation & Repair",
      "Trim & Baseboards",
      "Crown Molding",
      "Door Installation",
      "Window Installation",
    ],
  },
  {
    icon: Layers,
    title: "Flooring",
    items: [
      "Hardwood Flooring",
      "Laminate Flooring",
      "Vinyl Plank Flooring",
      "Tile Flooring",
      "Carpet Installation",
    ],
  },
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    items: [
      "Cabinet Installation",
      "Countertops (Granite, Quartz, etc.)",
      "Backsplash Installation",
      "Sink & Faucet Installation",
      "Kitchen Layout & Renovation",
    ],
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    items: [
      "Shower & Tub Installation",
      "Tile Work",
      "Vanity & Sink Installation",
      "Plumbing Fixtures",
      "Full Bathroom Renovations",
    ],
  },
  {
    icon: Trees,
    title: "Outdoor Services",
    items: [
      "Concrete Driveways",
      "Sidewalks & Walkways",
      "Patios & Outdoor Living Spaces",
      "Concrete Steps",
      "Retaining Walls",
      "Fence Installation & Repair",
    ],
  },
  {
    icon: Hammer,
    title: "Handyman Services",
    wide: true,
    items: [
      "TV Mounting",
      "Light Fixture Installation",
      "Ceiling Fans",
      "Shelving & Storage Solutions",
      "Door & Window Repair",
      "Furniture Assembly",
      "Grab Bar Installation",
      "Caulking & Sealing",
      "Weatherproofing",
      "And Much More!",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-brand">
            One Call. We Do It All.
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-charcoal sm:text-4xl md:text-5xl">
            Complete Renovation &amp; Handyman Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, items, wide }) => {
            return (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${
                  wide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* faint ghosted category icon */}
                <Icon
                  className="pointer-events-none absolute -right-4 -top-3 h-28 w-28 text-charcoal/[0.04]"
                  strokeWidth={1}
                  aria-hidden
                />

                <div className="relative flex items-center gap-3 border-b border-charcoal/10 pb-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-charcoal">
                    {title}
                  </h3>
                </div>

                <ul
                  className={`relative mt-4 grid grid-cols-2 gap-x-5 gap-y-2.5 ${
                    wide ? "lg:grid-cols-3" : "lg:grid-cols-1"
                  }`}
                >
                  {items.map((item) =>
                    item === "And Much More!" ? (
                      <li
                        key={item}
                        className="col-span-2 text-[15px] font-bold italic text-brand lg:col-span-3"
                      >
                        {item}
                      </li>
                    ) : (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[15px] text-charcoal/75"
                      >
                        <CircleCheck
                          className="mt-0.5 h-4 w-4 flex-none text-brand"
                          strokeWidth={2.25}
                        />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
