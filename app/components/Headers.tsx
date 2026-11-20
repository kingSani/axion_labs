import Image from "next/image";

export default function Headers() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" aria-label="Axion Labs home">
          <Image
            src="/axion-logo.svg"
            alt="Axion Labs"
            width={48}
            height={48}
            priority
            className="h-11 w-11 object-contain"
          />
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-slate-600 md:flex dark:text-slate-400">
          <a href="#models" className="transition hover:text-orange-500">
            3D Models
          </a>
          <a href="#services" className="transition hover:text-orange-500">
            Services
          </a>
          <a href="#about" className="transition hover:text-orange-500">
            About
          </a>
        </div>

        <a
          href="#models"
          className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Explore models ↗
        </a>
      </nav>
    </header>
  );
}
