'use client'
import { useState, useEffect, useRef } from 'react';
import Image from "next/legacy/image";

export default function HomePage() {
  const [showTooltip, setShowTooltip] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('animate-in', entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className='font-khand w-full overflow-hidden' ref={sectionRef}>
      <div className="bg-gradient-to-t from-home-yellow from-50% to-home-gray to-50% w-full min-h-screen lg:h-screen lg:bg-gradient-to-r lg:from-home-gray lg:from-50% lg:to-home-yellow lg:to-50%">
        <div className="flex flex-col lg:flex-row">
          <div id="left" className="flex flex-col text-white lg:justify-start  w-full lg:w-1/2 p-10 lg:pt-0 pt-16 ">
            <span className="space-y-2 lg:my-32 lg:pt-7 justify-center items-center mt-4">
              <p className="text-3xl lg:text-4xl font-light animate">
                Hello
              </p>
              <p className="text-home-yellow text-5xl lg:text-6xl font-bold animate">
                I'M ELOGE CHRIS
              </p>
              <p className="text-lg lg:text-2xl font-medium animate">
                Welcome to my creative world, 
                a passionate designer fueled 
                by a relentless drive for innovation 
                and a love for crafting captivating 
                experiences.
              </p>
            </span>
            <span 
              className='lg:bottom-20 bottom-[-60px] relative border border-home-yellow border-solid rounded-md lg:w-32 w-full sm:w-44 h-11 shadow-inner shadow-[#383636] flex items-center justify-center text-xl lg:text-2xl font-semibold text-home-yellow cursor-pointer hover:bg-home-yellow hover:text-home-gray animate'
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Hire Me
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-white text-home-gray rounded-md shadow-lg text-sm tooltip-animation w-[220px]">
                  <p>📧 elogechris4@gmail.com or elogechris3@gmail.com</p>
                </div>
              )}
            </span>
          </div>
                <div id='center' className='relative w-full lg:w-1/2 mt-2 lg:mt-0 animate lg:flex lg:justify-center lg:items-center lg:h-screen'>
                  <div className="lg:absolute lg:inset-0 lg:flex lg:justify-center lg:items-center">
                    <Image
                      src="/assets/images/elogeimage.png"
                      alt='home photo'
                      width={600}
                      height={675}
                      layout="intrinsic"
                      objectFit="contain"
                      priority 
                      className="lazyload mx-auto lg:max-w-[90%] lg:h-auto"
                    />
                  </div>
                </div>
        </div>
      </div>
    </main>
  );
}