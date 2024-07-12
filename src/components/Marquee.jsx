// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from "react";

function Marquee() {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-500 flex gap-10 overflow-hidden   whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[25vw] tracking-tighter leading-none font-['Founders Grotesk X-Condensed'] uppercase -mb-4 -mt-16 font-semibold"
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[25vw] tracking-tighter leading-none font-['Founders Grotesk X-Condensed'] uppercase -mb-4 -mt-16 font-semibold"
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[25vw] tracking-tighter leading-none font-['Founders Grotesk X-Condensed'] uppercase -mb-4 -mt-16 font-semibold"
        >
          We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
