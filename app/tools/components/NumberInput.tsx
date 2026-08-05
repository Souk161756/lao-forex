type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  suffix?: string;
  min?: number;
  step?: number;
};

export default function NumberInput({
  label,
  value,
  onChange,
  placeholder = "",
  suffix,
  min = 0,
  step = 0.01,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          placeholder={placeholder}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full rounded-2xl border border-white/10 bg-[#1b2130] px-4 py-3 text-white outline-none transition focus:border-yellow-400"
        />

        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}