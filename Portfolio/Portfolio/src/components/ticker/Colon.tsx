import type { HTMLAttributes } from "react";

export function Colon({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={["select-none px-1 text-white/60 sm:px-2", className]
        .filter(Boolean)
        .join(" ")}
      style={{ width: "1ch", textAlign: "center" }}
      {...rest}
    >
      :
    </div>
  );
}
