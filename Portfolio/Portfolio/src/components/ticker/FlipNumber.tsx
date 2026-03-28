import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const digitVariants = {
  initial: (dir: number) => ({ y: dir > 0 ? 14 : -14, opacity: 0 }),
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 24 },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -14 : 14,
    opacity: 0,
    transition: { duration: 0.16 },
  }),
};

export function FlipNumber({
  value,
  slot = 2,
  align = "center",
}: {
  value: string;
  slot?: number;
  align?: "left" | "center" | "right";
}) {
  const [prev, setPrev] = useState(value);
  const dir = useMemo(() => {
    const a = +value,
      b = +prev;
    return Number.isNaN(a) || Number.isNaN(b)
      ? -1
      : a === b
      ? 0
      : a < b
      ? -1
      : 1;
  }, [value, prev]);

  useEffect(() => setPrev(value), [value]);

  const textAlign =
    align === "right"
      ? "text-right"
      : align === "left"
      ? "text-left"
      : "text-center";

  return (
    <div
      className={`relative overflow-hidden leading-none tabular-nums ${textAlign}`}
      style={{ height: "1.1em", width: `${slot}ch` }}
    >
      <AnimatePresence custom={dir} mode="popLayout" initial={false}>
        <motion.span
          key={value}
          custom={dir}
          variants={digitVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-x-0 top-0"
          style={{ lineHeight: "1.1em" }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <span aria-hidden="true" className="invisible">
        {"8".repeat(slot)}
      </span>
    </div>
  );
}
