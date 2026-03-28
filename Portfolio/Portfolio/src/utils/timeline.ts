import type { Ease, MotionVariants } from "../types/timeline";

export const parseKst = (iso: string) => new Date(iso);
export const clamp = (n: number, a = 0, b = 1) => Math.max(a, Math.min(b, n));
const pad2 = (n: number) => n.toString().padStart(2, "0");

export const fmtRangeKst = (startISO: string, endISO: string) => {
  const s = parseKst(startISO);
  const e = parseKst(endISO);
  const sStr = `${pad2(s.getMonth() + 1)}/${pad2(s.getDate())}`;
  const eStr = `${pad2(e.getMonth() + 1)}/${pad2(e.getDate())}`;
  return sStr === eStr ? sStr : `${sStr}~${eStr}`;
};

export const overallPct = (now: Date, first: Date, last: Date) => {
  const span = last.getTime() - first.getTime();
  if (span <= 0) return 0;
  return clamp((now.getTime() - first.getTime()) / span);
};

export const pctOf = (iso: string, first: Date, last: Date) => {
  const d = parseKst(iso);
  const span = last.getTime() - first.getTime();
  if (span <= 0) return 0;
  return clamp((d.getTime() - first.getTime()) / span) * 100;
};

export const EASE_OUT: Ease = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: Ease = [0.4, 0, 0.2, 1];

export const listVariants: MotionVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE_OUT } },
};

export const containerVariants: MotionVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};
