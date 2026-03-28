import type { ReactNode } from "react";
import {
  Atom,
  Boxes,
  Braces,
  Palette,
  Workflow,
  GitBranch,
  Database,
  Box,
  Cpu,
  Sparkles,
  ServerCog,
} from "lucide-react";

export type Item = { label: string; icon: ReactNode };

export const frontend: Item[] = [
  { label: "React", icon: <Atom /> },
  { label: "TypeScript", icon: <Braces /> },
  { label: "Tailwind CSS", icon: <Palette /> },
  { label: "Framer Motion / GSAP", icon: <Sparkles /> },
];

export const dataState: Item[] = [
  { label: "TanStack Query", icon: <Boxes /> },
  { label: "Supabase Auth/DB", icon: <Database /> },
  { label: "Context / LocalStorage", icon: <Box /> },
];

export const uiQuality: Item[] = [
  { label: "ag-Grid", icon: <Boxes /> },
  { label: "Form UX", icon: <Workflow /> },
  { label: "접근성 & 사용성 점검", icon: <Sparkles /> },
  { label: "디자인 시스템 적용", icon: <Palette /> },
];

export const tooling: Item[] = [
  { label: "Vite", icon: <Cpu /> },
  { label: "Git & GitHub", icon: <GitBranch /> },
  { label: "CI/CD with Vercel", icon: <ServerCog /> },
];

export const collab: Item[] = [
  { label: "PR 리뷰 & 컨벤션", icon: <GitBranch /> },
  { label: "Notion 문서화", icon: <Boxes /> },
  { label: "Discord 커뮤니케이션", icon: <Box /> },
];
