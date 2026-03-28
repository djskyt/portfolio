import React from "react";
import { TOKENS } from "../theme/token";

export default function GlassCard({
  children,
  className = "",
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border backdrop-blur-xl shadow-lg ${className}`}
      style={{
        borderColor: TOKENS.colors.border,
        background: TOKENS.colors.panel,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[1.7rem] blur-2xl"
        style={{
          background: `linear-gradient(
            90deg,
            ${TOKENS.colors.goldSoft},
            transparent 60%
          )`,
        }}
      />
      {title && (
        <h3
          className="px-5 pt-5 text-lg md:text-xl font-bold"
          style={{ color: TOKENS.colors.textPrimary }}
        >
          {title}
        </h3>
      )}
      <div className={title ? "px-5 pb-5 pt-3" : "p-5"}>{children}</div>
    </div>
  );
}
