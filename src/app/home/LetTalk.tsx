import Link from "next/link";
import Image from "next/image";
import animation from "../../assets/HomeSection/Gif/cube-loader-bcbluzFFSr 1.png";

export const LetTalk = () => {
  return (
    <section className="screen-size flex w-full h-full flex-col items-center justify-center text-center mb-10 sm:my-10 ">
        <div className="relative w-full center">

    <Image src={animation}
         alt="Loading animation" 
         width={300} 
         height={250} 
         className=" max-sm:w-[220px] animate-spin" />

        {/* Content Box */}
        <div className="absolute sm:top-20 left-1/2 w-full max-sm:w-full md:w-2xl transform -translate-x-1/2 text-center max-w-2xl ">
          
          <h2 className="text-2xl sm:text-[32px] font-semibold leading-snug text-gray mb-5 sm:mb-10">
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
