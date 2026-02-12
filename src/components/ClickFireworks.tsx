import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
};

function ClickFireworks() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newParticles: Particle[] = [];
      const count = 8; // Number of hearts per click
      const now = Date.now();

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: now + i,
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / count + (Math.random() - 0.5),
          velocity: 3 + Math.random() * 5,
        });
      }

      setParticles((prev) => [...prev, ...newParticles].slice(-40)); // Keep last 40 particles
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Cleanup old particles
  useEffect(() => {
    const timer = setInterval(() => {
      setParticles([]);
    }, 2000);
    return () => clearInterval(timer);
  }, [particles.length > 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: p.x,
              y: p.y,
              opacity: 1,
              scale: 0.5,
              rotate: 0,
            }}
            animate={{
              x: p.x + Math.cos(p.angle) * p.velocity * 20,
              y: p.y + Math.sin(p.angle) * p.velocity * 20,
              opacity: 0,
              scale: 1.5,
              rotate: Math.random() * 360,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
          >
            <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ClickFireworks;
