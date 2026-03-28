import { Page } from "../components/Page";
import { TOKENS } from "../components/theme/token";
import { GoldHero } from "../components/hero/GoldHero";
import SinceTicker from "../components/ticker/SinceTicker";
import { Container } from "../components/layout/Container";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: TOKENS.colors.bg }}>
      <Page>
        <meta
          name="description"
          content="React · TypeScript · UI Engineering"
        />
        <link rel="canonical" href="https://febok.vercel.app/" />
        <Container>
          <GoldHero />

          <div className="mx-auto mt-10 max-w-5xl">
            <SinceTicker since="2025-05-22" />
          </div>
        </Container>
      </Page>
    </div>
  );
}
