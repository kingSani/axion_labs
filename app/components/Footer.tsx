import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
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
  );
}
