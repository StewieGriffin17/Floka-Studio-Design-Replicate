import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollMarquee = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -2000]);

  const x = useSpring(xRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      ref={containerRef} 
      className="bg-[#f4f4f2] py-4 sm:py-6 overflow-x-hidden whitespace-nowrap border-y border-gray-100 flex items-center w-full"
    >
      <motion.div 
        style={{ x }} 
        className="flex gap-3 sm:gap-4 items-center shrink-0 will-change-transform"
      >
        {[...Array(20)].map((_, i) => (
          <img 
            key={i}
            src="/src/assets/marquee.png" 
            alt="Marquee Graphic"
            className="h-[8px] sm:h-[10px] w-auto object-contain block shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollMarquee;
