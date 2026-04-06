import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CircularText from "./CircularText";
import AnimatedNumber from "./AnimatedNumber";
import ProgressRow from "./ProgressRow";
import Marquee1 from "./Marquee1";

const AwardBadge = ({ top, sub }) => (
    <div className="text-right">
        <p className="text-white text-[14px] sm:text-[16px] font-bold tracking-[0.2em] uppercase leading-tight">{top}</p>
        <p className="text-white/60 text-[8px] sm:text-[9px] font-medium tracking-widest uppercase mb-1">{sub}</p>
        <div className="flex justify-end gap-0.5">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-white/40" />
            ))}
        </div>
    </div>
);

const SocialPill = ({ label }) => (
    <span className="border border-gray-200 text-[#202020] text-[10px] font-bold uppercase tracking-wider px-3 sm:px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer">
        {label}
    </span>
);

const Card = () => {
    const experienceRef = useRef(null);
    const headerRef = useRef(null);

    const inViewNumbers = useInView(experienceRef, { once: true, margin: "-100px" });
    const inViewHeader = useInView(headerRef, { once: true, margin: "-100px" });

    return (
        <section className="bg-[#f2f2f2] min-h-screen p-4 sm:p-8 md:p-16 font-sans antialiased">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 mb-8 md:mb-12 items-start">
                <div className="flex flex-col items-center md:items-start">
                    <div className="relative mb-6 scale-90 sm:scale-100 origin-center md:origin-top-left">
                        <CircularText
                            text="MORE · PLAYFUL · LUXURIOUS ·"
                            spinDuration={25}
                            centerImage="/src/assets/logo2.png"
                            radius={45}
                        />
                    </div>
                    <p className="text-[#666666] text-base sm:text-[18px] leading-relaxed max-w-[300px] font-semibold text-center md:text-left">
                        We design every project with long-term success in mind.
                    </p>
                </div>

                <motion.h1
                    ref={headerRef}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewHeader ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-[#0A0A0A] text-[clamp(1.75rem,5vw,3.5rem)] md:text-[56px] leading-[1.1] tracking-tight text-center md:text-left"
                >
                    Our approach is straightforward— prioritizing functionality, speed, and clarity for solutions.
                </motion.h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr_minmax(0,280px)] gap-5 items-stretch mb-10">

                <div ref={experienceRef} className="bg-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 flex flex-col justify-between shadow-sm order-2 md:order-none">
                    <div>
                        <div className="flex items-baseline flex-wrap">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={inViewNumbers ? { opacity: 1 } : {}}
                                transition={{ duration: 0.5 }}
                                className="text-[clamp(4rem,15vw,6.25rem)] font-medium leading-none tracking-tighter text-black"
                            >
                                <AnimatedNumber value={25} start={inViewNumbers} />
                            </motion.span>
                            <span className="text-[clamp(3rem,12vw,5rem)] text-gray-500 font-light leading-none">+</span>
                        </div>
                        <p className="text-gray-600 text-sm font-medium mt-2">Years of experience</p>
                        <div className="w-full h-[2px] bg-gray-100 my-6 sm:my-8" />
                        <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed">
                            Explore how we transform ideas into extraordinary digital experiences.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <div className="flex -space-x-2 mb-4 justify-center md:justify-start">
                            {[1, 2, 3, 4].map((n) => (
                                <div key={n} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <img src={`/src/assets/avatar${n}.webp`} alt="user" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-black font-bold text-sm flex flex-wrap items-center gap-1 justify-center md:justify-start">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={inViewNumbers ? { opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <AnimatedNumber value={1200} start={inViewNumbers} separator />
                            </motion.span>
                            + happy users review
                        </p>
                    </div>
                </div>

                <div className="relative rounded-[40px] bg-black min-h-[500px] group overflow-visible">
                    {/* Image wrapper allows overflow */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-visible">
                        <img
                            src="/src/assets/card_section_img1.webp"
                            alt="CEO"
                            className="absolute md:top-[-230px] md:left-[-130px] top-[-130px] left-[-50px] scale-55 object-center "
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                    <div className="absolute top-8 right-8 flex flex-col gap-6">
                        <AwardBadge top="Ultra" sub="Best of the World Winner" />
                        <AwardBadge top="Hyper Best" sub="Award Winner" />
                    </div>

                    <div className="absolute bottom-10 left-10 right-10">
                        <p className="text-white text-[22px] leading-snug font-normal mb-4">
                            " At Floka, we merge strategy, creativity, and technology to shape brands that people love. "
                        </p>
                        <p className="text-white/70 text-sm font-medium">
                            Merizo H. Yelso <span className="text-white/30 ml-1">/ CEO</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 order-3">

                    <div className="bg-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 flex-1 shadow-sm">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Follow us</p>
                        <p className="text-black font-bold text-base sm:text-lg mb-4 sm:mb-6">For check updates</p>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {['Dribbble', 'Behance', 'Linkedin', 'X', 'Xing'].map((s) => (
                                <SocialPill key={s} label={s} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[28px] sm:rounded-[40px] p-6 sm:p-8 flex-1 shadow-sm">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6">
                            Impressions
                        </p>
                        <div className="flex flex-col gap-2">
                            <ProgressRow label="Solutions" value={100} />
                            <ProgressRow label="UI/UX" value={60} dark />
                            <ProgressRow label="Explore" value={32} />
                        </div>
                    </div>

                </div>
            </div>

            <Marquee1></Marquee1>
        </section>
    );
};

export default Card;
