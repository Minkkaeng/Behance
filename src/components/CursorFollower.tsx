import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 안쪽 닷(점)은 더 빠르게 따라옴
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 400 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 400 });

  // 바깥쪽 링(원)은 조금 더 느리게(스무스하게) 따라옴
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 바깥쪽 링 */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-accent mix-blend-difference"
        style={{
          width: 32,
          height: 32,
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 안쪽 닷 */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-accent mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
      />
    </>
  );
}

export default CursorFollower;
