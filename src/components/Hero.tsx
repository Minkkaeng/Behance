import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-column">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="hero-badge">
            28살 프론트엔드 개발자
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-main-heading"
        >
          사용자 중심의 <br />
          <span className="hero-highlight-text">
            경험을 설계하고
          </span>{" "}
          <br />
          구조적으로 구현합니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-description"
        >
          심미적인 디자인 and 논리적인 설계를 결합하여, <br className="hidden md:block" />
          사용자가 머무르고 싶은 웹 인터페이스를 만듭니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-button-area"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="hero-primary-btn group"
          >
            프로젝트 보기 <ArrowRight size={18} className="hero-primary-btn-icon group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="hero-secondary-btn"
          >
            연락하기
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hero-tag-area"
        >
          {["React", "TypeScript", "UI/UX Design", "Figma", "Tailwind"].map((tag) => (
            <span
              key={tag}
              className="hero-tag"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-visual-column"
      >
        <div className="hero-visual-container">
          <div className="hero-background-blur" />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hero-card"
          >
            <div className="hero-card-bar-area">
              <div className="hero-card-bar-short" />
              <div className="hero-card-bar-long" />
            </div>

            <h3 className="hero-card-title">
              Architecture <br />& Design Systems
            </h3>

            <p className="hero-card-desc">
              사용자 경험을 최우선으로 생각하는 <br />
              인터페이스를 설계하고 구축합니다.
            </p>

            <div className="hero-card-grid">
              <div className="hero-card-grid-item">
                <p className="hero-card-grid-item-label text-accent">Fast</p>
                <p className="hero-card-grid-item-val">Optimized</p>
              </div>
              <div className="hero-card-grid-item">
                <p className="hero-card-grid-item-label text-[#ff8ed2]">Clean</p>
                <p className="hero-card-grid-item-val">Maintainable</p>
              </div>
            </div>
          </motion.div>

          {/* Floating tags */}
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hero-floating-tag"
          >
            <div className="hero-floating-tag-indicator" />
            <span className="hero-floating-tag-text">Available for Work</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hero-scroll-down-indicator"
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  );
}

export default Hero;
