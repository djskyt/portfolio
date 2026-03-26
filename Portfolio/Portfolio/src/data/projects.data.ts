export type ProjectMeta = {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  desc?: string;
  demoHref?: string;
  codeHref?: string;
  thumbnail?: string;
  period?: string;
  team?: string;
  role?: string;
  responsibilities?: string[];
  achievements?: string[];
  techStack?: string[];
};

export const PROJECTS: ProjectMeta[] = [
  {
    id: "AI Secretary",
    title: "오늘의 조각 (AI Secretary)",
    subtitle: "메인 프로젝트 소개 사이트",
    tags: ["Vercel", "팀 소개", "디자인 시스템"],
    desc: "팀 브랜드 및 프로젝트 정체성을 표현하기 위한 소개 랜딩 제작.",
    codeHref: "https://github.com/oz-union-fe-12-team1/oz-union-fe-12-team1",
    thumbnail: "images/Ai비서.JPG",
    period: "2025.10",
    team: "7인 팀 (FE 5명, BE 2명)",
    role: "기획 및 퍼블리싱",
    responsibilities: [
      "디자인 시스템 확립 및 팀 브랜딩 컬러 구성",
      "메인 랜딩 페이지 및 멤버 소개 영역 개발",
    ],
    achievements: ["공식 랜딩 페이지로 데모데이 공개 운영"],
    techStack: ["React19", "TailwindCSS", "Vercel"],
  },
  {
    id: "studyhub-admin",
    title: "StudyHub Admin",
    subtitle: "익스턴십 관리자 페이지",
    tags: ["React 19", "TypeScript", "TanStack Query"],
    desc: "리드로 참여한 실무형 관리자 프로젝트. 실제 서비스 운영 맥락에서 데이터 관리 UI를 직접 구현했습니다.",
    codeHref: "https://github.com/OZ-Coding-School/oz_externship_fe_03_team4",
    thumbnail: "images/studyhub.JPG",
    period: "2025.10 ~ 2025.11",
    team: "5인 팀 (FE 5)",
    role: "프론트엔드 팀장 / 전반 설계",
    responsibilities: [
      "로그인/리뷰/지원내역 등 주요 페이지 설계 및 개발",
      "TanStack Query 기반 데이터 캐싱 및 페이지네이션 로직 구현",
      "Git 브랜치 전략 및 PR 리뷰 프로세스 정립",
    ],
    achievements: [
      "프로젝트 구조 표준화 및 컴포넌트 재사용률 80% 이상 달성",
      "팀 협업 문화 개선",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "TailwindCSS",
      "Vite",
    ],
  },
  {
    id: "studyhub-landing",
    title: "StudyHub (소개)",
    subtitle: "프로젝트 소개/랜딩",
    tags: ["Vercel", "TypeScript", "GSAP"],
    desc: "익스턴십 팀의 프로젝트 홍보용 랜딩 사이트로 GSAP 기반 인터랙션 구현.",
    demoHref: "https://ozex3-fe4.vercel.app",
    codeHref:
      "https://github.com/oz-externship3-fe-4/oz-externship-fe4-showcase/",
    thumbnail: "images/ex3.JPG",
    period: "2025.11",
    team: "5인 팀 (FE 5)",
    role: "프로젝트 리드, 애니메이션 및 인터랙션 담당",
    responsibilities: [
      "GSAP 애니메이션 및 스크롤 인터랙션 연출",
      "페이지 구조/색상/타이포그래피 조율",
    ],
    achievements: ["Demo Day 홍보 페이지로 활용"],
    techStack: ["React", "TypeScript", "GSAP", "Vercel"],
  },
];
