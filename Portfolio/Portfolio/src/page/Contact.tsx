import { Page } from "../components/Page";
import { TOKENS } from "../components/theme/token";
import { Mail, ExternalLink, Copy } from "lucide-react";
import { ShineText } from "../components/typography/ShineText";
import { GoldParticles } from "../components/hero/GoldParticles";
import { useState } from "react";

const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

function GoldGradientBorder() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(214,162,108,0.16), rgba(196,122,61,0.05))",
        filter: "blur(8px)",
      }}
    />
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "jjsk953563@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // lint fail
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ background: TOKENS.colors.bg }}
    >
      <GoldParticles />
      <Page maxW="max-w-3xl" className="text-center py-24">
        <h1 className="mt-3 text-5xl font-bold leading-tight sm:text-6xl mb-5 select-none">
          <ShineText text="Contact To Me" />
        </h1>
        <p className="text-white/60 text-lg mb-10">
          작은 기회라도, 좋은 인연이라면 언제든 환영합니다.
        </p>

        <div className="mx-auto w-full max-w-md space-y-5">
          <div className="relative">
            <GoldGradientBorder />
            <a
              href={`mailto:${email}`}
              className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-[#D6A26C]/60 hover:shadow-[0_0_22px_rgba(214,162,108,0.25)]"
            >
              <Mail className="h-6 w-6 text-[#D6A26C]" />
              <div className="flex min-w-0 flex-1 flex-col text-left">
                <span className="text-[15px] text-white/90">{email}</span>
                <span className="text-xs text-white/45">
                  가장 빠르게 확인하는 연락 채널입니다!
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  copyEmail();
                }}
                className="group inline-flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-xs text-white/70 hover:text-white/90"
                title="주소 복사"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? "복사됨!" : "복사"}
              </button>
            </a>
          </div>

          <div className="relative">
            <GoldGradientBorder />
            <a
              href="https://github.com/djskyt"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-[#D6A26C]/60 hover:shadow-[0_0_22px_rgba(214,162,108,0.25)]"
            >
              <Github className="h-6 w-6 text-[#D6A26C]" />
              <div className="flex min-w-0 flex-1 flex-col text-left">
                <span className="text-[15px] text-white/90">
                  github.com/djskyt
                </span>
                <span className="text-xs text-white/45">
                  Projects & Code Archive
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-white/40" />
            </a>
          </div>
        </div>
      </Page>
    </div>
  );
}
