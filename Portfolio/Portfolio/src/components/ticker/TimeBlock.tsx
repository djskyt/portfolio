import type { HTMLAttributes } from "react";
import { FlipNumber } from "./FlipNumber";

interface TimeBlockProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string; // 2자리
  color: string;
  glowColor: string;
}

export function TimeBlock({
  label,
  value,
  color,
  glowColor,
  className,
  ...rest
}: TimeBlockProps) {
  return (
    <div
      className={["flex flex-col items-center gap-1", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <div
        className="text-[clamp(18px,6.5vw,32px)] font-semibold"
        style={{ color, textShadow: `0 0 8px ${glowColor}` }}
      >
        <FlipNumber value={value} />
      </div>
      <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60">
        {label}
      </div>
    </div>
  );
}
