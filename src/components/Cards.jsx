import React from 'react'

const Cards = () => {
  return (
    <div  className='w-full h-screen bg-zinc-100 flex item-center px-10 -mb-32 -pb-32 pt-10 gap-5'>
      <div className='cardcontainer h-[60vh] w-1/2'>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]'>
                <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute border-[#CDEA68] text-[#CDEA68] px-5  py-1 rounded-full border-2 left-10 bottom-10'>@2023-2024</button>
            </div>
      </div>
      <div className='cardcontainer h-[60vh] w-1/2 flex gap-5'>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className=' absolute border-white text-white px-5  py-1 rounded-full border-2 left-10 bottom-10 uppercase'> Rating 5 on Clutch</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]'>
                <img className='w-1/3' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute  border-white text-white px-5  py-1 rounded-full border-2 left-18 bottom-10 uppercase '>business bootcamp allumini</button>
            </div>
      </div>

    </div>
  )
}

export default Cards