import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const inputStyle = {
    width: "100%",
    background: "#f3f3f3",
    border: "none",
    borderRadius: "12px",
    padding: "14px 18px",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#111",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
};

const Dropdown = ({ label, value, options, isOpen, onToggle, onSelect }) => (
    <div style={{ position: "relative" }}>
        <label style={{ display: "block", fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", marginBottom: "6px" }}>
            {label}
        </label>
        <div
            onClick={onToggle}
            style={{ ...inputStyle, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", userSelect: "none" }}
        >
            <span className="truncate pr-2">{value}</span>
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", flexShrink: 0 }}>
                <ChevronDown size={13} color="#888" />
            </motion.span>
        </div>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        left: 0,
                        right: 0,
                        background: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
                        border: "1px solid #eee",
                        overflow: "hidden",
                        zIndex: 50,
                    }}
                >
                    {options.map((opt) => (
                        <div
                            key={opt}
                            onClick={() => onSelect(opt)}
                            style={{
                                padding: "11px 18px",
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                cursor: "pointer",
                                color: "#111",
                                transition: "background 0.15s",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f5")}
                            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >
                            {opt}
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const ContactItem = ({ title, subtitle, value }) => (
    <div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "inline-block" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.65 }}>{title}</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", margin: "0 0 4px" }}>{subtitle}</p>
        <p style={{ color: "#fff", fontSize: "14px", margin: 0 }}>{value}</p>
    </div>
);

const Form = () => {
    const [budget, setBudget] = useState("$1000 - $5000");
    const [service, setService] = useState("Game Design");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const budgetOptions = ["$1000", "$2000", "$3000", "$4000"];
    const serviceOptions = ["Game Design", "Product Design", "Web Design"];

    return (
        <section className="px-3 py-4 sm:px-6 sm:py-6 md:px-8 overflow-hidden relative">
            <div className="max-w-[1865px] mx-auto relative z-[1]">
                <div
                    className="rounded-[20px] sm:rounded-[28px] overflow-hidden relative min-h-[min(100vh,520px)] sm:min-h-[480px] flex items-stretch py-6 px-4 sm:p-8 md:p-10 bg-[#111]"
                    style={{
                        backgroundImage: `linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0.25) 100%), url('/form_img.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                    <div className="relative z-[5] flex flex-col xl:flex-row items-stretch xl:items-center justify-between w-full gap-10 xl:gap-12 2xl:px-8 2xl:py-4 box-border">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
                            className="w-full xl:w-[42%] text-white flex flex-col gap-6 sm:gap-8 xl:max-w-none"
                        >
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                                className="flex items-center gap-2"
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block"
                                />
                                <span className="text-[11px] font-bold tracking-[0.22em] uppercase opacity-65">
                                    Get in touch
                                </span>
                            </motion.div>

                            <motion.h2
                                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } }}
                                className="text-[clamp(1.5rem,5vw,3.625rem)] font-medium leading-[1.08] text-white m-0"
                            >
                                Tell us about your project —whether it&apos;s a website, SEO, or marketing.
                            </motion.h2>

                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2"
                            >
                                <ContactItem title="Talk to us" subtitle="Work and general inquiries" value="+123 456 789 00" />
                                <ContactItem title="Post Address" subtitle="541 Melville Ave, Palo Alto, CA" value="94301, United States" />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="w-full xl:w-[46%] bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 xl:px-12 box-border shadow-[0_32px_80px_rgba(0,0,0,0.45)] shrink-0"
                        >
                            <h3 className="text-lg sm:text-[22px] font-medium text-[#111] m-0 mb-6 sm:mb-8">
                                Have a project in mind?
                            </h3>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
                                className="flex flex-col gap-4 sm:gap-[18px]"
                            >
                                <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-[14px]">
                                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="YOUR NAME" style={inputStyle} />
                                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="BUSINESS EMAIL" style={inputStyle} />
                                </motion.div>

                                <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-[14px]">
                                    <Dropdown label="BUDGET" value={budget} options={budgetOptions} isOpen={openDropdown === "budget"} onToggle={() => setOpenDropdown(openDropdown === "budget" ? null : "budget")} onSelect={(v) => { setBudget(v); setOpenDropdown(null); }} />
                                    <Dropdown label="SERVICE" value={service} options={serviceOptions} isOpen={openDropdown === "service"} onToggle={() => setOpenDropdown(openDropdown === "service" ? null : "service")} onSelect={(v) => { setService(v.toUpperCase()); setOpenDropdown(null); }} />
                                </motion.div>

                                <motion.textarea variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} value={message} onChange={e => setMessage(e.target.value)} placeholder="MESSAGE" rows={4} style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }} />

                                <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-3 sm:gap-[14px] bg-transparent border-none cursor-pointer pt-2">
                                    <motion.div animate={{ rotate: [0, 90, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-9 h-9 sm:w-[38px] sm:h-[38px] bg-[#111] rounded-full flex items-center justify-center text-white text-lg leading-none shrink-0">
                                        +
                                    </motion.div>
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111]">Let&apos;s Talk</span>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
