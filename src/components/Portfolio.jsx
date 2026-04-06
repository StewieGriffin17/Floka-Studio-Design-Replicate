import React, { useState } from "react";
import { motion } from "framer-motion";

const portfolioItems = [
    {
        img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp",
        tags: ["branding", "ux"],
        title: "Aldan Branding",
        year: "2025",
        logo_name: "Logoipsum",
    },
    {
        img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg",
        tags: ["branding", "product"],
        title: "Vision Refresh",
        year: "2025",
        logo_name: "Logoipsum",
    },
    {
        img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp",
        tags: ["branding", "ux"],
        title: "Elevate Brand",
        year: "2025",
        logo_name: "Logoipsum",
        wide: true,
    },
    {
        img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp",
        tags: ["product", "ux"],
        title: "Web3 Crypto",
        year: "2025",
        logo_name: "Logoipsum",
    },
    {
        img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-655x450.webp",
        tags: ["branding", "module"],
        title: "Creative Suite",
        year: "2025",
        logo_name: "Logoipsum",
    },
];

const headingVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
};

const PortfolioCard = ({ item }) => {
    const [pos, setPos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
    };

    return (
        <div className={`group ${item.wide ? "sm:col-span-2" : ""}`}>
            <div
                onMouseMove={handleMouseMove}
                className={`relative rounded-[20px] overflow-hidden ${item.wide ? "aspect-[21/9] min-h-[200px]" : "aspect-[4/3]"
                    }`}
            >
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    style={{ transformOrigin: `${pos.x}% ${pos.y}%` }}
                />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-sm sm:text-[16px] font-bold z-10">
                    {item.logo_name}
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex gap-2 flex-wrap opacity-0 group-hover:opacity-100 transition duration-300">
                        {item.tags.map((t) => (
                            <span
                                key={t}
                                className="text-[10px] font-semibold tracking-wider uppercase bg-white/10 border border-white/20 px-3 py-[2px] rounded-full text-white"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                        <span className="text-black text-lg">↗</span>
                    </div>
                </div>
            </div>

            <div className="mt-2 w-full min-h-[52px] sm:h-[60px] bg-white rounded-[12px] px-3 sm:px-4 flex items-center justify-between gap-2">
                <h3 className="text-[13px] sm:text-[14px] font-medium text-black truncate">{item.title}</h3>
                <span className="text-[13px] sm:text-[14px] text-gray-500 shrink-0">{item.year}</span>
            </div>
        </div>
    );
};

const Portfolio = () => {
    return (
        <section className="px-4 sm:px-[5%] py-16 sm:py-24 md:py-[120px] bg-[#f2f2f2]">
            <div className="max-w-[1200px] mx-auto mb-16 sm:mb-24 md:mb-[100px] grid grid-cols-1 md:grid-cols-2 gap-y-6 pt-4">
                <div className="text-[14px] sm:text-[16px] uppercase tracking-wider text-[#1a1a1a] col-span-full">
                    portfolio
                    <div className="border-t-2 border-gray-300 w-full mt-2"></div>
                </div>

                <div className="md:col-span-2 flex justify-center px-1">
                    <motion.h2
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="max-w-[575px] w-full text-[clamp(1.75rem,5vw,3rem)] leading-[1.1] font-medium text-[#1a1a1a] text-left"
                    >
                        Strategy to build powerful digital solutions.
                    </motion.h2>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {portfolioItems.map((item, i) => (
                    <motion.div
                        key={i}
                        className={item.wide ? "sm:col-span-2" : ""}
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={i}
                    >
                        <PortfolioCard item={item} />
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-10 sm:mt-12">
                <a href="#" className="inline-flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                        <span className="absolute text-white text-lg transition-all duration-300 group-hover:rotate-90 group-hover:scale-0">
                            ×
                        </span>
                        <span className="absolute text-white text-lg scale-0 transition-all duration-300 group-hover:scale-100 group-hover:rotate-180">
                            +
                        </span>
                    </div>
                    <span className="text-[13px] sm:text-[14px] font-medium text-black tracking-wide">
                        MORE WORKS
                    </span>
                </a>
            </div>
        </section>
    );
};

export default Portfolio;
