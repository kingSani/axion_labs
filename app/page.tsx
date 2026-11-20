"use client";

import Image from "next/image";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import Headers from "./components/Headers";

function HeroModel() {
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.25}>
      <group rotation={[0.2, 0.3, 0]}>
        <mesh>
          <torusKnotGeometry args={[0.85, 0.24, 180, 32]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.7}
            roughness={0.22}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.018, 16, 120]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </span>
  );
}

function ServiceCard({
  number,
  title,
  description,
  features,
}: {
  number: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <article className="group flex flex-col rounded-2xl bg-white p-8 transition duration-300 hover:-translate-y-1 dark:bg-slate-900">
      <div className="mb-12 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-400">{number}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-500/10">
          ↗
        </span>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>

      <p className="mb-8 mt-3 leading-7 text-slate-600 dark:text-slate-400">
        {description}
      </p>

      <ul className="mt-auto space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
          >
            <span className="text-orange-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <Headers />

      {/* Hero */}
      <section className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div className="relative z-10">
          <SectionLabel>Engineering, made tangible</SectionLabel>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Ideas into
            <span className="block text-orange-500">things that work</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-400">
            Discover 3D printable models, explore engineering projects, and get
            the design support you need to bring your ideas to life
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#models"
              className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Explore the marketplace ↗
            </a>

            <a
              href="#services"
              className="rounded-full px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:text-orange-500 dark:text-slate-300"
            >
              Our services
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <p className="text-2xl font-semibold">3D</p>
              <p className="mt-1 text-xs text-slate-500">Printable models</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">PCB</p>
              <p className="mt-1 text-xs text-slate-500">Circuit boards</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">CAD</p>
              <p className="mt-1 text-xs text-slate-500">Design support</p>
            </div>
          </div>
        </div>

        {/* Floating 3D model */}
        <div className="relative h-[440px] w-full lg:h-[580px]">
          <div className="pointer-events-none absolute inset-[10%] rounded-full bg-orange-500/10 blur-[100px]" />

          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true }}
          >
            <ambientLight intensity={1.2} />

            <directionalLight position={[4, 5, 3]} intensity={2} />

            <pointLight
              position={[-4, -2, -3]}
              intensity={1.5}
              color="#f97316"
            />

            <Suspense fallback={null}>
              <HeroModel />
            </Suspense>

            <OrbitControls
              enablePan={false}
              enableZoom
              enableRotate
              autoRotate
              autoRotateSpeed={0.7}
              minDistance={3}
              maxDistance={8}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </div>
      </section>

      {/* Marketplace */}
      <section id="models" className="bg-white px-6 py-24 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>The marketplace</SectionLabel>

              <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Find the parts to
                <span className="text-orange-500"> build your ideas</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-slate-600 dark:text-slate-400">
              Explore digital models created for practical engineering projects
              and preview designs in 3D before choosing what to build
            </p>
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
                description:
                  "Housings and cases for electronics and prototypes",
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

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>What we do</SectionLabel>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            More than just
            <span className="text-orange-500"> models</span>
          </h2>

          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
            From circuit concepts to production-ready board layouts, we help
            turn engineering ideas into practical solutions
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

      {/* CTA */}
      <section id="about" className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-white sm:px-14 sm:py-20 dark:bg-slate-800">
          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-[100px]" />

          <div className="relative z-10 max-w-2xl">
            <SectionLabel>Start building</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Have an idea?
              <span className="block text-orange-500">
                Let&apos;s make it real
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-300">
              Find the right models, get expert design support, and take your
              next engineering project from concept to reality
            </p>

            <a
              href="mailto:hello@axionlabs.com"
              className="mt-9 inline-flex rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Get in touch ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <Image
            src="/axion-logo.svg"
            alt="Axion Labs"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />

          <p>© {new Date().getFullYear()} Axion Labs</p>

          <p>Built for curious minds</p>
        </div>
      </footer>
    </main>
  );
}
