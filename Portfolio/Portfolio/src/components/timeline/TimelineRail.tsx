import { motion } from "framer-motion";
import { EASE_IN_OUT, overallPct, parseKst } from "../../utils/timeline";
import type { TimelineTheme } from "../../types/timeline";

type RailProps = {
  firstISO: string;
  lastISO: string;
  theme: TimelineTheme;
};

export default function TimelineRail({ firstISO, lastISO, theme }: RailProps) {
  const now = new Date();
  const first = parseKst(firstISO);
  const last = parseKst(lastISO);
  const linePct = overallPct(now, first, last) * 100;

  return (
    <>
      <div
        className="absolute left-3 top-0 bottom-0 w-1.5 rounded-full"
        style={{ background: theme.railBg }}
      />
      <div
        aria-hidden
        className="absolute left-[9px] top-0 bottom-0 w-24 -z-10"
        style={{
          background: `linear-gradient(90deg, ${theme.badgeBg}, transparent)`,
          filter: "blur(20px)",
          opacity: 0.5,
        }}
      />

      <motion.div
        className="absolute left-3 top-0 w-1.5 origin-top rounded-full"
        style={{
          height: `${linePct}%`,
          background: theme.fillGradient,
          boxShadow: `0 0 18px ${theme.bandGlow}`,
        }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: EASE_IN_OUT }}
      />

      <motion.div
        className="absolute left-3 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ top: `${linePct}%`, background: theme.pointerGradient }}
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: EASE_IN_OUT }}
      />
    </>
  );
}
