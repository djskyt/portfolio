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
{
  id: "hanaloop-emissions-dashboard",
  title: "탄소 배출량 대시보드",
  subtitle: "HanaLoop 채용 과제",
  tags: ["Next.js", "TypeScript", "Zustand", "Recharts"],
  desc: "회사별·국가별·배출원별 온실가스 배출량을 시각화하는 대시보드. GHG Scope 1/2/3 개념을 코드에 반영하고 Optimistic Update + 롤백 처리를 구현했습니다.",
  demoHref: "https://hanaloop-emissions-dashboard.vercel.app",
  codeHref: "https://github.com/djskyt/hanaloop-emissions-dashboard",
  thumbnail: "images/hanaloop.JPG",
  period: "2026.05",
  team: "개인 프로젝트",
  role: "기획, 설계, 개발 전담",
  responsibilities: [
    "Next.js App Router 기반 페이지 설계 및 구현",
    "GHG Protocol Scope 1/2/3 분류 로직 구현",
    "Zustand를 활용한 상태 3레이어 분리 설계",
    "Optimistic Update + 실패 시 자동 롤백 처리",
    "Recharts 기반 월별 트렌드, 배출원별 비중, 국가별 비교 차트",
  ],
  achievements: [
    "탄소 회계 도메인(PCF, GHG Scope) 학습 및 코드 반영",
    "Vercel 배포 및 빌드 최적화",
  ],
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Recharts", "Vercel"],
},
];
