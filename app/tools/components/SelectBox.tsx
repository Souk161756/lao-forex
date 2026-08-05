"use client";

type Option =
  | string
  | {
      label: string;
      value: string;
    };

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

export default function SelectBox({
  label,
  value,
  onChange,
  options,
}: Props) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-400">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-[#161d2d] border border-white/10 px-4 py-3 text-white"
      >
        {options.map((item) => {
          if (typeof item === "string") {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          }

          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}