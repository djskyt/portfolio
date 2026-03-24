import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import { TOKENS } from "./theme/token";

export function Nav() {
  const location = useLocation();

  const base =
    "relative inline-flex h-10 items-center px-6 rounded-lg text-sm font-medium leading-none transition-colors";

  const links = [
    { to: "/", label: "Home" },
    { to: "/stack", label: "Stack" },
    { to: "/timeline", label: "Timeline" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-2xl border px-3 backdrop-blur-xl"
      style={{
        background: "rgba(20,20,20,0.45)",
        borderColor: TOKENS.colors.border,
      }}
    >
      <ul className="relative flex items-center gap-1">
        {links.map((l) => {
          const isActive = location.pathname === l.to;
          return (
            <li key={l.to} className="relative">
              <NavLink
                to={l.to}
                className={`${base} ${
                  isActive ? "text-[#D6A26C]" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}

                {isActive && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute left-0 right-0 -bottom-1 mx-auto h-[3px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #EBC592, #C47A3D, #9C6A32)",
                      boxShadow: "0 0 10px rgba(196,122,61,0.4)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
