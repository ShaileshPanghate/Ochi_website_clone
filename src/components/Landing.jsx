// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from "react";

import { FaArrowUp } from "react-icons/fa";

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "eye-opening", "Presentations"].map((item, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index == 1 && (
                  <motion.img
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    src="/src/assets/heading.jpg"
                    className="w-[8vw] h-[5.2vw] rounded-md"
                    alt="#"
                  />
                )}
                <h1
                  key={index}
                  className="uppercase text-[7.2vw] leading-[6vw] tracking-tighter font-['Founders Grotesk X-Cond Reg'] font-medium"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tighter leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg] ">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
