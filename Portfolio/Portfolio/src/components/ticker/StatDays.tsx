import type { HTMLAttributes } from "react";
import { FlipNumber } from "./FlipNumber";

interface StatDaysProps extends HTMLAttributes<HTMLDivElement> {
  days: number;
  glowColor: string;
}

export function StatDays({
  days,
  glowColor,
  className,
  ...rest
}: StatDaysProps) {
  return (
    <div
      className={["flex items-center gap-2 sm:gap-3", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <div className="text-white/90 text-sm sm:text-base">Days</div>
      <div
        className="text-[clamp(28px,8.5vw,56px)] font-semibold tracking-tight"
        style={{ textShadow: `0 0 8px ${glowColor}` }}
      >
        <FlipNumber
          value={String(days)}
          slot={Math.max(2, String(days).length)}
          align="right"
        />
      </div>
    </div>
  );
}
