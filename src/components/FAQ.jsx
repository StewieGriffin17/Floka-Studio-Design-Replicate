import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus } from 'lucide-react';
import ScrollMarquee from './ScrollMarquee';

const FAQItems = [
  {
    img: "../../public/faq1.webp",
    title: "What is artificial intelligence (AI)?",
    text: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    img: "../../public/faq2.webp",
    title: "How does AI improve business efficiency?",
    text: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    img: "../../public/faq3.jpg",
    title: "How long does AI implementation take?",
    text: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    img: "../../public/faq4.jpg",
    title: "What industries can benefit from AI?",
    text: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    img: "../../public/faq5.jpg",
    title: "What are the costs of AI solutions?",
    text: "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: '-60px' });
  const isAccordionInView = useInView(sectionRef, { once: false, margin: '-40px' });

  return (
    <section
      ref={sectionRef}
      className="bg-[#f4f4f2] py-10 px-4 sm:py-12 sm:px-6 md:py-16 md:px-10 lg:px-16 font-sans box-border"
    >
      <div className="max-w-[1300px] mx-auto mb-5 w-full">

        <div className="border-t border-[#ddd] pt-5 mb-10 sm:mb-14 md:mb-14 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#111]">
            FAQ &amp; Get Answer
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-24 items-start">

          <div className="w-full max-w-full lg:max-w-[300px] lg:flex-shrink-0 flex flex-col order-2 lg:order-1 lg:pt-[120px] xl:pt-[220px]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#888] text-[15px] sm:text-[16px] leading-[1.65] max-w-full lg:max-w-[260px] m-0 mb-6"
            >
              Don&apos;t found anything yet. Feel free to ask anything.{' '}
              <span className="text-[#111] font-bold border-b-[1.5px] border-[#111] cursor-pointer">
                Let&apos;s Talk
              </span>
            </motion.p>

            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={isHeadingInView ? { scale: 1, opacity: 1 } : { scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="rounded-[20px] sm:rounded-[24px] overflow-hidden w-full"
            >
              <img
                src="../../public/faq_main.jpg"
                alt="FAQ"
                className="w-full h-[220px] sm:h-[280px] lg:h-[300px] object-cover block"
              />
            </motion.div>
          </div>

          <div className="flex-1 min-w-0 w-full order-1 lg:order-2">

            <div ref={headingRef} className="mb-8 sm:mb-12 md:mb-[52px]">
              {['Have more questions?', "We've answers."].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={isHeadingInView ? { y: '0%' } : { y: '110%' }}
                    transition={{ duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[clamp(1.75rem,5vw,3.25rem)] font-medium leading-[1.1] text-[#111] tracking-[-0.01em]"
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:gap-[10px]">
              {FAQItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  index={index}
                  isOpen={activeIndex === index}
                  isInView={isAccordionInView}
                  onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollMarquee></ScrollMarquee>
    </section>
  );
};

const AccordionItem = ({ item, index, isOpen, isInView, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[16px] sm:rounded-[20px] overflow-hidden border transition-[border-color] duration-300"
      style={{ borderColor: isOpen ? '#e0e0e0' : 'transparent' }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-5 sm:py-6 sm:px-7 bg-transparent border-none cursor-pointer text-left gap-3 sm:gap-4"
      >
        <span className="text-[15px] sm:text-[17px] font-medium text-[#111] leading-[1.3] text-left flex-1 min-w-0">
          {item.title}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, background: isOpen ? '#333' : '#111' }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white shrink-0"
        >
          <Plus size={18} color="#fff" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-7 sm:pb-7 flex flex-col md:flex-row gap-5 sm:gap-7 items-start">
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-w-full md:max-w-[200px] h-auto min-h-[120px] md:h-[130px] object-cover rounded-[12px] sm:rounded-[14px] shrink-0"
              />
              <div className="flex flex-col gap-4 sm:gap-5 min-w-0 flex-1">
                <p className="text-[#888] text-[14px] sm:text-[15px] leading-[1.7] m-0">
                  {item.text}
                </p>
                <button
                  type="button"
                  className="flex items-center gap-3 bg-transparent border-none cursor-pointer p-0 self-start"
                >
                  <div className="w-7 h-7 sm:w-[30px] sm:h-[30px] bg-[#111] rounded-full flex items-center justify-center text-white text-base leading-none shrink-0">
                    +
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#111]">
                    Get In Touch
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
