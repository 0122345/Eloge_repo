'use client';
import React, { useEffect, useRef } from "react";
import { frames } from "@/public/utils";
import Image from 'next/image';

const Services = () => {
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
    <section ref={sectionRef} className="w-full h-full bg-home-gray font-khand lg:p-8 md:px-16 flex flex-col">
      <h1 className="text-5xl text-white animate">Services</h1>
      <hr className="w-28 h-2 lg:w-36 border-t-4 border-home-yellow my-3 lg:my-5 animate" />
      <p className="mt-8 text-xl text-white animate">
        I offer a range of design services tailored to meet your needs and
        elevate your brand. These include graphic design for logos, branding, and
        marketing materials to intuitive UI/UX design for websites and mobile
        apps. I bring creativity and expertise to every project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {frames?.map((item, i) => (
          <div key={item.alt || `service-${i}`} className='w-full animate' style={{transitionDelay: `${i * 100}ms`}}>
            <div className='relative h-72 rounded-none overflow-hidden shadow-md p-8'>
              <Image src={item.img} alt={item.alt || `Service ${i + 1}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
