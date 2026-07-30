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
      <div className="group rounded-3xl border border-gray-800 bg-[#121826] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10">

        <div className="mb-5 text-5xl">
          {icon}
        </div>

        <h2 className="text-2xl font-bold text-white group-hover:text-yellow-400">
          {title}
        </h2>

        <p className="mt-3 leading-7 text-gray-400">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
            ເຄື່ອງມື
          </span>

          <span className="font-semibold text-yellow-400">
            ເຂົ້າໃຊ້ →
          </span>

        </div>

      </div>
    </Link>
  );
}