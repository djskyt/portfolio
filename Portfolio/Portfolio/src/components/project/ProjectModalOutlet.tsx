import type { ProjectMeta } from "../../data/projects.data";
import { Info } from "./components/Info";
import { Section } from "./components/Section";

export function ProjectModalOutlet({ project }: { project: ProjectMeta }) {
  const responsibilities = project.responsibilities ?? [];
  const achievements = project.achievements ?? [];
  const techStack = project.techStack ?? [];
  const tags = project.tags ?? [];

  return (
    <div className="grid gap-6 p-5 sm:grid-cols-[1fr]">
      {project.thumbnail && (
        <figure className="overflow-hidden rounded-xl border border-white/10">
          <img
            src={project.thumbnail}
            alt=""
            className="h-70 w-full object-cover"
            loading="lazy"
          />
        </figure>
      )}

      <div className="grid gap-3 sm:grid-cols-3">
        <Info label="기간" value={project.period || "-"} />
        <Info label="팀" value={project.team || "개인"} />
        <Info label="역할" value={project.role || "-"} />
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {project.desc && (
        <Section title="프로젝트 소개">
          <p className="text-sm leading-relaxed text-white/80">
            {project.desc}
          </p>
        </Section>
      )}

      {responsibilities.length > 0 && (
        <Section title="주요 책임">
          <ul className="list-disc space-y-1 pl-5 text-sm text-white/80">
            {responsibilities.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </Section>
      )}

      {achievements.length > 0 && (
        <Section title="성과">
          <ul className="list-disc space-y-1 pl-5 text-sm text-white/80">
            {achievements.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </Section>
      )}

      {techStack.length > 0 && (
        <Section title="기술 스택">
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[12px] text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
