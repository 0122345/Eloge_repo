'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";
 

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div ref={sectionRef} className="w-full bg-home-service font-khand p-2 lg:p-4 flex flex-col lg:flex-row overflow-x-hidden h-[90dvh]" id="about">
      <div className="relative flex justify-center lg:justify-start lg:ml-[8vw] lg:mt-[10vh] mb-8 lg:mb-0 animate">
        <div className="hidden lg:flex w-[200px] lg:w-[250px] border-[10px] border-solid border-home-yellow h-[270px] lg:h-[320px]">
        </div>
        <div id="image-potrait" className="hidden lg:flex absolute top-[10px] lg:top-[-20px] left-[10px] lg:left-[20px] w-[200px] lg:w-[250px] z-10 h-[270px] lg:h-[320px] bg-home-yellow border-[8px] lg:border-[12px] border-solid border-white">
          <span id="image-holder" className="flex items-center justify-center w-full h-full">
            <Image
              src="/assets/images/elogeimage.png"
              alt='home photo'
              width={300}
              height={450}
              objectFit="contain"
              priority
              className="lazyload"
            />
          </span>
        </div>
      </div>
        <div className="w-full lg:w-[60%] flex flex-col lg:ml-[10vw] lg:mt-8  space-y-4">
          <h1 className="text-xl lg:text-2xl text-white font-semibold animate">About Me</h1>
            <motion.hr 
              variants={itemVariants} 
              className="w-24 lg:w-32 border-t-3 border-home-yellow my-2 lg:my-4 animate pb-4" 
            />
            <div className="flex space-x-3 lg:font-medium font-light">
            
            <p className="text-lg  lg:text-2xl  text-white w-full lg:max-w-[400px]  animate">
              A passionate designer with a love for crafting
              meaningful and visually stunning experiences.
              With a background, e.g. graphic design, digital
              Design etc , I thrive on bringing creativity to
              life through thoughtful design solutions.
          </p>
          <p className="text-lg lg:text-2xl text-white w-full  lg:max-w-[450px] animate">
            Whether it's creating captivating visuals or
            designing different user experiences, I'm dedicated
            to exceeding expectations and making a lasting impact.
            Let's collaborate and bring your vision to life.
          </p> 
         </div>
        <div className="flex flex-col sm:flex-row   pt-11 lg:pt-16 space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-11 animate">
            <Link href="#services"><span className='border border-home-yellow border-solid rounded-sm w-full sm:w-36 h-11 shadow-inner shadow-[#383636] flex items-center justify-center text-xl lg:text-2xl font-medium hover:bg-home-gray hover:text-home-yellow cursor-pointer bg-home-yellow text-white'>
              Hire Me
            </span>
            </Link>
            <Link href="#projects">
            <span className='border border-home-yellow border-solid rounded-sm w-full sm:w-44 h-11 shadow-inner shadow-[#383636] flex items-center justify-center text-xl lg:text-2xl font-medium text-home-yellow cursor-pointer hover:bg-home-yellow hover:text-home-gray'>
              Discover All
            </span>
            </Link>
            
          </div>
      </div>
    </div>
  );
};

export default About;