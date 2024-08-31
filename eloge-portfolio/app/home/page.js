import { BsThreeDots } from "react-icons/bs";

 export default function HomePage() {
  return (
    <main className='font-khand w-full overflow-hidden'>
      <div className="bg-gradient-to-r from-home-gray from-50% to-home-yellow to-50% w-dvw h-dvh">
        <div id="left" className="flex flex-col text-white justify-start w-[50%]">
          <span className="w-[60%] h-[65%] mx-20 space-y-2 my-32">
            <p className="text-4xl font-light">
               Hello
            </p>
            <p className="text-home-yellow text-6xl font-bold">
              I'M ELOGE CHRIS
            </p>
            <p className="text-xl font-light">
            Welcome to my creative world, 
            a passionate designer fueled 
            by a relentless drive for innovation 
            and a love for crafting captivating 
            experiences.
            </p>
          </span>

          {/* button */}
          <span className='mx-20 top-[-62px] relative border border-home-yellow border-solid w-36 h-11 shadow-inner  shadow-[#383636] flex items-center justify-center text-2xl font-medium text-home-yellow cursor-pointer hover:bg-home-yellow hover:text-home-gray'>
             Hire Me
          </span>
        </div>
        <div id='center' className='flex right-0'>

           <span className="top-4 flex justify-end absolute float-right right-2"> 
            <BsThreeDots  className="text-white text-6xl mr-16"/>
            </span>
          <Image
           src="/assets/images/eloge-removebg-preview 2eloge.png"
           alt='home photo'
           width={595}
           height={668}
           objectFit="cover"
           priority 
           className="absolute top-[-85px] flex justify-end float-right left-[34pc]"
          />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";