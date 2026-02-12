import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { getImagePath } from "../utils/imagePath";

type Skill = {
  name: string;
  icon: string;
  desc: string;
  detail: string;
};

const skillsMain: Skill[] = [
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

const skillsSupport: Skill[] = [
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
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">Skills</span>
        <h2 className="text-4xl md:text-6xl font-bold text-text mb-2">What I build with</h2>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-4 text-text-sub">
            <span className="w-12 h-px bg-accent/30" /> Core Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsMain.map((skill, index) => (
              <motion.button
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveSkill(skill)}
                className="p-8 rounded-[32px] bg-surface border border-border-subtle hover:border-accent transition-all text-left flex flex-col items-center justify-center gap-4 shadow-soft hover:shadow-strong group"
              >
                <div className="w-20 h-20 flex items-center justify-center p-4 bg-bg-soft rounded-3xl group-hover:rotate-6 transition-transform">
                  <img src={getImagePath(skill.icon)} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-lg text-text mb-1">{skill.name}</h4>
                  <p className="text-xs text-text-sub line-clamp-1">{skill.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-4 text-text-sub">
            <span className="w-12 h-px bg-[#ff8ed2]/30" /> Design & System
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillsSupport.map((skill, index) => (
              <motion.button
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveSkill(skill)}
                className="p-6 rounded-[32px] bg-surface border border-border-subtle hover:border-accent transition-all text-left flex flex-col items-center justify-center gap-3 shadow-soft hover:shadow-strong group"
              >
                <div className="w-14 h-14 flex items-center justify-center p-3 bg-bg-soft rounded-2xl group-hover:rotate-6 transition-transform">
                  <img src={getImagePath(skill.icon)} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-text mb-1">{skill.name}</h4>
                  <p className="text-[10px] text-text-sub uppercase tracking-wider">{skill.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeSkill && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSkill(null)}
              className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-surface rounded-[40px] border border-border-subtle shadow-strong p-10 overflow-hidden"
            >
              <button
                onClick={() => setActiveSkill(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-bg-soft transition-colors text-text-sub"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 p-4 bg-bg-soft rounded-[28px] flex items-center justify-center">
                  <img
                    src={getImagePath(activeSkill.icon)}
                    alt={activeSkill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                    Skill Detail
                  </span>
                  <h3 className="text-3xl font-bold">{activeSkill.name}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-medium text-text leading-relaxed">{activeSkill.desc}</p>
                <div className="h-px bg-border-subtle w-full my-6" />
                <p className="text-text-sub leading-relaxed">{activeSkill.detail}</p>
              </div>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Skills;
