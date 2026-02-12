import { motion } from "framer-motion";
import { User, Code2, Rocket } from "lucide-react";

function About() {
  const cards = [
    {
      icon: <Code2 className="text-accent" size={24} />,
      title: "구조적인 개발",
      desc: "단순히 예쁜 화면보다 유지보수 가능한 컴포넌트 구조와 데이터 흐름을 중요하게 생각합니다.",
    },
    {
      icon: <User className="text-[#ff8ed2]" size={24} />,
      title: "사용자 중심",
      desc: "디자인과 개발 사이의 간격을 좁히고, 사용자가 편안하게 느낄 수 있는 인터랙션을 고민합니다.",
    },
    {
      icon: <Rocket className="text-accent" size={24} />,
      title: "성장과 책임",
      desc: "팀 프로젝트에서 관리자/사용자 UI를 설계하며 책임감을 배우고, 배포 이슈를 해결하며 성장했습니다.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">Profile</span>
          <h2 className="text-4xl md:text-6xl font-bold text-text">About Me</h2>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-4xl font-bold leading-tight">
            조용히, 하지만 <br />
            <span className="text-accent underline decoration-accent/20 underline-offset-8">결과는 명확하게.</span>
          </h3>
          <p className="text-lg md:text-xl text-text-sub leading-relaxed max-w-xl">
            React 기반 UI를 컴포넌트 구조로 나누고, <br />
            상태와 라우팅 흐름을 정리하여 구현하는 것에 강점이 있습니다.
          </p>
          <p className="text-text-sub leading-relaxed max-w-xl">
            마크업, 레이아웃, 상태 흐름이 명확하게 정의되어야 안정감을 느끼며, 타이포그래피와 인터랙션의 세밀한 지점까지
            정의하여 프로젝트의 완성도를 높이는 것을 즐깁니다.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {["Component Thinking", "Ownership", "Pixel Perfection"].map((badge) => (
              <span
                key={badge}
                className="px-5 py-2 rounded-xl bg-surface border border-border-subtle text-sm font-bold text-text-sub shadow-soft"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-[32px] bg-surface border border-border-subtle shadow-soft transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-bg-soft flex items-center justify-center">
                {card.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 text-text">{card.title}</h4>
                <p className="text-text-sub text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
