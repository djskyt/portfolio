import type { Transition, Variants } from "framer-motion";

export type Step = {
  key: string;
  title: string;
  desc: string;
  start: string;
  end: string;
  badge?: string;
};

// export type Band = {
//   key: string;
//   label: string;
//   start: string;
//   end: string;
//   href?: string;
// };

export type Ease = Transition["ease"];
export type MotionVariants = Variants;

export type TimelineTheme = {
  railBg: string;
  fillGradient: string;
  pointerGradient: string;
  currentUnderline: string;
  dotPast: string;
  dotCurrent: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  bandGlow: string;
};
