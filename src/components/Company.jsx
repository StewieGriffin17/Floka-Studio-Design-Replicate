import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import Marquee2 from "./Marquee2";

const companyItems = [
  {
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp",
    tags: ["BRANDING", "MAGAZINE", "PRODUCT"],
    title: "User Interface & Experience Design",
    text: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…",
  },
  {
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
    title: "Web Development",
    text: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…",
  },
  {
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp",
    tags: ["BRANDING", "UX", "PRODUCT"],
    title: "Search Engine Optimization",
    text: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…",
  },
  {
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp",
    tags: ["BRANDING", "UX"],
    title: "Low-Code Development",
    text: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions…",
  },
];

const Company = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const toggleItem = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white w-full max-w-[1865px] mx-auto px-4 sm:px-8 md:px-16 py-16 sm:py-24 rounded-xl md:rounded-2xl relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-purple-600 to-blue-400 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2 sm:-translate-x-32 sm:-translate-y-32 z-0"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2 sm:translate-x-32 sm:translate-y-32 z-0"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="flex flex-col items-center mb-12 sm:mb-24 text-center z-10 relative px-2"
      >
        <h1 className="text-[clamp(40px,10vw,140px)] font-medium leading-[0.9] tracking-tight">
          Company
        </h1>
        <h2 className="text-[clamp(40px,10vw,140px)] font-medium leading-[0.9] tracking-tight text-white">
          Expertise
        </h2>
      </motion.div>

      <div className="flex flex-col px-0 sm:px-4 lg:px-16 xl:px-[min(150px,8vw)] z-10 relative">
        {companyItems.map((item, i) => {
          const isExpanded = i === expandedIndex;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.2 } },
              }}
              className="border-t border-white/10 last:border-b"
            >
              <div className="flex items-start gap-4 sm:gap-8 py-6 sm:py-8">
                <button
                  type="button"
                  onClick={() => toggleItem(i)}
                  className={`w-9 h-9 border rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    isExpanded ? "bg-white border-white" : "border-white/30 hover:border-white"
                  }`}
                >
                  <span className={`text-xl transition-colors ${isExpanded ? "text-black" : "text-white"}`}>
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[15px] sm:text-[16px] md:text-[20px] font-medium cursor-pointer mb-2 hover:text-purple-400 transition-colors duration-300"
                    onClick={() => toggleItem(i)}
                    onKeyDown={(e) => e.key === "Enter" && toggleItem(i)}
                    role="button"
                    tabIndex={0}
                  >
                    {item.title}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 sm:pt-8 pb-4 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
                          <div className="max-w-[500px] w-full">
                            <p className="text-white text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{item.text}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] sm:text-[11px] tracking-widest font-bold px-3 sm:px-4 py-2 border border-white/20 rounded-full bg-[#111] hover:bg-white hover:text-black transition-all duration-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="w-full max-w-[300px] mx-auto md:mx-0 aspect-[4/3] overflow-hidden rounded-2xl">
                            <motion.img
                              src={item.img}
                              alt={item.title}
                              whileHover={{ scale: 1.1, rotate: 2 }}
                              transition={{ type: "spring", stiffness: 120 }}
                              className="w-full h-full object-cover cursor-pointer"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-8 sm:mt-10 mx-0 sm:mx-4 md:ml-[min(200px,12vw)] md:mr-auto flex flex-wrap items-center gap-4 sm:gap-6 group w-fit max-w-full cursor-pointer z-10 relative px-4 sm:px-0"
      >
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
          <span className="text-black text-2xl font-light">↑</span>
        </div>

        <div className="relative overflow-hidden min-w-0">
          <style>
            {`
              @keyframes typing {
                0%, 10% { width: 0; }
                70%, 90% { width: 100%; }
                100% { width: 0; }
              }
              .typewriter-text {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                border-right: 2px solid white;
                animation: typing 4s steps(15) infinite;
              }
            `}
          </style>
          <span className="typewriter-text text-base sm:text-[20px] font-bold tracking-tighter uppercase py-1 block max-w-full">
            HIRE US TODAY
          </span>
        </div>
      </motion.div>

      <Marquee2 />
    </section>
  );
};

export default Company;
