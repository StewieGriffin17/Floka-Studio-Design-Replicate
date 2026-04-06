import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProgressRow = ({ label, value, dark }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`rounded-xl px-4 py-2 flex flex-col min-h-[40px] ${
        dark ? "bg-black text-white" : "bg-gray-50 text-[#202020]"
      }`}
    >
      <div className="flex justify-between mb-1">
        <span className="text-[13px] font-semibold">{label}</span>
        <span className="text-[13px] font-medium opacity-70">{value}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`${dark ? "bg-white" : "bg-black"} h-full rounded-full`}
        />
      </div>
    </div>
  );
};

export default ProgressRow;