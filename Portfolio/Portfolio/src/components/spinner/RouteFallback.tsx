import { GoldSpinner } from "./GoldSpinner";

export function RouteFallback() {
  return (
    <div
      className="grid min-h-[70vh] place-items-center"
      style={{
        background: "#0a0a0a",
      }}
    >
      <div className="relative flex flex-col items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-12 blur-3xl"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 40%, rgba(196,122,61,0.15), transparent)",
          }}
        />
        <GoldSpinner size={100} thickness={3} />
        <div className="mt-3 text-xs tracking-wide text-white/70">
          로딩 중입니다…
        </div>
      </div>
    </div>
  );
}
