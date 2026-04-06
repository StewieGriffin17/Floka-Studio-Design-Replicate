import React from 'react';
import { motion } from 'framer-motion';

const rewardsData = [
  { title: "BEST DESIGNER AWARDS", provider: "AWWWARDS", year: "2025" },
  { title: "PEAKY UI DESIGNER", provider: "GOOGLE", year: "2024" },
  { title: "GREAT IN UX", provider: "APPLE", year: "2023" },
  { title: "BEST WEBSITE PICK", provider: "MICROSOFT", year: "2022" },
  { title: "NELSON UI & UX DESIGNER", provider: "SAMSUNG", year: "2021" },
];

const Rewards = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="bg-[#f4f4f2] py-16 sm:py-24 px-4 sm:px-8 md:px-16 font-sans">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        <div className="w-full lg:w-1/3 flex flex-col gap-6 sm:gap-8 items-center lg:items-start">
          <div className="w-full max-w-[300px] relative overflow-hidden rounded-[24px] sm:rounded-[30px] group cursor-none mx-auto lg:mx-0">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="/rewards.jpg" 
              alt="Team" 
              className="w-full h-auto object-cover"
            />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-800">
            Get Rewards
          </span>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col">
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
            className="w-full max-w-[650px] text-[clamp(1.75rem,4vw,2.9rem)] leading-[1.1] font-medium text-[#1a1a1a] mb-12 sm:mb-20"
          >
            Driven by passion and grounded in expertise, our team turns bold ideas into reality.
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={listVariants}
            className="border-t border-gray-200 w-full"
          >
            {rewardsData.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-6 sm:py-8 border-b border-gray-200 cursor-pointer relative overflow-hidden px-1"
              >
                <div className="absolute inset-0 bg-white scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 -z-10" />

                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <span className="text-[11px] sm:text-[12px] font-bold tracking-widest text-gray-800 group-hover:pl-0 sm:group-hover:pl-2 transition-all duration-300 uppercase block">
                    {item.title}
                  </span>
                </div>
                
                <div className="flex-1 text-center min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest transition-colors duration-300 group-hover:text-black">
                    {item.provider}
                  </span>
                </div>

                <div className="flex-1 sm:text-right text-center">
                  <span className="text-[11px] sm:text-[12px] font-medium text-gray-400 group-hover:text-black transition-colors duration-300">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Rewards;
