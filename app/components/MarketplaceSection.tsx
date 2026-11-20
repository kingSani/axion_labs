export default function MarketplaceSection() {
  return (
    <section id="models" className="bg-white px-6 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Find the parts to
              <span className="text-orange-500"> build your ideas</span>
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Mechanical parts",
              description:
                "Functional components and custom mechanical designs",
              icon: "⚙",
            },
            {
              title: "Project enclosures",
              description: "Housings and cases for electronics and prototypes",
              icon: "▱",
            },
            {
              title: "Engineering builds",
              description: "Models and components for hands-on projects",
              icon: "⌘",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-100 p-7 transition hover:bg-orange-50 dark:bg-slate-950 dark:hover:bg-slate-900"
            >
              <span className="text-3xl text-orange-500">{item.icon}</span>

              <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <a
                href="#"
                className="mt-7 inline-block text-sm font-semibold text-orange-500"
              >
                Explore category ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
