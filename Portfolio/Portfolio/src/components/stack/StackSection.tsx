import { motion } from "framer-motion";
import { Row } from "./Row";
import { SECTION_CLASS, GOLD_GLOW_BG } from "./styles";
import { item as itemVariants } from "./variants";
import type { Item } from "./constants";

interface StackSectionProps {
  title: string;
  subtitle: string;
  items: Item[];
  glowOpacity?: number; // 0~1
}

export const StackSection = ({
  title,
  subtitle,
  items,
  glowOpacity = 0.6,
}: StackSectionProps) => (
  <motion.section variants={itemVariants} className={SECTION_CLASS}>
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-10 -z-10 blur-3xl"
      style={{ background: GOLD_GLOW_BG, opacity: glowOpacity }}
    />
    <h3 className="mb-1 text-white font-semibold">{title}</h3>
    <p className="mb-4 text-xs text-white/50">{subtitle}</p>
    <ul className="space-y-2">
      {items.map((it) => (
        <Row key={it.label} item={it} />
      ))}
    </ul>
  </motion.section>
);
