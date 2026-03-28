import { TOKENS } from "../theme/token";
import type { Step, TimelineTheme } from "../../types/timeline";
import TimelineRail from "./TimelineRail";
import TimelineItems from "./TimelineItems";

type Props = {
  steps: Step[];
  className?: string;
  theme?: Partial<TimelineTheme>;
  header?: React.ReactNode;
  bandsPlacement?: "gutter" | "overlay";
};

const GOLD: TimelineTheme = {
  railBg: "rgba(255,255,255,0.10)",
  fillGradient: `linear-gradient(180deg, transparent 0%, ${TOKENS.colors.goldSoft} 40%, ${TOKENS.colors.gold} 100%)`,
  pointerGradient: `radial-gradient(circle, ${TOKENS.colors.gold} 0%, ${TOKENS.colors.goldSoft} 60%, rgba(0,0,0,0) 70%)`,
  currentUnderline: `linear-gradient(90deg, transparent 0%, ${TOKENS.colors.goldSoft} 30%, ${TOKENS.colors.gold} 70%, transparent 100%)`,
  dotPast: "rgba(255,255,255,0.75)",
  dotCurrent: TOKENS.colors.gold,
  badgeBg: TOKENS.colors.goldSoft,
  badgeBorder: TOKENS.colors.gold,
  badgeText: TOKENS.colors.textPrimary,
  bandGlow: TOKENS.colors.goldSoft,
};

export default function BootcampTimeline({
  steps,
  className = "",
  theme,
  header,
}: Props) {
  const T = { ...GOLD, ...theme };
  const firstISO = steps[0].start;
  const lastISO = steps[steps.length - 1].end;

  return (
    <div className={`relative ${className}`}>
      {header ? <div className="mb-3 select-none">{header}</div> : null}

      <TimelineRail firstISO={firstISO} lastISO={lastISO} theme={T} />


      <TimelineItems steps={steps} theme={T} />
    </div>
  );
}
