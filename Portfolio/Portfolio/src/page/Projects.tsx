import { Page } from "../components/Page";
import { ProjectCard } from "../components/project/ProjectCard";
import { TOKENS } from "../components/theme/token";
import { TimelineRoad } from "../components/project/TimelineRoad";
import { ShineText } from "../components/typography/ShineText";
import { ProjectModal } from "../components/project/ProjectModal";
import { useMemo, useState } from "react";
import { PROJECTS, type ProjectMeta } from "../data/projects.data";

export default function Projects() {
  const [selected, setSelected] = useState<ProjectMeta | null>(null);
  const open = (p: ProjectMeta) => setSelected(p);
  const close = () => setSelected(null);

  const pickByIds = (ids: string[]) =>
    ids.map((id) => PROJECTS.find((p) => p.id === id)!).filter(Boolean);

  const growth = useMemo(
    () => pickByIds(["github-pages", "calculator", "bok-project", "ozflix"]),
    []
  );

  const featured = useMemo(
    () =>
      pickByIds(["AI Secretary", "studyhub-admin", "studyhub-landing"]),
    []
  );

  return (
    <div className="min-h-screen" style={{ background: TOKENS.colors.bg }}>
      <Page maxW="max-w-[1400px] xl:max-w-[1600px]" className="px-3 sm:px-6">
        <div className="grid items-start gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          <TimelineRoad />
          <div>
            <section className="mt-2" id="sec-growth">
              <h3
                className="text-2xl font-bold tracking-tight select-none"
                style={{
                  background: "linear-gradient(90deg, #D6A26C, #C47A3D)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 0 12px rgba(196, 122, 61, 0.25)",
                }}
              >
                <ShineText text="성장 과정" />
              </h3>
              <p className="mt-1 text-[14px] text-white/60">
                GitHub Page에서 시작해, 개인 비서 웹/어드민, 프로젝트 소개 사이트까지
                확장했습니다.
              </p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 min-[1400px]:grid-cols-2">
                {growth.map((p) => (
                  <ProjectCard
                    key={p.id}
                    title={p.title}
                    subtitle={p.subtitle}
                    tags={p.tags}
                    desc={p.desc}
                    demoHref={p.demoHref}
                    codeHref={p.codeHref}
                    thumbnail={p.thumbnail}
                    onOpen={() => open(p)}
                  />
                ))}
              </div>
            </section>

            <section className="mt-10" id="sec-오늘의 조각">
              <h3
                className="text-2xl font-bold tracking-tight select-none"
                style={{
                  background: "linear-gradient(90deg, #EBC592, #C47A3D)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 0 12px rgba(196, 122, 61, 0.35)",
                }}
              >
                <ShineText text="대표 작업" />
              </h3>
              <p className="mt-1 text-[14px] text-white/60">
                실제 서비스 맥락에서 문제를 해결한 결과물들입니다.
              </p>

              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 min-[1400px]:grid-cols-4">
                {featured.map((p) => (
                  <ProjectCard
                    key={p.id}
                    title={p.title}
                    subtitle={p.subtitle}
                    tags={p.tags}
                    desc={p.desc}
                    demoHref={p.demoHref}
                    codeHref={p.codeHref}
                    thumbnail={p.thumbnail}
                    onOpen={() => open(p)}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </Page>

      {/* 상세 모달 */}
      <ProjectModal open={!!selected} onClose={close} project={selected} />
    </div>
  );
}
