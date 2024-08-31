import { footerDetails } from '@/public/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full min-h-screen font-khand text-5xl text-white bg-home-gray '>
             <h1 className='mx-8 md:mx-16'>Contact me</h1>
            <div className='flex flex-row px-8 md:px16 py-16'>
                <div className='flex flex-col gap-8 w-1/2 p-8'>
                    {footerDetails.map((item, i) => (
                        <div key={i} className='flex gap-4 items-center w-fit text-2xl'>
                            <div className='size-8 relative'>
                                <Image src={item.logo} alt='' className='object-contain' fill />
                            </div>
                            <Link href=''>{item.title}</Link>
                        </div>
                    ))}
                </div>
                <div className='p-8 w-1/2'>
                    <form action="" className='w-full flex flex-col gap-8 no-underline'>
                        <div className='w-full flex gap-8'>
                            <input type="text" className='outline w-full p-2 bg-transparent h-fit text-2xl outline-home-yellow rounded-xl' placeholder='Your name...' />
                            <input type="text" className='outline w-full p-2 bg-transparent h-fit text-2xl outline-home-yellow rounded-xl' placeholder='Your name...' />
                        </div>
                        <input type="text" className='outline w-full p-2 bg-transparent h-fit text-2xl outline-home-yellow rounded-xl' placeholder='Description...' />
                        <textarea className='outline w-full p-2 bg-transparent min-h-56 text-2xl outline-home-yellow rounded-xl' placeholder='Your email...' />
                        <button className='py-4 bg-home-yellow rounded-xl text-2xl'>Submit now</button>
                    </form>
                </div>
            </div>
            <marquee behavior="scroll" direction="right" className='w-full py-8 bg-home-yellow '>
                Copyright    2024.All rights reserved
            </marquee>
        </div>
    )
}

export default Footer