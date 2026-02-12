import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Layers } from "lucide-react";
import { getImagePath } from "../utils/imagePath";

type Project = {
  id: number;
  label: string;
  role: string;
  period: string;
  title: string;
  summary: string;
  tech: string[];
  highlights: string[];
  tags: string[];
  live: string;
  repo: string;
  logo: string;
  color: string;
};

const projects: Project[] = [
  {
    id: 0,
    label: "NEW · UsPetMile",
    role: "개인 프로젝트 · Fullstack",
    period: "2026.02",
    title: "반려동물 동반 여행 플랫폼",
    summary:
      "반려동물과 함께할 수 있는 여행지 정보를 제공하고 커뮤니티를 형성하는 플랫폼입니다. 사용자의 위치 기반 정보를 활용하며 세련된 UI를 지향합니다.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MySQL"],
    highlights: [
      "사용자 맞춤형 반려동물 동반 장소 큐레이션",
      "반려인들을 위한 실시간 커뮤니티 기능 구현",
      "지도 API를 활용한 위치 기반 장소 검색",
    ],
    tags: ["Fullstack", "Map API", "Community"],
    live: "https://minkkaeng.github.io/UsPetMile/",
    repo: "https://github.com/Minkkaeng/UsPetMile",
    logo: "/img/projects/UsPetMile.png",
    color: "#6c63ff",
  },
  {
    id: 1,
    label: "01 · Play Farm",
    role: "팀 프로젝트 · Frontend 중심",
    period: "2025.12 ~ 2026.01",
    title: "농장 체험 예약 플랫폼",
    summary:
      "농장 체험을 검색·필터·예약까지 연결하는 서비스. 사용자/관리자 화면 흐름을 기준으로 UI 구조를 설계하고 구현했습니다.",
    tech: ["React", "React Router", "Node.js", "Express", "MySQL"],
    highlights: [
      "사용자/관리자 페이지 분리 및 라우팅 구조 설계",
      "리스트/상세 흐름에서 상태 분기(로딩/빈값/에러) 처리",
      "관리자 CRUD 흐름(등록/수정/삭제) 화면 패턴 정리",
    ],
    tags: ["React Router", "UI Flow", "Admin CRUD"],
    live: "https://play-farm.vercel.app/",
    repo: "#",
    logo: "/img/projects/Playfarm.png",
    color: "#4ade80",
  },
  {
    id: 2,
    label: "02 · Planify",
    role: "개인 프로젝트",
    period: "2025.12",
    title: "Productivity 플래너",
    summary:
      "할 일/캘린더/설정을 한 흐름으로 묶어 사용성을 높인 플래너. 로컬스토리지 기반으로 데이터를 유지하도록 설계했습니다.",
    tech: ["React", "Vite", "LocalStorage"],
    highlights: [
      "로컬 데이터 저장/초기화 유틸 분리",
      "레이아웃 컴포넌트 분리로 페이지 구조 재사용",
      "GitHub Pages 배포 및 base 경로 이슈 해결",
    ],
    tags: ["State", "LocalStorage", "Deploy"],
    live: "https://minkkaeng.github.io/Planify/",
    repo: "https://github.com/Minkkaeng/Planify",
    logo: "/img/projects/Planify.png",
    color: "#3b82f6",
  },
  {
    id: 3,
    label: "03 · Airbnb Renewal",
    role: "개인 프로젝트",
    period: "2025.10",
    title: "숙소 검색 UX 리디자인",
    summary: "검색 흐름과 카드 UI를 재구성해 React로 구현했습니다. 필터/모달 등 인터랙션 중심 UI 구성을 연습했습니다.",
    tech: ["React", "React Router"],
    highlights: ["카테고리/필터 UI 패턴 구현", "모달/오버레이 인터랙션 처리", "반응형 카드 그리드 레이아웃 구성"],
    tags: ["Modal", "Filter UX", "Responsive"],
    live: "https://minkkaeng.github.io/AirBnB/",
    repo: "https://github.com/Minkkaeng/AirBnB",
    logo: "/img/projects/Airbnb.png",
    color: "#ffffff",
  },
  {
    id: 4,
    label: "04 · The GamSung",
    role: "개인 프로젝트",
    period: "2025.08",
    title: "감성 인테리어 쇼핑몰",
    summary: "톤앤매너를 설정하고 반복 UI 컴포넌트(카드/배너/버튼) 기준으로 페이지를 퍼블리싱을 연습했습니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "토큰 기반 컬러 시스템으로 일관성 유지",
      "메인/카테고리/상세/기획전 페이지 구성",
      "카드/배너 컴포넌트 재사용 구조 설계",
    ],
    tags: ["Token CSS", "Publishing", "Components"],
    live: "https://minkkaeng.github.io/The-GamSung/",
    repo: "https://github.com/Minkkaeng/The-GamSung",
    logo: "/img/projects/TheGamSung.png",
    color: "#d4a373",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div className="mb-6 text-center">
        <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-1 block">Projects</span>
        <h2 className="text-2xl md:text-3xl font-bold text-text">Selected Work</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setActiveProject(project)}
            className="group cursor-pointer rounded-[20px] bg-white border border-black/10 overflow-hidden hover:border-accent transition-all shadow-soft hover:shadow-strong flex flex-col"
          >
            <div
              className="aspect-[16/10] relative overflow-hidden backdrop-blur-sm"
              style={{ backgroundColor: `${project.color}1a` }} // 1a is 10% opacity in hex
            >
              <img
                src={getImagePath(project.logo)}
                alt={project.title}
                className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="px-3 py-1 rounded-full bg-accent text-white font-bold text-[9px] shadow-lg">
                  세부사항
                </span>
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <div className="flex flex-col gap-0 mb-1.5">
                <span className="text-[8px] font-bold text-accent tracking-wider uppercase">{project.label}</span>
                <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h3>
              </div>
              <p className="text-slate-500 text-[11px] leading-snug line-clamp-2 opacity-90">{project.summary}</p>

              <div className="mt-3 flex flex-wrap gap-1">
                {project.tech.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded bg-slate-100 text-[8px] font-bold text-slate-600 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 2 && (
                  <span className="text-[8px] text-slate-400 font-bold px-1">+ {project.tech.length - 2}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10 md:py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full max-w-2xl max-h-full bg-white rounded-[40px] border border-black/10 shadow-strong overflow-hidden"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-600 shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-accent/5 border border-accent/10 text-[9px] font-bold text-accent uppercase tracking-wider"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] font-bold text-accent tracking-widest uppercase mb-1 block">
                  {activeProject.label}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{activeProject.title}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 mb-8">
                  <span className="flex items-center gap-1.5">
                    <Layers size={14} /> {activeProject.role}
                  </span>
                  <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                  <span>{activeProject.period}</span>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 opacity-60">
                      Overview
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{activeProject.summary}</p>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 opacity-60">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 opacity-60">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProject.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-slate-600 leading-relaxed text-sm">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-border-subtle">
                    {activeProject.live !== "#" && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-2xl bg-accent text-white font-bold flex items-center gap-2 hover:shadow-strong transition-all text-sm shadow-lg shadow-accent/20"
                      >
                        Live Project <ExternalLink size={16} />
                      </a>
                    )}
                    {activeProject.repo !== "#" && (
                      <a
                        href={activeProject.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-bold flex items-center gap-2 hover:bg-slate-100 transition-all text-sm"
                      >
                        GitHub Repo <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
