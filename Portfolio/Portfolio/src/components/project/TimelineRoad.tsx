import { useCallback } from "react";

export function TimelineRoad() {
  const items: {
    date: string;
    label: string;
    targetId: string;
    href?: string;
  }[] = [

    {
      date: "2025.10",
      label: "오늘의 조각 (AI Secretary)",
      targetId: "sec- AI Secretary",
      href: "https://wizardofoz-seven.vercel.app",
    },
    {
      date: "2025.10",
      label: "StudyHub Admin (익스텐십)",
      targetId: "sec-admin",
      href: "https://admin.ozcoding.site",
    },
    {
      date: "2025.11",
      label: "StudyHub (소개)",
      targetId: "sec-hub-landing",
      href: "https://ozex3-fe4.vercel.app",
    },
  ];

  const smoothJump = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <aside
      className="sticky top-24 hidden md:block pr-6"
      aria-label="성장 타임라인"
    >
      <h3
        className="text-lg font-bold tracking-tight"
        style={{
          background: "linear-gradient(90deg, #D6A26C, #C47A3D)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      ></h3>

      <div className="relative mt-4 pl-6">
        <div
          className="absolute left-2 top-0 h-full w-[0.5px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(196,122,61,0.6), rgba(196,122,61,0.15))",
          }}
        />
        <ul className="space-y-6">
          {items.map((it) => (
            <li key={it.targetId} className="relative group">
              <span
                className="absolute -left-[7px] top-1 h-3 w-3 rounded-full"
                style={{
                  background: "#C47A3D",
                  boxShadow: "0 0 10px rgba(196,122,61,0.55)",
                }}
              />
              <p className="text-[11px] text-white/60 leading-5 tabular-nums pl-2">
                {it.date}
              </p>
              <button
                onClick={() => smoothJump(it.targetId)}
                className="mt-0.5 block text-left text-sm font-semibold text-white/90 transition hover:text-[#C47A3D]"
                title="섹션으로 이동"
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
