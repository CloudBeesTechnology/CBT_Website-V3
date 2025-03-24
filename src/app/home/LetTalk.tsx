"use client";
import Link from "next/link";
import Image from "next/image";
import animation from "../../assets/HomeSection/Gif/Animation.gif";

export const LetTalk = () => {
  return (
    <section className="screen-size flex w-full  h-full flex-col items-center justify-center text-center my-10 sm:my-10 ">
        <div className="relative">

    <Image src={animation}
         alt="Loading animation" 
         width={550} 
         height={250} 
         className="  " />

        {/* Content Box */}
        <div className="absolute top-20 sm:top-40 left-1/2 w-full sm:w-2xl transform -translate-x-1/2 text-center max-w-2xl ">
          
          <h2 className="text-2xl sm:text-4xl font-semibold leading-snug text-gray  mb-5 sm:mb-10">
            <span className="text-primary">Ready</span> to craft digital
            <br />
            experiences that excite & inspire
          </h2>

          <Link href="/contact" className="btn-1">
              Let's Talk   
          </Link>

        </div>
        </div>
    </section>
  );
};
