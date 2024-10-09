'use client';
import { useState, useEffect } from "react";
import { BsThreeDots, BsX } from "react-icons/bs"; 
import Link from "next/link";

function Nav({ isHomePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      
      <main className="lg:hidden flex flex-col items-end top-3 right-14 absolute">
        <div
          className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          onClick={toggleMenu}
        >
          <BsThreeDots className="text-8xl cursor-pointer" />
        </div>
        {isOpen && (
          <nav className="absolute z-20 flex flex-col items-start text-lg shadow-lg mt-2 rounded-bl-md rounded-tr-md bg-blur w-[250px] font-semibold text-home-yellow transition-all duration-300 ease-in-out transform">
            <div className="flex justify-between w-full p-2">
              <span className="text-xl">Navigate with Us</span>
              <BsX className="text-2xl cursor-pointer" onClick={toggleMenu} />
            </div>
            <ul className="pl-4 space-y-6">
              <li>
                <a href="/" onClick={() => setIsOpen(false)}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
              </li>
              <li>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
              </li>
              <li>
                <a href="#footer" onClick={() => setIsOpen(false)}>Contact</a>
              </li>
            </ul>
          </nav>
        )}
      </main>

      
      {!isHomePage && (  
        <nav className={`hidden lg:flex top-3 left-14 absolute transition-all duration-300 border border-solid w-[380px] h-[50px] rounded-md text-white font-medium  ml-11 z-30 items-center justify-center ${isSticky ? 'sticky bg-blur' : ''}`}>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#footer">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Nav;
