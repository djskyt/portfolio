import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type PageProps = PropsWithChildren<{
  maxW?: string;
  className?: string;
}>;

export function Page({
  children,
  maxW = "max-w-5xl",
  className = "",
}: PageProps) {
  return (
    <motion.main
      className={`mx-auto ${maxW} px-6 py-16 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        y: -12,
        transition: { duration: 0.25, ease: "easeIn" },
      }}
    >
      {children}
    </motion.main>
  );
}