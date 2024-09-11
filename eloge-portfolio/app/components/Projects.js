"use client"
import { projects } from '@/public/utils'
import { buttons } from '@/public/utils'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [selectedImages, setSelectedImages] = useState(null)
  const sectionRef = useRef(null)

  const handleButtonClick = (buttonId) => {
    const button = buttons.find(btn => btn.id === buttonId)
    if (button && button.image) {
      setSelectedImages(button.image)
    } else {
      setSelectedImages(null)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('animate-in', entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className='w-full bg-home-service p-8 md:px-16 h-[170dvh] relative'>
      <h1 className='font-khand text-5xl text-white mb-1 animate'>Design Samples</h1>
      <hr className="flex justify-start w-[250px] border-t-4 border-home-yellow mt-0 mb-6 mx-auto lg:mx-0 sm:left-2 animate" />
      
      {/* Buttons */}
      <div className="grid grid-cols-3 grid-rows-2 gap-8 mt-4">
        {buttons.map((button, index) => (
          <button
            onClick={() => handleButtonClick(button.id)}
            key={button.id || index}
            className='p-8 text-lg h-20 flex justify-center items-center rounded-sm font-khand text-home-yellow hover:text-white border-2 border-solid border-home-yellow hover:border-white animate'
            style={{transitionDelay: `${index * 100}ms`}}
          >
            {button.name}
          </button>
        ))}
      </div>

      {/* Foreground page with images */}
      {selectedImages && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4 p-8">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative h-48 w-48 animate" style={{transitionDelay: `${index * 100}ms`}}>
                <Image
                  src={image.img}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
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

      {selectedImages ? (
        <div className='w-full mt-4 gap-4 flex justify-center pt-4 flex-wrap'>
          {selectedImages.map((item, index) => (
            <div key={index} className='w-full md:w-[48%] lg:w-[30%] hover animate' style={{transitionDelay: `${index * 100}ms`}}>
              <div className='relative min-h-72 rounded-xl overflow-hidden shadow-md p-8'>
                <Image 
                  src={item.img} 
                  alt={item.title || 'Project image'} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Display the original projects when no button is clicked
        <div className='w-full mt-8 gap-4 flex justify-center pt-4 flex-wrap'>
          {projects.map((item, index) => (
            <div key={item.id || index} className='w-full md:w-[48%] lg:w-[30%] hover animate' style={{transitionDelay: `${index * 100}ms`}}>
              <div className='relative min-h-72 rounded-xl overflow-hidden shadow-md p-8'>
                <Image 
                  src={item.img} 
                  alt={item.alt || 'Project image'} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects