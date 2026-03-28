import type { Item } from "./constants";

export const Row = ({ item }: { item: Item }) => (
  <li className="flex items-center gap-3">
    <span
      className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/10 text-white/90"
      style={{ boxShadow: "0 0 12px rgba(196,122,61,0.18)" }}
    >
      <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-[#D6A26C]">
        {item.icon}
      </span>
    </span>
    <span className="text-sm text-white/80">{item.label}</span>
  </li>
);
