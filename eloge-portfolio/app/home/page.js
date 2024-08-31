import { BsThreeDots } from "react-icons/bs";
function HomePage() {
  return (
    <main className='font-khand w-full'>
      <div className="bg-gradient-to-r from-home-gray from-50% to-home-yellow to-50% w-dvw h-dvh">
        <div id="left" className="flex flex-col text-white justify-start w-[50%]">
          <span className="">
            <p className="">
               Hello
            </p>
            <p className="">
              I'M ELOGE CHRIS
            </p>
            <p className="">
            Welcome to my creative world, 
            a passionate designer fueled 
            by a relentless drive for innovation 
            and a love for crafting captivating 
            experiences.
            </p>
          </span>

          {/* button */}
          <span className=''>
             Hire Me
          </span>
        </div>
        <div id='center' className=''>
          <Image
           src="/assets/images/eloge-removebg-preview 2eloge.png"
           alt='home photo'
           width={527}
           height={663}
         //   layout="responsive"
           objectFit="cover"
           priority
           className="flex justify-center top-0 absolute"
          />
        </div>
         <div id='right' className='flex float-right'>
            <span>
            <BsThreeDots  className="text-white text-9xl right-20 "/>

            </span>

            </div>
      </div>
    </main>
  );
}

export default HomePage;

import { Khand } from 'next/font/google';
import Image from 'next/image';

const khand = Khand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
