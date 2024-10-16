"use client";
import React, { useEffect, useRef, useState } from "react";
import { frames } from "@/public/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import ImagePopup from "./ImagePopup";
import { imageRend } from "@/public/utils";  

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
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

  const handleImageClick = (title) => {
    const category = imageRend.find(cat => 
      cat.name.toLowerCase().includes(title.toLowerCase()) ||
      title.toLowerCase().includes(cat.name.toLowerCase())
    );
    //this was testing
    if (category) {
      setSelectedImages(category.images);
      setIsPopupOpen(true);}
      //console.log("Popup should open with images:", category.images);
    // } else {
    //   console.log("No matching category found for:", title);
    // }
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
          <motion.div
            key={item.title || `service-${i}`}
            className="w-full animate cursor-pointer"
            style={{ transitionDelay: `${i * 100}ms` }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageClick(item.title)}
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
              <div className="absolute inset-0 bg-blur-service hover:bg-hovering-blur transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl text-white font-bold text-center">
                  {item.title}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ImagePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        images={selectedImages}
      />
    </section>
  );
};

export default Services;