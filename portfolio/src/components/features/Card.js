import React from 'react'
import { HiArrowRight } from "react-icons/hi";
const Card = ({item:{icon,title , des}}) => {
  return (
    <div className='w-full h-auto px-10 py-10 rounded-lg shadow-md flex items-center group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
      <div className='flex h-full flex-col gap-10'>
      <div className="w-10 h-8 flex flex-col justify-between">
        
        {icon ? (
          <span className="text-5xl text-designColor">{icon}</span>
        ) : (
          <>
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
            <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
          </>
        )}
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='font-titleFont text-xl md:text-2xl font-bold text-gray-300'>{title}</h2>
        <p className='text-base'>{des}</p>
        
      </div>
      </div>
    </div>
  )
}

export default Card
