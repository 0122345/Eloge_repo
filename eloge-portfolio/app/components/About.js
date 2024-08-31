import Image from "next/image";

export default  function About() {
   return(
    <main className="h-dvh w-full bg-[#393939]">
        {/* left */}
         <div className="w-[40dvw] h-dvh" >
            <div id="image-potrait" className="">
                <span id="image-holder" className="">
                    <Image
                      src="/assets/images/eloge-removebg-preview 2eloge.png"
                      alt='home photo'
                      width={185}
                      height={268}
                      objectFit="cover"
                      priority 
                    />
                </span>
            </div>
         </div>

         {/* right */}
         <div className="w-[60dvw] h-dvh"></div>
    </main>
   );
}