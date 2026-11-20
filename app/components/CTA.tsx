import { SectionLabel } from "./LandingComponents";

export default function CTA() {
  return (
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
            Find the right models, get expert design support, and take your next
            engineering project from concept to reality
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
  );
}
