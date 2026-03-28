import { motion } from "framer-motion";
import {
  containerVariants,
  listVariants,
  fmtRangeKst,
  parseKst,
} from "../../utils/timeline";
import type { Step, TimelineTheme } from "../../types/timeline";

type ItemsProps = {
  steps: Step[];
  theme: TimelineTheme;
};

export default function TimelineItems({ steps, theme }: ItemsProps) {
  const now = new Date();

  return (
    <motion.ol
      className="relative z-10 ps-12 md:ps-14 space-y-2 md:space-y-3"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {steps.map((s) => {
        const sDate = parseKst(s.start);
        const eDate = parseKst(s.end);
        const state = now < sDate ? "future" : now > eDate ? "past" : "current";

        const dotBase =
          "absolute top-2 left-3 -translate-x-1/2 rounded-full transition-all duration-300";
        const dotClass =
          state === "current"
            ? `${dotBase} h-3.5 w-3.5`
            : `${dotBase} h-2.5 w-2.5`;
        const dotStyle =
          state === "current"
            ? {
                background: theme.dotCurrent,
                boxShadow: `0 0 18px ${theme.bandGlow}`,
              }
            : { background: theme.dotPast };

        const titleClass =
          state === "current"
            ? "text-white font-semibold"
            : state === "past"
            ? "text-white/85"
            : "text-white/70";

        const descClass =
          state === "current"
            ? "text-gray-100/95"
            : state === "past"
            ? "text-gray-300/90"
            : "text-gray-300/80";

        return (
          <motion.li
            key={s.key}
            variants={listVariants}
            className="relative group"
          >
            <span
              className={dotClass}
              style={dotStyle as React.CSSProperties}
            />
            <div className="rounded-lg px-8 py-2 transition-colors duration-200 hover:bg-white/5">
              {state === "current" && (
                <motion.div
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full"
                  style={{
                    background: theme.currentUnderline,
                    filter: "blur(0.4px)",
                  }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs md:text-sm text-gray-300/90">
                  {fmtRangeKst(s.start, s.end)}
                </span>
                <span className={`text-sm md:text-base ${titleClass}`}>
                  {s.title}
                </span>
                {s.badge && (
                  <span
                    className="ms-1 rounded-full px-2 py-0.5 text-[10px] font-bold"
                    style={{
                      background: theme.badgeBg,
                      border: `1px solid ${theme.badgeBorder}`,
                      color: theme.badgeText,
                    }}
                  >
                    {s.badge}
                  </span>
                )}
              </div>

              <p className={`mt-1 text-sm ${descClass}`}>{s.desc}</p>
            </div>
          </motion.li>
        );
      })}
    </motion.ol>
  );
}
