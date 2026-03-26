import { TOKENS } from "../../theme/token";

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h4
        className="mb-2 select-none text-sm font-semibold"
        style={{
          background: `linear-gradient(90deg, #D6A26C, ${TOKENS.colors.gold})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {title}
      </h4>
      {children}
    </section>
  );
}
