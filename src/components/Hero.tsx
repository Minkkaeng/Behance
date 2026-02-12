import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 text-left">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 rounded-full bg-accent-soft text-accent text-[10px] font-bold tracking-widest uppercase mb-6 border border-accent/20">
            Frontend Developer · UI/UX Explorer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15]"
        >
          서비스 흐름을 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#ff8ed2]">
            구조적으로
          </span>{" "}
          <br />
          구현합니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-text-sub max-w-xl mb-8 leading-relaxed opacity-90"
        >
          React 기반 SPA에서 컴포넌트 설계와 상태 흐름을 최적화하고, <br className="hidden md:block" />
          지속 가능한 코드를 작성하는 데 열정을 가지고 있습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-6 py-3.5 rounded-xl bg-accent text-white font-bold flex items-center gap-2 hover:shadow-strong transition-all shadow-lg shadow-accent/20 text-sm"
          >
            프로젝트 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3.5 rounded-xl bg-surface border border-border-subtle text-text font-bold hover:bg-surface-soft hover:border-accent transition-all text-sm shadow-soft"
          >
            연락하기
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {["React", "TypeScript", "Tailwind", "Vite", "State Management"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-bg-soft/70 text-text-sub text-[10px] font-bold border border-border-subtle/50 uppercase tracking-wide"
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
        className="flex-1 relative hidden lg:block"
      >
        <div className="relative w-full aspect-square max-w-[450px] ml-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[100px]" />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full bg-surface/40 backdrop-blur-xl rounded-[48px] border border-white/20 shadow-strong p-10 flex flex-col justify-center gap-6"
          >
            <div className="space-y-2">
              <div className="w-12 h-1.5 rounded-full bg-accent/20" />
              <div className="w-24 h-1.5 rounded-full bg-accent/40" />
            </div>

            <h3 className="text-3xl font-bold text-text leading-tight">
              Architecture <br />& Design Systems
            </h3>

            <p className="text-base text-text-sub leading-relaxed max-w-[300px]">
              사용자 경험을 최우선으로 생각하는 <br />
              인터페이스를 설계하고 구축합니다.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">Fast</p>
                <p className="text-xl font-bold">Optimized</p>
              </div>
              <div className="p-4 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-[#ff8ed2] font-bold mb-1">Clean</p>
                <p className="text-xl font-bold">Maintainable</p>
              </div>
            </div>
          </motion.div>

          {/* Floating tags */}
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 z-20 px-5 py-2.5 rounded-2xl bg-surface shadow-strong border border-border-subtle flex items-center gap-3"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold">Available for Work</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-sub opacity-50 hidden md:block"
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  );
}

export default Hero;
