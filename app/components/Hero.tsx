import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SectionLabel, HeroModel } from "./LandingComponents";
import React from "react";

export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-170 max-w-7xl items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:py-20">
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
      <div className="relative h-110 w-full lg:h-145">
        <div className="pointer-events-none absolute inset-[10%] rounded-full bg-orange-500/10 blur-[100px]" />

        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={1.2} />

          <directionalLight position={[4, 5, 3]} intensity={2} />

          <pointLight position={[-4, -2, -3]} intensity={1.5} color="#f97316" />

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
  );
}
