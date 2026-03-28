import { motion } from "framer-motion";
import { TOKENS } from "../theme/token";

const pieces = Array.from({ length: 24 });

export function GoldParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 160;
        const delay = Math.random() * 1.2;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full"
            style={{ background: TOKENS.colors.gold, filter: "blur(0.2px)" }}
            initial={{ x: 0, y: 0, opacity: 0.0, scale: 0.8 }}
            animate={{
              x: x * 8,
              y: y * 6,
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 3.2,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}
