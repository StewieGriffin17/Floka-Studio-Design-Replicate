import React from 'react';
import { motion } from 'framer-motion';

const Marquee1 = () => {
  const marqueeText = "See how our team combines creativity, technology, and strategy";

  return (
    <div className="relative w-full min-h-[100px] sm:h-[144px] bg-[#f2f2f2] overflow-hidden flex items-center border-y border-gray-100 mb-[-4rem] sm:mb-[-150px] py-4 sm:py-0">
      <div className="absolute inset-y-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-[#f2f2f2] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-[#f2f2f2] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap gap-8 sm:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span 
            key={i} 
            className="text-[clamp(1.75rem,8vw,5rem)] md:text-[80px] font-medium text-[#1a1a1a] tracking-tighter px-2"
          >
            {marqueeText}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee1;
