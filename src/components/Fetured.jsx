import { motion } from 'framer-motion';
import { Power4 } from 'gsap/all';
import React from 'react';
import { useState } from 'react'

const Fetured = () => {
    const [hovering1, setHoveringe1] = useState(false);
    const [hovering2, setHoveringe2] = useState(false);



    return (
        <div  className='w-full py-20 '>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Fetured projects : </h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">
                    <div onMouseEnter={() => setHoveringe1(true)} onMouseLeave={() => setHoveringe1(false)} className='cardcontainer w-1/2 h-[75vh] relative'>
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2
                     leading-none tracking-tighter text-8xl'>{
                                "FYDE".split("").map((item, index) => (
                                    <motion.span initial={{ y: "100%" }} animate={hovering1 ? ({ y: "0%" }) : ({ y: "100%" })} transition={{ ease: Power4.easeInOut, delay: index * .1 }} className='inline-block translate-y-full'>{item}</motion.span>
                                ))
                            }</h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover rounded-xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </div>
                    <div onMouseEnter={() => setHoveringe2(true)} onMouseLeave={() => setHoveringe2(false)} className='cardcontainer relative w-1/2 h-[75vh] '>
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2
                     leading-none tracking-tighter text-8xl'>{
                                "VISA".split("").map((item, index) => (
                                    <motion.span initial={{ y: "100%" }} animate={hovering2 ? ({ y: "0%" }) : ({ y: "100%" })} transition={{ ease: Power4.easeInOut, delay: index * .1 }} className='inline-block translate-y-full'>{item}</motion.span>
                                ))
                            }</h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover rounded-xl' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Fetured;