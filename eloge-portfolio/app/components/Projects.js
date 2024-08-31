import { projects } from '@/public/utils'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='w-full bg-home-gray p-8 md:px-16 min-h-screen'>
        <h1 className='font-khand text-5xl text-white'>UI / UX Design</h1>
        <div className='w-full mt-8 gap-4 flex justify-center pt-4 flex-wrap'>
            {
                projects.map((item,i) => (
                    <div key={i} className='w-full md:w-[48%] hover lg:w-[30%]'>
                        <div className='relative  min-h-72 rounded-xl overflow-hidden shadow-md p-8'>
                            <Image src={item.img} alt='' fill/>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects