type Props = {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
};

export default function ResultCard({
  title,
  value,
  subtitle,
  color = "#22c55e",
}: Props) {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-[#1b2130] p-8">

      <div className="text-gray-400 text-sm uppercase tracking-wider">
        {title}
      </div>

      <div
        className="mt-3 text-5xl font-black"
        style={{ color }}
      >
        {value}
      </div>

      {subtitle && (
        <div className="mt-3 text-gray-400">
          {subtitle}
        </div>
      )}

    </div>
  );
}