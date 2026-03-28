import dayjs from "dayjs";
import type { HTMLAttributes } from "react";

interface TickerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  since: string;
  end: string;
  done: boolean;
  borderColor: string;
}

export function TickerHeader({
  since,
  end,
  done,
  borderColor,
  className,
  ...rest
}: TickerHeaderProps) {
  return (
    <div
      className={["mb-3 flex items-center justify-between", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <h3 className="text-xs font-semibold tracking-wider text-white/70">
        SINCE {dayjs(since).format("YYYY.MM.DD")}
      </h3>
      <span
        className="rounded-full px-3 py-1 text-xs font-bold"
        style={{
          background: "rgba(255,255,255,0.06)",
          color: "#fff",
          border: `1px solid ${borderColor}`,
        }}
      >
        {done ? "Completed" : `To ${dayjs(end).format("YYYY.MM.DD")}`}
      </span>
    </div>
  );
}
