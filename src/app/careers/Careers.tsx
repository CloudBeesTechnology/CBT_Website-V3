"use client";
import Image from "next/image";
import CareerArrow from "../../../public/assets/CarrersSection/mdi_arrow-up-bold.svg";
import CareerImg from "../../../public/assets/CarrersSection/hexagon-lines-QguI1dQX0c 1.png";

export default function Careers() {
  return (
    <div className="screen-size flex flex-col space-y-12 sm:space-y-14 my-14 p-2 w-full">
      <h2 className="title text-center">
        <span className="text-primary">Job </span> Openings
      </h2>

      <div className=" relative flex-col center ">
        <Image
          src={CareerImg}
          alt="Career Image"
          className="max-sm:w-full max-w-sm"
        />
        <div className=" absolute sm:bottom ">
          <h2 className="para_head text-center">
            Stay tuned for more updates{" "}<br />
            <span className="text-primary"> Coming your way soon </span>
          </h2>
          <div className="">
          <Image
            src={CareerArrow}
            alt="Career Image"
            className="mx-auto max-sm:w-[50px] my-5"
            width={50}
            // height={160}
          />
          </div>
          <p>
            <a
              href="/contact"
              className="text-blue-500 para underline hover:underline center mb-2"
            >
              Connect with us
            </a>
          </p>
        </div>
      </div>


    </div>
  );
}
