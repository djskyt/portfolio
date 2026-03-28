import { GoldParticles } from "./GoldParticles";
import { GoldButton, GhostButton } from "../cta/GoldButton";
import { ShineText } from "../typography/ShineText";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { KPI } from "./KPI";

const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

export function GoldHero() {
  return (
    <section
      className="relative mx-auto mt-8 overflow-hidden w-full rounded-3xl border p-8 sm:p-10"
      style={{
        borderColor: "rgba(255,255,255,0.12)",
        background:
          "radial-gradient(1200px 500px at 10% -10%, rgba(196,122,61,0.1), transparent), " +
          "radial-gradient(1200px 500px at 90% -10%, rgba(196,122,61,0.08), transparent), " +
          "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
      }}
    >
      <GoldParticles />
      <div className="relative z-10 text-white">
        <p className="text-xs font-semibold tracking-wider text-white/70">
          FRONTEND • REACT • TYPESCRIPT • UI/UX
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl select-none">
          HYEON JIN — <ShineText text="Frontend Developer" />
        </h1>
        <p className="mt-3 max-w-2xl text-white/70">
          작접 사용에서 직접 느낀 비효율을, 기술로 해결하고 싶은 마음에서
          시작했습니다.
          <br /> 저는 “사용자 경험이 곧, 바로 제품의 완성도”라고 믿습니다.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <NavLink to="/projects">
            <GoldButton className="cursor-pointer">프로젝트 보기</GoldButton>
          </NavLink>
          <a
            href="https://github.com/djskyt"
            target="_blank"
            rel="noreferrer"
          >
            <GhostButton className="cursor-pointer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </GhostButton>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60 select-none">
          <Badge>React 19 • TypeScript</Badge>
          <Badge>Framer Motion</Badge>
          <Badge>ag-Grid</Badge>
          <Badge>TanStack Query</Badge>
          <Badge>Vite • Vercel</Badge>
        </div>

        <motion.div
          className="mt-8 grid gap-3 sm:grid-cols-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <KPI title="실무형 UI" value="오늘의 조각 & StudyHub Admin" />
          <KPI title="데이터 중심 UX" value="ag-Grid" />
          <KPI title="성능/품질" value="코드 스플리팅 & 타입 안정성" />
        </motion.div>
      </div>
    </section>
  );
}
