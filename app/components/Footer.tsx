import Image from "next/image";
import { useSyncExternalStore } from "react";
const subscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;
export default function Footer() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);
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

        <p>© {year} Axion Labs. All rights reserved.</p>

        <p>Built for curious minds</p>
      </div>
    </footer>
  );
}
