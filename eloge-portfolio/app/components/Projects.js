import { projects } from '@/public/utils'
import { buttons } from '@/public/utils'
import Image from 'next/image'

const Projects = () => {
    return (
      <section className='w-full bg-home-service p-8 md:px-16 min-h-screen'>
        <h1 className='font-khand text-5xl text-white mb-1'>Design Samples</h1>
        <hr className="flex justify-start w-[250px] border-t-4 border-home-yellow mt-0 mb-6 mx-auto lg:mx-0 sm:left-2" />
        {/*Buttons*/}
        <div className="grid grid-cols-3 grid-rows-2 gap-8 mt-4">
          {buttons.map((button, index) => (
            <button
              key={button.id || index}
              className='p-8 text-lg h-20 flex justify-center items-center rounded-sm font-khand text-home-yellow hover:text-white border-2 border-solid border-home-yellow hover:border-white'
            >
              {button.name}
            </button>
          ))}
        </div>
        <div className='w-full mt-8 gap-4 flex justify-center pt-4 flex-wrap'>
          {projects.map((item, index) => (
            <div key={item.id || index} className='w-full md:w-[48%] lg:w-[30%] hover'>
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
      </section>
    )
}

export default Projects