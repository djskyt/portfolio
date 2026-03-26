import { Link2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

interface FooterProps {
  demoHref?: string;
  codeHref?: string;
}

export function ProjectModalFooter({ demoHref, codeHref }: FooterProps) {
  if (!demoHref && !codeHref) return null;

  return (
    <div className="flex flex-wrap gap-3 border-t border-white/10 bg-white/2 px-5 py-4">
      {demoHref && (
        <a
          href={demoHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/90 hover:border-[#D6A26C]/50 hover:bg-[#D6A26C]/10"
        >
          <Link2 className="h-4 w-4" />
          Live
        </a>
      )}

      {codeHref && (
        <a
          href={codeHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm font-semibold text-[#D6A26C] hover:border-[#D6A26C]/50 hover:bg-white/5"
        >
          <GithubIcon className="h-4 w-4 text-[#D6A26C]" />
          GitHub
        </a>
      )}
    </div>
  );
}
