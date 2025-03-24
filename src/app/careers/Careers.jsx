"use client";

import Image from "next/image";
import CareerArrow from "../../assets/CarrersSection/careerArrow.svg";
import CareerImg from "../../assets/CarrersSection/hexagon-lines-QguI1dQX0c 1.png";

export default function Careers() {
  return (
    <div className="screen-size flex flex-col space-y-12 sm:space-y-14 my-14 p-2 w-full">
      <h2 className="text_size_1 text-center">
        <span className="text-primary">Job </span> Openings
      </h2>

      <div className=" relative flex-col center ">
        <Image
          src={CareerImg}
          alt="Career Image"
          className="max-sm:w-full max-w-lg"
        />
        <div className=" absolute sm:bottom-20 ">
          <h2 className="sm:text-2xl text-xl text-center">
            Stay tuned for more updates{" "}<br />
            <span className="text-primary"> Coming your way soon </span>
          </h2>
          <Image
            src={CareerArrow}
            alt="Career Image"
            className="mx-auto max-sm:w-[50px] mb-5"
            width={94}
            height={160}
          />
          <p>
            <a
              href="hari"
              className="text-blue-500 text-lg sm:text-xl underline hover:underline center"
            >
              Connect with us
            </a>
          </p>
        </div>
      </div>


    </div>
  );
}
