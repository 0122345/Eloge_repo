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

  return (
    <div ref={sectionRef} className="w-full min-h-screen bg-home-gray font-khand p-8 md:px-16 flex flex-col">
      <h1 className="text-5xl text-white animate">Services</h1>
      <hr className="w-28 lg:w-36 border-t-4 border-home-yellow my-3 lg:my-5 animate" />
      <div className="mt-8 text-xl text-white animate">
        I offer a range of design services tailored to meet your needs and
        elevate your brand. This include graphic design for logos, branding, and
        marketing materials to intuitive UI/UX design for websites and mobile
        apps, I bring creativity and expertise to every project.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Array.isArray(frames) && frames.map((item, i) => (
          <div key={i} className='w-full animate' style={{transitionDelay: `${i * 100}ms`}}>
            <div className='relative h-72 rounded-xl overflow-hidden shadow-md p-8'>
              <Image src={item.img} alt={item.alt || `Service ${i + 1}`} fill objectFit="cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
