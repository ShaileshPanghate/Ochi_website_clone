import { useState, useEffect, useRef } from 'react';
import { FaArrowUp } from "react-icons/fa6";

const Ready = () => {

    const [rotate, setRotate] = useState(0);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })
    return (
        <div data-scroll data-scroll-speed=".5" className='relative w-full h-[150vh]  -mt-96 bg-[#CDEA68] rounded-3xl'>
            <div className='w-full h-1/2 pt-80 flex items-center justify-center'>
                <h1 className='Ready uppercase text-center text-[10vw] leading-none font-bold text-black'>
                    <div className=''>Ready</div>
                    <div className=''>to start</div>
                    <div className=''>the project ?</div>
                    {/* eyes */}
                    <div  data-scroll data-scroll-speed="-.1">                    
                    <div  className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[100%] '>
                        <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-white'>
                            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                    <div className='w-6 h-6  rounded-full bg-zinc-100'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-zinc-100'>
                            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                    <div className='w-6 h-6  rounded-full bg-zinc-100'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* eyes */}
                </h1>
            </div>
            <div></div>
            <div className='relative w-full h-1/2 flex justify-center items-center'>
                <div className='absolute text-center '>
                    <button onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)} className='px-8 py-5 mt-8 uppercase flex gap-10 items-center bg-zinc-900 rounded-full text-white'>start the project
                        <div style={{ width: isHovered1 ? '30px' : '10px', height: isHovered1 ? '30px' : '10px' }} className=' bg-zinc-100 text-black flex justify-center items-center rounded-full'>{isHovered1 ? <FaArrowUp /> : ""}</div>
                    </button>

                    <h1 className='mt-5 text-black'>OR</h1>

                    <button style={{ border: '1px solid black' }} onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)} className=' px-8 relative py-5 mt-8 border-zinc-900 uppercase flex gap-10 items-center rounded-full text-black'>hello@ochi.design
                        <div style={{ width: isHovered2 ? '30px' : '10px', height: isHovered2 ? '30px' : '10px', background: isHovered2 ? 'white' : 'black' }} className='rounded-full flex justify-center items-center'>{isHovered2 ? <FaArrowUp /> : ""}</div>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Ready;
