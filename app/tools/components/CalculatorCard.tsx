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
    <Link href={href} className="block">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#111827]
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-yellow-400
          hover:shadow-[0_20px_60px_rgba(250,204,21,.18)]
        "
      >
        {/* Glow */}
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* NEW Badge */}
        <div className="absolute right-5 top-5 rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
          NEW
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div
            className="
              mb-6
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-yellow-500/20
              to-yellow-500/5
              text-5xl
              transition-transform
              duration-500
              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white transition group-hover:text-yellow-400">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-4 leading-7 text-gray-400">
            {description}
          </p>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between">
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300">
              Forex Tool
            </span>

            <span
              className="
                flex
                items-center
                gap-2
                font-bold
                text-yellow-400
                transition-all
                group-hover:gap-4
              "
            >
              Open
              <span>→</span>
            </span>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-1
            w-0
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </div>
    </Link>
  );
}