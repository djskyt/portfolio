import type { PropsWithChildren } from "react";

export const Chip = ({ children }: PropsWithChildren) => (
  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[12px] text-white/80">
    {children}
  </span>
);
