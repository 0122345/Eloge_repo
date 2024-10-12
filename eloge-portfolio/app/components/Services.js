"use client";
import React, { useEffect, useRef } from "react";
import { frames } from "@/public/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("animate-in", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate");
    elements?.forEach((el) => observer.observe(el));

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
    <section
      ref={sectionRef}
      className="w-full h-full bg-home-gray font-khand lg:p-8 md:px-16 flex flex-col"
      id="services"
    >
      <h1 className="pl-4 pt-10 text-xl lg:text-3xl text-white font-semibold animate">Services</h1>
      <motion.hr 
        variants={itemVariants} 
        className="pl-4 w-[80px] border-t-3 border-home-yellow m-4 lg:my-4 animate" 
      />
      <p className="mt-8 text-lg lg:text-2xl lg:font-semibold text-white animate h-full px-3">
        I offer a range of design services tailored to meet your needs and
        elevate your brand. These include graphic design for logos, branding,
        and marketing materials to intuitive UI/UX design for websites and
        mobile apps. I bring creativity and expertise to every project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 h-full">
        {frames?.map((item, i) => (
          <div
            key={item.title || `service-${i}`}
            className="w-full animate"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative h-72 rounded-none overflow-hidden shadow-md">
              <Image
                src={item.img}
                alt={item.title || `Service ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-blur-service hover:bg-hovering-blur" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl text-white font-bold text-center">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;