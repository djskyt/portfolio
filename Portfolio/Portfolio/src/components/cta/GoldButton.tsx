import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import { TOKENS } from "../theme/token";

type MotionButtonProps = ComponentProps<typeof motion.button>;

export function GoldButton({
  children,
  className = "",
  ...rest
}: MotionButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={
        "relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold" +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-black " +
        className
      }
      style={{
        color: "#111",
        background: `linear-gradient(180deg, #f7d7a0, ${TOKENS.colors.gold})`,
        boxShadow:
          "0 6px 20px rgba(196,122,61,0.35), inset 0 1px 0 rgba(255,255,255,0.4)",
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export function GhostButton({
  children,
  className = "",
  ...rest
}: MotionButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={
        "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold" +
        "text-white/90 hover:bg-white/5 " +
        className
      }
      style={{ borderColor: "rgba(255,255,255,0.2)" }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
