"use client";
import { imageRenderings } from "@/public/utils";
import { useState, useEffect, useRef, useMemo } from "react";

const ITEMS_PER_PAGE = 6;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Designs');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = imageRenderings.find(cat => cat.name === selectedCategory)?.images || [];
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="w-full bg-home-service p-4 sm:p-8 md:px-16 min-h-screen" id="projects">
      <h1 className="pl-4 text-xl lg:text-3xl text-white font-semibold">Design Samples</h1>
      <hr className="pl-4 w-[140px] lg:w-[200px] border-t-3 border-home-yellow m-4 lg:my-4" />

      <div className="flex lg:gap-[20px] gap-3 flex-wrap mt-4 w-full h-full justify-center items-center">
        {imageRenderings.map((category) => (
          <button
            onClick={() => {
              setSelectedCategory(category.name);
              setCurrentPage(1);
            }}
            key={category.id}
            className={`p-1 text-lg w-[136px] lg:h-11 h-20 flex justify-center items-center rounded-md font-khand text-home-yellow border-2 border-solid border-home-yellow ${selectedCategory === category.name ? 'bg-home-yellow text-black' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="w-full mt-8 gap-4 flex flex-wrap justify-center">
        {paginatedProjects.map((item, index) => (
          <div key={item.img} className="w-full sm:w-[48%] lg:w-[30%] mb-4 hover">
            <div className="relative h-64 sm:h-72 hover:bg-home-yellow overflow-hidden shadow-md">
              <img
                src={`/${item.img}`}
                alt={item.title || "Project image"}
                className="object-cover w-full h-full"
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