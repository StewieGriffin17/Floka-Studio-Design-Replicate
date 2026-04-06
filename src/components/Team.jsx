import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
  { id: 1, name: "Nicolas K. Ellington", role: "FOUNDER", img: "/member1.png" },
  { id: 2, name: "Carlos E. Ashcroft", role: "CEO", img: "/member2.png" },
  { id: 3, name: "Leonardo F. Ashton", role: "UX DESIGNER", img: "/member3.png" },
  { id: 4, name: "Ricardo P. Winslow", role: "UI DESIGNER", img: "/member4.png" },
];

const MemberCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: '-60px' });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 12;
    const y = (e.clientY - rect.top - rect.height / 2) / 12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#f0f0ee] rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 flex flex-col cursor-pointer relative overflow-hidden"
    >
      <div className="w-full aspect-[5/4] sm:h-[240px] md:h-[280px] sm:aspect-auto rounded-[16px] sm:rounded-[18px] overflow-hidden bg-[#dcc2a3] mb-3 sm:mb-4 shrink-0 relative">
        <motion.img
          src={member.img}
          alt={member.name}
          animate={{
            x: mousePos.x,
            y: mousePos.y,
            scale: hovered ? 1.1 : 1.0,
            filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
          }}
          transition={{ type: 'spring', stiffness: 160, damping: 22, mass: 0.5 }}
          className="w-full h-full object-cover block"
        />
      </div>

      <div className="px-1">
        <h4 className="text-[14px] sm:text-[15px] font-semibold text-[#111] m-0 mb-1">
          {member.name}
        </h4>
        <p className="text-[9px] sm:text-[10px] font-bold text-[#999] tracking-[0.14em] m-0 uppercase">
          {member.role}
        </p>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 4, y: hovered ? 0 : -4 }}
        transition={{ duration: 0.2 }}
        className="absolute top-4 right-4 sm:top-5 sm:right-5 w-7 h-7 sm:w-7 sm:h-7 bg-[#111] rounded-full flex items-center justify-center text-white text-xs sm:text-sm pointer-events-none"
      >
        ↗
      </motion.div>
    </motion.div>
  );
};

const FloatDot = ({ style, duration = 4.5 }) => (
  <motion.div
    animate={{ y: [0, -12, 0], opacity: [0.18, 0.4, 0.18] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute w-[5px] h-[5px] rounded-full bg-[#bbb] pointer-events-none"
    style={style}
  />
);

const Team = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: false, margin: '-80px' });
  const isImgInView = useInView(imgRef, { once: false, margin: '-80px' });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f4f4f2] py-6 px-4 sm:px-6 md:px-10 lg:px-12 font-sans box-border"
    >
      <div className="max-w-[1300px] min-h-0 lg:max-h-none mx-auto bg-white rounded-[24px] sm:rounded-[36px] py-8 px-5 sm:py-10 sm:px-8 md:p-12 lg:p-[52px] lg:px-[60px] flex flex-col xl:flex-row gap-10 xl:gap-[52px] overflow-hidden box-border relative">
        <FloatDot style={{ top: '10%', right: '35%' }} duration={4.2} />
        <FloatDot style={{ top: '55%', right: '32%' }} duration={5.1} />
        <FloatDot style={{ bottom: '18%', right: '37%' }} duration={5.8} />

        <div className="w-full xl:w-[38%] shrink-0 flex flex-col">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isHeadingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#999] block mb-4"
          >
            Our Avengers
          </motion.span>

          <div ref={headingRef}>
            {['Meet with our', 'team member'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: '110%' }}
                  animate={isHeadingInView ? { y: '0%' } : { y: '110%' }}
                  transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.1] text-[#111]"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeadingInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4 sm:gap-6 my-6 border-b border-[#eee] pb-3"
          >
            <button
              type="button"
              className="text-[10px] font-bold uppercase tracking-[0.14em] pb-1 bg-transparent cursor-pointer text-[#111] border-0 border-b-2 border-[#111]"
            >
              Design Team
            </button>
            <button
              type="button"
              className="text-[10px] font-bold uppercase tracking-[0.14em] bg-transparent border-none cursor-pointer text-[#bbb] pb-1"
            >
              Development Team
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="text-[#888] text-[14px] sm:text-[15px] leading-[1.7] max-w-[360px] m-0 mb-5"
          >
            What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.
          </motion.p>

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 bg-transparent border-none cursor-pointer p-0 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-9 h-9 bg-[#111] rounded-full flex items-center justify-center text-white text-lg leading-none shrink-0"
            >
              +
            </motion.div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111]">
              Join With Us
            </span>
          </motion.button>

          <div ref={imgRef} className="mt-auto rounded-[20px] sm:rounded-[24px] overflow-hidden shrink-0">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={isImgInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: imgY }}
            >
              <img
                src="/team.webp"
                alt="Team"
                className="w-full h-[180px] sm:h-[210px] object-cover block rounded-[20px] sm:rounded-[24px]"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 content-start">
          {teamMembers.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
