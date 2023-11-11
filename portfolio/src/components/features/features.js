import React from 'react'
import { featuresData } from '../data/data'
import Card from './Card'
const Features = () => {
  return (
    <section id='features' className='w-full py-20  border-b-[1px] border-b-black'>
        <h2 className=' pl-10 uppercase font-titleFont text-3xl font-bold'>What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      {featuresData.map((item)=>(
        <Card key={item.id} item={item}/>
      ))}
      </div>
    </section>
  )
}

export default Features
