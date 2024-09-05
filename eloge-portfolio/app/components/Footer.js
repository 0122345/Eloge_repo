'use client'
import { footerDetails } from '@/public/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion"

const Footer = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    } else {
                        entry.target.classList.remove('animate-in')
                    }
                })
            },
            {
                threshold: 0.1
            }
        );

        const elements = sectionRef.current.querySelectorAll('.animate')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    }

    return (
        <motion.div
            ref={sectionRef}
            className='w-full min-h-screen font-khand text-5xl text-white bg-home-gray'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1 variants={itemVariants} className='mx-8 md:mx-16'>Contact me</motion.h1>
            <hr className="w-[180px] lg:w-[200px] border-t-4 border-home-yellow lg:mx-14 mx-11 animate" />
            <div className='flex flex-col md:flex-row px-8 md:px-16 py-16'>
                <motion.div className='flex flex-col gap-8 w-full md:w-1/2 p-8' variants={containerVariants}>
                    {footerDetails.map((item, i) => (
                        <motion.div key={i} className='flex gap-4 items-center w-fit lg:text-2xl text-xl' variants={itemVariants}>
                            <div className='size-8 relative'>
                                <Image src={item.logo} alt={item.title} className='object-contain' fill />
                            </div>
                            <Link href={item.link || ''}>{item.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className='p-8 w-full md:w-1/2' variants={containerVariants}>
                    <form action="" className='w-full flex flex-col gap-8 no-underline'>
                        <motion.div className='w-full flex gap-8' variants={itemVariants}>
                            <input type="text" className='outline w-full p-2 bg-transparent h-fit text-2xl outline-home-yellow rounded-xl' placeholder='Your name...' />
                            <input type="email" className='outline w-full p-2 bg-transparent h-fit text-2xl outline-home-yellow rounded-xl' placeholder='Your email...' />
                        </motion.div>
                        <motion.input variants={itemVariants} type="text" className='outline w-full p-2 bg-transparent h-fit text-2xl outline-home-yellow rounded-xl' placeholder='Description...' />
                        <motion.textarea variants={itemVariants} className='outline w-full p-2 bg-transparent min-h-56 text-2xl outline-home-yellow rounded-xl' placeholder='Your feedback...' />
                        <motion.button variants={itemVariants} className='py-4 bg-home-yellow rounded-xl text-2xl'>Submit now</motion.button>
                    </form>
                </motion.div>
            </div>
            <motion.div variants={itemVariants} className='w-full py-8 bg-home-yellow'>
                <marquee behavior="scroll" direction="right">
                    Copyright 2024. All rights reserved
                </marquee>
            </motion.div>
        </motion.div>
    )
}

export default Footer