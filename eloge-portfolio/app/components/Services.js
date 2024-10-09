"use client";
import React, { useEffect, useRef } from "react";
import { frames } from "@/public/utils";
import Image from "next/image";

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

  return (
    <section
      ref={sectionRef}
      className="w-full h-full bg-home-gray font-khand lg:p-8 md:px-16 flex flex-col"
      id="services"
    >
      <h1 className="text-5xl text-white animate px-3">Services</h1>
      <hr className="w-24 h-2 lg:w-36 border-t-4 pl-2 border-home-yellow my-3 lg:my-5 animate" />
      <p className="mt-8 text-lg lg:text-2xl lg:font-semibold text-white animate h-full px-3">
        I offer a range of design services tailored to meet your needs and
        elevate your brand. These include graphic design for logos, branding,
        and marketing materials to intuitive UI/UX design for websites and
        mobile apps. I bring creativity and expertise to every project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 h-full">
        {frames?.map((item, i) => (
          <div
            key={item.alt || `service-${i}`}
            className="w-full animate"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative h-72 rounded-none overflow-hidden shadow-md p-8 flex items-center justify-center">
              <div className="absolute inset-0">
                <Image
                  src={item.img}
                  alt={item.alt || `Service ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute inset-0 bg-blur-service" />
              <span className="relative z-10 text-center">
                <h1 className="text-3xl text-home-yellow font-bold animate">
                  {item.title}
                </h1>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
