import { Float } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

export function HeroModel() {
  const { scene } = useGLTF("/models/HardHat.glb");

  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      {children}
    </span>
  );
}
export function ServiceCard({
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
