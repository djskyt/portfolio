import { useEffect, useState } from "react";
import {
  TickerHeader,
  StatDays,
  TimeBlock,
  Colon,
  ProgressBar,
  two, // utils
  diffSince, // utils
  progressBetween, // utils
} from ".";
import { cn } from "../../utils/cn";
import { TOKENS } from "../theme/token";

export default function SinceTicker({
  since = "2025-05-22",
  end = "2025-11-19",
  className = "",
  autoUpdateMs = 1000,
}: {
  since?: string;
  end?: string;
  className?: string;
  autoUpdateMs?: number;
}) {
  const [_tick, setTick] = useState(0);
  void _tick;

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), autoUpdateMs);
    return () => clearInterval(id);
  }, [autoUpdateMs]);

  const { days, hours, minutes, seconds } = diffSince(since);
  const { pct, remainDays, remainHours, remainMinutes, done } = progressBetween(
    since,
    end
  );

  const aria = `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 경과`;

  return (
    <section
      role="timer"
      aria-live="polite"
      aria-label={aria}
      className={cn("relative w-full rounded-3xl p-5 sm:p-6", className)}
      style={{
        background: TOKENS.colors.panel,
        border: `1px solid ${TOKENS.colors.border}`,
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        color: TOKENS.colors.gold,
      }}
    >
      <div
        className="pointer-events-none absolute -inset-2 -z-10 rounded-4xl blur-2xl"
        style={{
          background: `radial-gradient(60% 60% at 50% 0%, ${TOKENS.colors.goldSoft}, transparent)`,
        }}
      />

      <TickerHeader
        since={since}
        end={end}
        done={done}
        borderColor={TOKENS.colors.border}
      />

      <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 min-[420px]:flex-row">
        <StatDays days={days} glowColor={TOKENS.colors.goldSoft} />

        <div
          className="mx-3 hidden h-8 w-px min-[420px]:block"
          style={{ background: "rgba(255,255,255,0.14)" }}
        />

        <div className="flex items-end gap-1 sm:gap-2">
          <TimeBlock
            label="Hours"
            value={two(hours)}
            color={TOKENS.colors.gold}
            glowColor={TOKENS.colors.goldSoft}
          />
          <Colon />
          <TimeBlock
            label="Minutes"
            value={two(minutes)}
            color={TOKENS.colors.gold}
            glowColor={TOKENS.colors.goldSoft}
          />
          <Colon />
          <TimeBlock
            label="Seconds"
            value={two(seconds)}
            color={TOKENS.colors.gold}
            glowColor={TOKENS.colors.goldSoft}
          />
        </div>
      </div>

      <ProgressBar pct={pct} />

      {!done && (
        <div className="mt-2 text-[12px] sm:text-[13px] text-white/60">
          수료일까지 {remainDays}일 {two(remainHours)}시간 {two(remainMinutes)}
          분 남았어요!
        </div>
      )}
    </section>
  );
}
