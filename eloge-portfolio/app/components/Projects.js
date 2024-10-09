"use client";
import { projects } from "@/public/utils";
import { buttons } from "@/public/utils";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const sectionRef = useRef(null);

  const handleButtonClick = (buttonId) => {
    const button = buttons.find((btn) => btn.id === buttonId);
    if (button && button.image) {
      setSelectedImages(button.image);
    } else {
      setSelectedImages(null);
    }
  };

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
      className="w-full bg-home-service p-4 sm:p-8 md:px-16 min-h-screen"
      id="projects"
    >
      <h1 className="font-khand text-5xl text-white mb-1 animate">
        Design Samples
      </h1>
      <hr className="flex justify-start w-[250px] border-t-4 border-home-yellow mt-0 mb-6 mx-auto lg:mx-0 sm:left-2 animate" />

      <div className="flex lg:gap-[20px] gap-3 flex-wrap mt-4 w-full h-full justify-center items-center">
        {buttons.map((button, index) => (
          <button
            onClick={() => handleButtonClick(button.id)}
            key={button.id || index}
            className="p-1 text-lg w-[136px] lg:h-11 h-20 flex justify-center items-center rounded-md font-khand text-home-yellow hover:text-black border-2 border-solid border-home-yellow hover:border-white animate hover:bg-home-yellow"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {button.name}
          </button>
        ))}
      </div>

      {selectedImages && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {selectedImages.map((image, index) => (
              <div
                key={index}
                className="relative h-40 sm:h-44 w-full animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  data-sizes="auto"
                  src={image.img}
                  alt={image.title}
                  fill
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setSelectedImages(null)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ×
          </button>
        </div>
      )}

      <div className="w-full mt-8 gap-4 flex flex-wrap justify-center">
        {(selectedImages || projects).map((item, index) => (
          <div
            key={item.id || index}
            className="w-full sm:w-[48%] lg:w-[30%] mb-4 hover animate"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative h-64 sm:h-72 hover:bg-home-yellow overflow-hidden shadow-md">
              <Image
                data-sizes="auto"
                src={item.img || item.image}
                alt={item.alt || item.title || "Project image"}
                fill
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
