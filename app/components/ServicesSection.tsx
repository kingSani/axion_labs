import { ServiceCard } from "./LandingComponents";

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          More than just
          <span className="text-orange-500"> models</span>
        </h2>

        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
          From circuit concepts to production-ready board layouts, we help turn
          engineering ideas into practical solutions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ServiceCard
          number="01 / PCB DESIGN"
          title="PCB Design Services"
          description="Get custom printed circuit board designs built around your project's requirements"
          features={[
            "Schematic capture",
            "PCB layout and routing",
            "Design review and documentation",
          ]}
        />

        <ServiceCard
          number="02 / CIRCUIT DESIGN"
          title="Circuit Design Services"
          description="Get help designing and developing electronic circuits for prototypes and engineering projects"
          features={[
            "Circuit architecture",
            "Component selection",
            "Simulation and testing support",
          ]}
        />
      </div>
    </section>
  );
}
