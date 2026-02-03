import { useState } from "react";
import { getImagePath } from "../utils/imagePath";

const projects = [
  {
    id: 2,
    label: "01 · Play Farm",
    role: "팀 프로젝트 · Frontend 중심 (React / Node / MySQL)",
    period: "2025.12 ~ 2026.01 (팀)",
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
  },
  {
    id: 4,
    label: "02 · Planify",
    role: "개인 프로젝트 · React",
    period: "2025.12",
    title: "하루를 정리하는 Productivity 플래너",
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
  },
  {
    id: 3,
    label: "03 · Airbnb Renewal",
    role: "개인 프로젝트 · React",
    period: "2025.10",
    title: "숙소 검색 UX 리디자인",
    summary:
      "검색 흐름과 카드 UI를 재구성해 React로 구현했습니다. 필터/모달 등 인터랙션 중심 UI를 구성을 연습했습니다.",
    tech: ["React", "React Router"],
    highlights: ["카테고리/필터 UI 패턴 구현", "모달/오버레이 인터랙션 처리", "반응형 카드 그리드 레이아웃 구성"],
    tags: ["Modal", "Filter UX", "Responsive"],
    live: "https://minkkaeng.github.io/AirBnB/",
    repo: "https://github.com/Minkkaeng/AirBnB",
    logo: "/img/projects/Airbnb.png",
  },
  {
    id: 1,
    label: "04 · The GamSung",
    role: "개인 프로젝트 · HTML / CSS / JS",
    period: "2025.XX",
    title: "감성 인테리어 쇼핑몰 웹사이트",
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
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const openProjectModal = (project) => setActiveProject(project);
  const closeProjectModal = () => setActiveProject(null);

  return (
    <div className="section-inner projects-inner">
      <div className="section-header">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <button key={p.id} type="button" className="project-card" onClick={() => openProjectModal(p)}>
            <div className="project-logo-card">
              <div className="project-logo-big-wrap">
                <img src={getImagePath(p.logo)} alt={p.title} className="project-logo-big" />
              </div>
              <div className="project-logo-meta">
                <span className="project-label">{p.label}</span>
                <span className="project-logo-title">{p.title}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeProject && (
        <div className="project-modal-backdrop" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="project-modal-close" onClick={closeProjectModal}>
              ×
            </button>

            <div className="project-modal-body">
              <p className="project-modal-label">Project</p>
              <h3 className="project-modal-title">{activeProject.title}</h3>
              <p className="project-modal-role">
                {activeProject.role} · {activeProject.period}
              </p>

              <p className="project-modal-summary">{activeProject.summary}</p>

              <div className="project-modal-block">
                <p className="project-modal-subtitle">Tech Stack</p>
                <ul className="project-modal-tags">
                  {activeProject.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className="project-modal-block">
                <p className="project-modal-subtitle">Highlights</p>
                <ul className="project-modal-list">
                  {activeProject.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="project-modal-actions">
                {activeProject.live !== "#" && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-live"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live ↗
                  </a>
                )}
                {activeProject.repo !== "#" && (
                  <a
                    href={activeProject.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-live"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
