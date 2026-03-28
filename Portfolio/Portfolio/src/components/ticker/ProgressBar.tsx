import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  pct: number; // 0부터 100까지
  labelLeft?: string;
  labelRight?: string;
  barBg?: string;
  barFill?: string;
  depth?: boolean;
}

export function ProgressBar({
  pct,
  labelLeft = "진행률",
  labelRight,
  barBg = "rgba(255,255,255,0.1)",
  barFill,
  depth = true,
  className,
  ...rest
}: ProgressBarProps) {
  const depthGradient =
    "linear-gradient(90deg, rgba(214,162,108,0.35) 0%, rgba(214,162,108,0.6) 60%, rgba(214,162,108,0.95) 100%)";

  return (
    <div className={cn("mt-5", className)} {...rest}>
      <div className="mb-1 flex items-center justify-between text-[12px] sm:text-[14px] text-white/70">
        <span>{labelLeft}</span>
        <span>{labelRight ?? `${pct.toFixed(0)}%`}</span>
      </div>
      <div
        className="relative h-2 w-full overflow-hidden rounded-full"
        style={{ background: barBg }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          style={{
            background: depth ? depthGradient : barFill ?? depthGradient,
          }}
        />
        <div
          className="absolute inset-y-0 left-0 w-full"
          style={{
            background: "rgba(255,255,255,0.08)",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
}
