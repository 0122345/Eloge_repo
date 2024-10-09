"use client";
import { projects, buttons } from "@/public/utils";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Designs');
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const filteredProjects = useMemo(() => {
    const categoryButton = buttons.find(btn => btn.name === selectedCategory);
    return categoryButton ? categoryButton.image : projects;
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("animate-in", entry.isIntersecting);
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll(".animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section ref={sectionRef} className="w-full bg-home-service p-4 sm:p-8 md:px-16 min-h-screen" id="projects">
      <h1 className="pl-4 text-xl lg:text-3xl text-white font-semibold animate">Design Samples</h1>
      <motion.hr className="pl-4 w-[140px] lg:w-[200px] border-t-3 border-home-yellow m-4 lg:my-4 animate" />

      <div className="flex lg:gap-[20px] gap-3 flex-wrap mt-4 w-full h-full justify-center items-center">
        {buttons.map((button) => (
          <button
            onClick={() => handleCategoryChange(button.name)}
            key={button.id}
            className={`p-1 text-lg w-[136px] lg:h-11 h-20 flex justify-center items-center rounded-md font-khand text-home-yellow hover:text-black border-2 border-solid border-home-yellow hover:border-white animate ${
              selectedCategory === button.name ? 'bg-home-yellow text-black' : ''
            }`}
          >
            {button.name}
          </button>
        ))}
      </div>

      <div className="w-full mt-8 gap-4 flex flex-wrap justify-center">
        {paginatedProjects.map((item, index) => (
          <div key={item.img} className="w-full sm:w-[48%] lg:w-[30%] mb-4 hover animate">
            <div className="relative h-64 sm:h-72 hover:bg-home-yellow overflow-hidden shadow-md">
              <Image
                src={item.img}
                alt={item.title || "Project image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={index < 3}
              />
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between mt-4">
          <button
            className="w-[100px] h-[43px] bg-home-yellow rounded-md disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-white">Page {currentPage} of {totalPages}</span>
          <button
            className="w-[100px] h-[43px] bg-home-yellow rounded-md disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;