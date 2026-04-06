import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";

const logos = [
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon13.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon14.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon12.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon11.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon10.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon9.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon8.svg",
];

const Users = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <section className="bg-[#f5f5f5] py-12 sm:py-20 px-3 sm:px-4 font-sans">
            <div className="max-w-[1300px] mx-auto">

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6 sm:mb-8 px-1 sm:px-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-800">
                        Happy Users
                    </span>
                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                        ©2026 <span className="text-gray-800 font-bold">Anowarul-Asif</span> Studio
                    </span>
                </div>

                <div className="bg-white rounded-[20px] sm:rounded-[30px] overflow-hidden border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center min-h-[160px] sm:h-[200px] w-full border-gray-100 
                ${index < 4 ? 'border-b' : ''} 
                ${(index + 1) % 4 !== 0 ? 'lg:border-r' : ''}
                ${(index + 1) % 2 !== 0 ? 'sm:border-r lg:border-r' : 'sm:border-none lg:border-r'}
                ${(index + 1) % 4 === 0 ? 'lg:border-none' : ''}
                hover:bg-gray-50 transition-colors duration-300 cursor-pointer`}
                        >
                            <img src={logo} alt={`Logo ${index}`} className="max-w-[min(160px,50vw)] px-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
                        </div>
                    ))}

                    <div className="flex flex-col items-center justify-center min-h-[160px] sm:h-[200px] w-full text-center hover:bg-gray-50 transition-colors duration-300 cursor-pointer border-t sm:border-t-0 sm:border-l-0 lg:border-l border-gray-100">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Next can be you.
                        </span>
                        <span className="text-[12px] text-black font-bold uppercase tracking-tighter border-b border-black pb-1">
                            Let&apos;s Talk
                        </span>
                    </div>

                </div>
            </div>

            <div
                className="relative group overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer max-w-[1300px] mx-auto mt-4 sm:mt-5 px-0 sm:px-0"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    src="/users.webp"
                    alt="Video Reel"
                    className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-sm group-hover:brightness-75"
                />

                <motion.button
                    type="button"
                    initial={false}
                    animate={
                        hovered
                            ? {
                                left: "50%",
                                bottom: "50%",
                                x: "-50%",
                                y: "50%",
                            }
                            : {
                                left: "16px",
                                bottom: "16px",
                                x: "0%",
                                y: "0%",
                            }
                    }
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                    }}
                    className="absolute z-10 flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-5 py-2 rounded-full shadow-lg max-w-[calc(100%-2rem)]"
                >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center shrink-0">
                        <div className="w-0 h-0 border-t-[4px] sm:border-t-[5px] border-t-transparent border-l-[6px] sm:border-l-[8px] border-l-white border-b-[4px] sm:border-b-[5px] border-b-transparent ml-0.5 sm:ml-1" />
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-black truncate">
                        Play Reel
                    </span>
                </motion.button>
            </div>

        </section>
    );
};

export default Users;
