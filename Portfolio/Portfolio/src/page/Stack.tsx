import { motion } from "framer-motion";
import { Page } from "../components/Page";
import { TOKENS } from "../components/theme/token";
import { GoldParticles } from "../components/hero/GoldParticles";
import { ShineText } from "../components/typography/ShineText";
import { Chip } from "../components/stack/Chip";
import { StackSection } from "../components/stack/StackSection";
import { container } from "../components/stack/variants";
import {
  frontend,
  dataState,
  uiQuality,
  tooling,
  collab,
} from "../components/stack/constants";

export default function StackPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: TOKENS.colors.bg }}
    >
      <GoldParticles />

      <Page maxW="max-w-5xl" className="py-24">
        <h1 className="mt-3 mb-10 text-center text-5xl font-bold leading-tight sm:text-6xl select-none">
          <ShineText text="Tech Stack" />
        </h1>

        <p className="text-center text-white/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          문제 해결을 넘어,{" "}
          <strong className="text-white">사용자가 편하게 쓸 수 있는 UI</strong>
          를 만듭니다. <br /> 저는 그 기준으로 기술을 선택해왔습니다.
          <br />
          <span className="mt-2 inline-block text-sm text-white/50">
            <Chip>안정성</Chip> <span className="mx-1">·</span>
            <Chip>가독성</Chip> <span className="mx-1">·</span>
            <Chip>유지보수성</Chip>
          </span>
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <StackSection
            title="Frontend"
            subtitle="컴포넌트 재사용 · 성능, 최적화"
            items={frontend}
            glowOpacity={0.7}
          />
          <StackSection
            title="데이터 상태 관리"
            subtitle="오류 처리"
            items={dataState}
            glowOpacity={0.6}
          />
          <StackSection
            title="UI 품질"
            subtitle="접근성 · 사용성 고려"
            items={uiQuality}
            glowOpacity={0.6}
          />
          <StackSection
            title="개발 환경 및 배포"
            subtitle="자동화 및 브랜치 전략"
            items={tooling}
            glowOpacity={0.6}
          />
          <StackSection
            title="협업 방식"
            subtitle="리뷰 문화 · 문서화 · 커뮤니케이션"
            items={collab}
            glowOpacity={0.6}
          />
        </motion.div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/80 backdrop-blur-sm">
          기술이 있어 좋은 세상, <br />그 중심에는 언제나{" "}
          <strong className="text-white">사람</strong>이 있습니다. <br /> 저는
          그 경험을 더 편하게, 더 따뜻하게 디자인하고 싶습니다.
        </div>
      </Page>
    </div>
  );
}
