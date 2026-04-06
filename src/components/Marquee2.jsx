import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    { img: "../../public/avatar1.webp", text: "“ 10/10 well recommanded ”" },
    { img: "../../public/avatar2.webp", text: "“ Super speedy website designer ”" },
    { img: "../../public/avatar3.webp", text: "“ Great in UI/UX ”" },
    { img: "../../public/avatar4.webp", text: "“ Best design communicator ”" },
];

const Marquee2 = () => {
    return (
        <div className="relative w-full min-h-[40px] bg-black overflow-hidden flex items-center mt-12 sm:mt-20 py-2">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <motion.div
                className="flex items-center gap-x-12 sm:gap-x-[100px] md:gap-x-[150px] whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {[...testimonials, ...testimonials].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <img
                            src={item.img}
                            alt="Client"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300 "
                        />
                        <span className="text-[14px] sm:text-[18px] text-white/90 font-medium tracking-tight">
                            {item.text}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee2;
