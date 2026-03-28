import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const two = (n: number) => String(n).padStart(2, "0");

export function diffSince(startISO: string) {
  const start = dayjs(startISO);
  const now = dayjs();
  const dur = dayjs.duration(now.diff(start));
  const days = Math.floor(dur.asDays());
  const hours = dur.hours();
  const minutes = dur.minutes();
  const seconds = dur.seconds();
  return { days, hours, minutes, seconds };
}

export function progressBetween(startISO: string, endISO: string) {
  const start = dayjs(startISO);
  const end = dayjs(endISO);
  const now = dayjs();

  const total = Math.max(0, end.diff(start));
  if (total === 0) {
    return {
      pct: 100,
      remainDays: 0,
      remainHours: 0,
      remainMinutes: 0,
      done: true,
    } as const;
  }

  const passed = Math.max(0, now.diff(start));
  const pct = Math.min(1, Math.max(0, passed / total)) * 100;

  const remainingMs = Math.max(0, end.diff(now));
  const rem = dayjs.duration(remainingMs);
  const remainDays = Math.floor(rem.asDays());
  const remainHours = rem.hours();
  const remainMinutes = rem.minutes();

  return {
    pct,
    remainDays,
    remainHours,
    remainMinutes,
    done: now.isAfter(end),
  } as const;
}
