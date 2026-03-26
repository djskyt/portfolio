export function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/3 p-3">
      <p className="text-[11px] uppercase tracking-[.16em] text-white/50">
        {label}
      </p>
      <p className="truncate text-sm text-white/90">{value}</p>
    </div>
  );
}
