import { X, BadgeCheck } from "lucide-react";

interface ModalHeaderProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
}

export function ProjectModalHeader({
  title,
  subtitle,
  onClose,
}: ModalHeaderProps) {
  return (
    <div className="flex items-start gap-4 border-b border-white/10 p-5">
      <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5">
        <BadgeCheck className="h-6 w-6 text-[#D6A26C]" />
      </div>

      <div className="min-w-0">
        <h2 className="truncate text-xl font-semibold text-white">{title}</h2>
        <p className="truncate text-[11px] uppercase tracking-[.18em] text-white/60">
          {subtitle || "PROJECT DETAIL"}
        </p>
      </div>

      <button
        onClick={onClose}
        className="ml-auto rounded-md p-1 text-white/70 hover:bg-white/10"
        aria-label="닫기"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
