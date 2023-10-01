import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Scrollbar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 60,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleY }}
      className="fixed bottom-0 right-0 w-2 h-screen bg-primary z-50 origin-bottom-right"
    ></motion.div>
  );
}
