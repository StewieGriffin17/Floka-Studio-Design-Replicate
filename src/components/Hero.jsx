import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="w-full flex justify-center bg-white px-3 sm:px-4 md:px-6">
            <div className="relative w-full max-w-[1865px] min-h-[min(70vh,640px)] h-[65vh] sm:h-[70vh] md:h-[900px] overflow-hidden rounded-xl md:rounded-2xl">

                <video
                    className="w-full h-full object-cover"
                    src="/src/assets/home-1-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent backdrop-blur-[2px]" />

                <div className="absolute inset-x-0 bottom-0 p-4 pb-6 sm:p-6 md:bottom-8 md:left-0 md:right-0 md:p-0 md:pointer-events-none">
                    <div className="flex flex-col gap-8 lg:gap-10 md:max-w-none md:pointer-events-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white md:absolute md:bottom-24 md:left-8 lg:left-20"
                        >
                            <div className="leading-none">
                                <h2 className="text-[clamp(3.5rem,14vw,15.625rem)] font-semibold m-0 p-0 mb-2 sm:mb-5 text-left">
                                    Floka
                                </h2>
                                <h2 className="text-[clamp(2.5rem,8vw,6rem)] text-[#FFFFFF4D] m-0 p-0 text-right -mt-2 sm:-mt-6 md:-mt-10">
                                    Studio
                                </h2>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-full max-w-[420px] md:absolute md:bottom-24 md:right-8 lg:right-20 md:translate-x-0"
                        >
                            <div className="w-full max-w-[420px] min-h-0 bg-white text-black flex flex-col sm:flex-row items-stretch sm:items-center p-3 sm:p-4 rounded-xl shadow-lg gap-3 sm:gap-0">

                                <div className="w-full sm:w-[120px] md:w-[140px] aspect-square sm:aspect-auto sm:h-[120px] md:h-[140px] flex-shrink-0 mx-auto sm:mx-0">
                                    <img
                                        src="/src/assets/home_card.jpg"
                                        alt="home_card"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>

                                <div className="flex flex-col justify-between flex-1 min-w-0 sm:ml-4 p-1 sm:p-2 gap-3 sm:gap-0">

                                    <div>
                                        <h2 className="text-xs sm:text-sm text-gray-500">Head Of Idea</h2>
                                        <p className="text-base sm:text-lg font-semibold">Anowarul Asif</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button type="button" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-black text-white rounded-full shrink-0">
                                            +
                                        </button>
                                        <span className="font-bold text-sm sm:text-base">Let&apos;s Talk</span>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mt-6 sm:mt-10 max-w-full">
                                <h2 className="text-base sm:text-[20px] text-white">No cookie-cutter websites. No fluff.</h2>
                                <p className="text-sm sm:text-[18px] font-semibold text-gray-400 md:text-gray-500">Just real tools and smart strategies to grow your business and elevate your brand.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
