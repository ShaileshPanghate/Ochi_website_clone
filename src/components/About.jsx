import React from 'react';
import { useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";

const About = () => {

    const [isHovered1, setIsHovered1] = useState(false);

    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds,
                sell products, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562] '>
                <div className='w-1/2'>
                    <h1 className='text-6xl '>Our approach : </h1>
                    <button onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)} className='px-8 py-5 mt-8 uppercase flex gap-10 items-center bg-zinc-900 rounded-full text-white'>Read More
                        <div style={{ width: isHovered1 ? '30px' : '10px', height: isHovered1 ? '30px' : '10px' }} className=' bg-zinc-100 text-black flex justify-center items-center rounded-full'>{isHovered1 ? <FaArrowUp /> : ""}</div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] rounded-3xl bg-[#393f24]'>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                        alt="" className='w-full h-[70vh] rounded-3xl' />
                </div>

            </div>


        </div>
    );
}

export default About;