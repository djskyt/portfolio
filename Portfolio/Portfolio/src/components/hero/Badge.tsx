import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

interface BadgeProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLSpanElement> {
  rounded?: "full" | "lg";
}

export function Badge({
  children,
  className,
  rounded = "full",
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "border px-2.5 py-1 text-xs select-none",
        rounded === "full" ? "rounded-full" : "rounded-lg",
        className
      )}
      style={{ borderColor: "rgba(255,255,255,0.18)" }}
      {...rest}
    >
      {children}
    </span>
  );
}
