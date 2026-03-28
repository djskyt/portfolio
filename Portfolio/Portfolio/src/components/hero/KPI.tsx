import type { HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface KPIProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
  hint?: string;
}

export function KPI({ title, value, hint, className, ...rest }: KPIProps) {
  return (
    <div
      className={cn("rounded-2xl border p-4", className)}
      style={{
        borderColor: "rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.02)",
      }}
      {...rest}
    >
      <div className="text-[11px] uppercase tracking-wider text-white/60">
        {title}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
      {hint ? (
        <div className="mt-0.5 text-[11px] text-white/50">{hint}</div>
      ) : null}
    </div>
  );
}
