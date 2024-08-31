function HomePage() {
  return (
    <main className={khand.className}>
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
          <span></span>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
import { Khand } from 'next/font/google';

const khand = Khand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
