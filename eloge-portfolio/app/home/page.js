import { BsThreeDots } from "react-icons/bs";

function HomePage() {
  return (
    <main className={khand.className}>
      <div className="bg-gradient-to-r from-home-gray from-50% to-home-yellow to-50% w-dvw h-dvh overflow-hidden">
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
        <div id='center' className='relative flex justify-center left-[6rem]'>
          <Image
           src="/assets/images/eloge-removebg-preview 2eloge.png"
           alt='home photo'
           width={472}
           height={363}
         //   layout="responsive"
           objectFit="cover"
           priority
           className="top-0 absolute"
          />
        </div>
         <div id='right' className='flex float-right'>
            <span>
            <BsThreeDots  className="text-white text-5xl mr-16"/>

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
