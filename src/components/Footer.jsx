import React from 'react';
import { motion } from 'framer-motion';
import CircularText from './CircularText';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
};

const Footer = () => {
    return (
        <footer className="bg-black text-white px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-10 relative overflow-hidden mt-6 sm:mt-10">
            <div className="max-w-[1400px] mx-auto w-full">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative mb-12 sm:mb-20 md:mb-24 flex flex-col items-center"
                >
                    <motion.h1
                        variants={item}
                        className="text-[clamp(3.5rem,18vw,15.625rem)] text-center leading-[0.85] font-semibold tracking-tight text-white/80 w-full"
                    >
                        Let’s
                    </motion.h1>

                    <motion.h1
                        variants={item}
                        className="text-[clamp(3.5rem,18vw,15.625rem)] text-center leading-[0.85] font-semibold tracking-tight text-white/20 -mt-2 sm:-mt-6 md:-mt-10 w-full"
                    >
                        talk now
                    </motion.h1>

                    <div className="scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-center -my-4 sm:my-0">
                        <CircularText
                            text="WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE"
                            spinDuration={15}
                            onHover="speedUp"
                            centerImage="/logo3.png"
                            radius={90}
                        />
                    </div>

                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-full lg:max-w-[645px] mx-auto lg:mx-0"
                    >
                        <div className="w-full aspect-[4/3] sm:h-[400px] lg:h-[500px] max-h-[70vh] rounded-[20px] sm:rounded-[24px] overflow-hidden relative">
                            <img
                                src="/footer.jpg"
                                className="w-full h-full object-cover"
                                alt=""
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[clamp(4rem,25vw,12.5rem)] font-bold text-white">
                                    F
                                </span>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 sm:-bottom-16 md:-bottom-20 left-0 sm:-left-2 md:-left-6 opacity-20 pointer-events-none hidden sm:block">
                            <h2
                                className="text-[clamp(4rem,20vw,11.25rem)] font-bold text-transparent"
                                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                            >
                                Floka
                            </h2>
                        </div>
                    </motion.div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 min-w-0">

                        <motion.ul
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6 sm:space-y-8 md:space-y-10"
                        >
                            {['About Us', 'Journal', 'Faq', 'Get In Touch', 'Careers'].map((itemText) => (
                                <motion.li key={itemText} variants={item}>
                                    <a
                                        href="#"
                                        className="text-[clamp(1.5rem,5vw,2.5rem)] font-medium tracking-tight hover:text-white/60 transition-all duration-300 block"
                                    >
                                        {itemText}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-between gap-8"
                        >
                            <p className="text-[16px] sm:text-[18px] text-white/60 leading-relaxed max-w-[360px]">
                                At Floka, we believe furniture should be more than just functional—it should tell your story. With a focus on timeless design, sustainable materials, and expert craftsmanship, we create pieces that feel personal.
                            </p>

                            <div className="space-y-2 text-[15px] sm:text-[16px]">
                                <p>info@floka-design.com</p>
                                <p>+123 (456 789 00)</p>
                                <p className="text-white/50">12/A, Booston Tower, NYC</p>
                            </div>

                            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-8 flex-wrap">
                                {['f', 'x', 'in', 'be'].map((s) => (
                                    <motion.div
                                        key={s}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="w-9 h-9 sm:w-10 sm:h-10 border border-white/20 rounded-full flex items-center justify-center text-sm cursor-pointer"
                                    >
                                        {s}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-16 sm:mt-24 md:mt-28 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm text-center sm:text-left">
                        Copyright © 2026 Anowarul Asif
                    </p>

                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md shrink-0"
                    >
                        ↑
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
