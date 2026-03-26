import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useEffect } from "react";
import type { ProjectMeta } from "../../data/projects.data";
import { ProjectModalHeader } from "./ProjectModalHeader";
import { ProjectModalOutlet } from "./ProjectModalOutlet";
import { ProjectModalFooter } from "./ProjectModalFooter";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  project: ProjectMeta | null;
};

export function ProjectModal({ open, onClose, project }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          aria-modal
          role="dialog"
          aria-label={`${project.title} 상세`}
          className="fixed inset-0 z-70 grid place-items-center px-4"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className={clsx(
              "relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-[rgba(16,16,16,0.96)] shadow-2xl"
            )}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <ProjectModalHeader
              title={project.title}
              subtitle={project.subtitle}
              onClose={onClose}
            />

            <div className="max-h-[70vh] overflow-y-auto scrollbar-hide">
              <ProjectModalOutlet project={project} />
            </div>

            <ProjectModalFooter
              demoHref={project.demoHref}
              codeHref={project.codeHref}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
