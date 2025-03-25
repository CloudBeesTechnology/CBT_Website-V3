"use client";
import { ProgressDetails } from "./ProgressDetails";
export default function Progress () {
  return (
   
      <section className="flex justify-evenly  bg-[#FFFCF2]  p-1 items-center flex-wrap gap-2  rounded-lg ">
        {ProgressDetails.map((value,i)=>{
          return(
            <div key={i} className="center  flex-col space-y-4 w-full max-w-[350px] h-[130px] text-center min-[761px]:border-r border-[#909090] nth-of-type-[4]:border-none ">
        <h5 className="text-5xl font-semibold gray">{value.count}</h5>
          <p className="title_2 gray">{value.topic}</p>
        </div>
          )
        })}
      </section>
  );
}
