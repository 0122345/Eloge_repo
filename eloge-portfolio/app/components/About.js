'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <motion.main
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="flex flex-col lg:flex-row min-h-screen w-full bg-[#393939] font-khand p-4 lg:p-8 overflow-x-hidden"
    >
      <motion.div variants={itemVariants} id="container" className="relative flex justify-center lg:justify-start lg:ml-[8vw] lg:mt-[10vh] mb-8 lg:mb-0">
        <div className="w-[200px] lg:w-[250px] border-[10px] border-solid border-home-yellow h-[270px] lg:h-[320px]">
        </div>
        <div id="image-potrait" className="absolute top-[-10px] lg:top-[-20px] left-[10px] lg:left-[20px] w-[200px] lg:w-[250px] z-10 h-[270px] lg:h-[320px] bg-home-yellow border-[8px] lg:border-[12px] border-solid border-white">
          <span id="image-holder" className="flex items-center justify-center w-full h-full">
            <Image
              src="/assets/images/eloge-removebg-preview 2eloge.png"
              alt='home photo'
              width={300}
              height={450}
              objectFit="contain"
              priority
              className="lazyload"
            />
          </span>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full lg:w-[50%] flex flex-col lg:ml-[10vw] mt-8 lg:mt-[10vh]">
        <motion.div variants={itemVariants} className="flex flex-col my-5">
          <motion.h1 variants={itemVariants} className="text-2xl lg:text-3xl text-white font-semibold">About Me</motion.h1>
          <motion.hr variants={itemVariants} className="w-28 lg:w-36 border-t-4 border-home-yellow my-3 lg:my-5" />
          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-white w-full lg:max-w-[500px] pb-6 lg:pb-11">
            A passionate designer with a love for crafting
            meaningful and visually stunning experiences.
            With a background, e.g. graphic design, digital
            Design etc , I thrive on bringing creativity to
            life through thoughtful design solutions.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-white w-full lg:max-w-[450px]">
            Whether it's creating captivating visuals or
            designing different user experiences, I'm dedicated
            to exceeding expectations and making a lasting impact.
            Let's collaborate and bring your vision to life.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row my-12 lg:my-24 pt-8 lg:pt-16 space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-11">
            <span className='border border-home-yellow border-solid rounded-sm w-full sm:w-36 h-11 shadow-inner shadow-[#383636] flex items-center justify-center text-xl lg:text-2xl font-medium hover:bg-home-gray hover:text-home-yellow cursor-pointer bg-home-yellow text-white'>
              Hire Me
            </span>
            <span className='border border-home-yellow border-solid rounded-sm w-full sm:w-44 h-11 shadow-inner shadow-[#383636] flex items-center justify-center text-xl lg:text-2xl font-medium text-home-yellow cursor-pointer hover:bg-home-yellow hover:text-home-gray'>
              Discover All
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}