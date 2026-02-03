import { useState } from "react";
import { getImagePath } from "../utils/imagePath";

const skillsMain = [
  {
    name: "HTML5",
    icon: "/img/html.png",
    desc: "시맨틱 태그, 접근성, 구조 설계",
    detail:
      "섹션, 네비게이션, 아티클 등 시맨틱 태그로 구조를 명확히 나누고, 스크린 리더를 고려한 마크업을 작성합니다. 리스트/테이블/폼 구조를 상황에 맞게 선택합니다.",
  },
  {
    name: "CSS3 / Layout",
    icon: "/img/css3.png",
    desc: "Flex, Grid, 반응형, 컴포넌트화",
    detail:
      "Flex와 Grid를 상황에 맞게 섞어서 레이아웃을 구성하고, 토큰 기반으로 색상/간격/타이포를 관리합니다. 반응형 브레이크포인트를 미리 정의합니다.",
  },
  {
    name: "JavaScript",
    icon: "/img/js.png",
    desc: "상태, DOM, 인터랙션 구성",
    detail:
      "이벤트 기반으로 상태를 관리하고 사용자 액션에 따라 DOM을 업데이트하는 흐름을 설계합니다. 모달/탭/필터 등 UI 패턴 구현 경험이 있습니다.",
  },
  {
    name: "React",
    icon: "/img/react.png",
    desc: "컴포넌트 설계, 라우팅 구조 이해",
    detail:
      "페이지를 컴포넌트 단위로 나누고 props/state 흐름을 정리합니다. React Router로 라우팅을 구성하고 공통 레이아웃을 분리합니다.",
  },
  {
    name: "Git / GitHub",
    icon: "/img/github.png",
    desc: "브랜치, 협업, 배포 경험",
    detail:
      "기능 단위 커밋/브랜치 분리 경험이 있고, GitHub Pages 배포 과정에서 base 경로/충돌 해결 등 트러블슈팅을 해봤습니다.",
  },
];

const skillsSupport = [
  {
    name: "Photoshop",
    icon: "/img/ps.png",
    desc: "이미지 보정, 배너 제작",
    detail: "간단한 사진 보정, 합성, 썸네일/배너 제작이 가능합니다. 웹용 해상도/용량 최적화를 고려합니다.",
  },
  {
    name: "Illustrator",
    icon: "/img/ai.png",
    desc: "로고, 아이콘, 심볼 작업",
    detail: "벡터 기반 로고/아이콘 제작이 가능하고, SVG로 내보내 웹에서 재사용하는 흐름을 이해합니다.",
  },
];

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const openSkillModal = (skill) => setActiveSkill(skill);
  const closeSkillModal = () => setActiveSkill(null);

  return (
    <div className="section-inner skills-inner">
      <div className="section-header">
        <p className="eyebrow">Skills</p>
        <h2>What I build with</h2>
      </div>

      <div className="skills-grid-main">
        {skillsMain.map((skill) => (
          <button
            key={skill.name}
            type="button"
            className="skill-card main skill-card-button"
            onClick={() => openSkillModal(skill)}
          >
            <div className="skill-top">
              <img src={getImagePath(skill.icon)} alt={skill.name} className="skill-icon" />
              <h3>{skill.name}</h3>
            </div>
            <p>{skill.desc}</p>
          </button>
        ))}
      </div>

      <div className="skills-subtitle">Design & system thinking</div>

      <div className="skills-grid-sub">
        {skillsSupport.map((skill) => (
          <button
            key={skill.name}
            type="button"
            className="skill-card sub skill-card-button"
            onClick={() => openSkillModal(skill)}
          >
            <div className="skill-top">
              <img src={getImagePath(skill.icon)} alt={skill.name} className="skill-icon" />
              <h3>{skill.name}</h3>
            </div>
            <p>{skill.desc}</p>
          </button>
        ))}
      </div>

      {activeSkill && (
        <div className="skill-modal-backdrop" onClick={closeSkillModal}>
          <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="skill-modal-close" onClick={closeSkillModal}>
              ×
            </button>

            <div className="skill-modal-header">
              <img src={getImagePath(activeSkill.icon)} alt={activeSkill.name} className="skill-modal-icon" />
              <div>
                <p className="skill-modal-label">Skill Detail</p>
                <h3>{activeSkill.name}</h3>
              </div>
            </div>

            <p className="skill-modal-desc">{activeSkill.detail || activeSkill.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
