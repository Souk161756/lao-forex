import Link from "next/link";

type CalculatorCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function CalculatorCard({
  title,
  description,
  href,
  icon,
}: CalculatorCardProps) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_20px_50px_rgba(250,204,21,.15)]">

        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="relative z-10">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-4xl">
            {icon}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            {description}
          </p>

          <div className="mt-6 flex items-center justify-between">

            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">
              Forex Tool
            </span>

            <span className="text-yellow-400 font-semibold">
              Open →
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}