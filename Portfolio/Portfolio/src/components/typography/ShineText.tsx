import { motion } from "framer-motion";
import { TOKENS } from "../theme/token";

export function ShineText({ text }: { text: string }) {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "200% 50%" }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: `linear-gradient(90deg, ${TOKENS.colors.gold}, #fff, ${TOKENS.colors.gold})`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        textShadow: `0 0 18px ${TOKENS.colors.goldSoft}`,
      }}
    >
      {text}
    </motion.span>
  );
}
