import { Page } from "../components/Page";
import { TOKENS } from "../components/theme/token";
import BootcampTimeline from "../components/timeline/BootcampTimeline";
import GlassCard from "../components/timeline/GlassCard";
import { ShineText } from "../components/typography/ShineText";
import { BOOTCAMP_STEPS } from "../data/bootcampTimeline";

export default function BootcampHistoryPage() {
  return (
    <div className="min-h-screen" style={{ background: TOKENS.colors.bg }}>
      <Page maxW="max-w-4xl" className="py-24">
        <h1 className="mb-8 text-center text-5xl font-bold leading-tight sm:text-6xl select-none">
          <ShineText text="Bootcamp Timeline" />
        </h1>

        <GlassCard>
          <BootcampTimeline
            steps={BOOTCAMP_STEPS}
            bandsPlacement="gutter"
          />
        </GlassCard>
      </Page>
    </div>
  );
}
