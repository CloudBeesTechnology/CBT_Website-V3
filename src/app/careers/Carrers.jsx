"use client";

import Image from "next/image";
import CarrerArrow from "../../assets/CarrersSection/careerArrow.svg";

export default function Carrers() {
  return (
    <div className="screen-size flex flex-col space-y-12 sm:space-y-14 my-14 p-2 w-full">
      <h2 className="text_size_1 text-center">
        <span className="text-primary">Job </span> Openings
      </h2>

      <div className="center">
        <div className="text-center carrer_bg">
          <div className="mt-32 space-y-6">
            <h2 className="carrer_text text-center">
              Stay tuned for more updates{" "}<br/>
              <span className="text-primary"> Coming your way soon </span>
            </h2>
            <Image
              src={CarrerArrow}
              alt="Career Image"
              className="mx-auto"
              width={94}
              height={160}
            />
            <p>
              <a
                href="hari"
                className="text-blue-500 underline carrer_link_text hover:underline"
              >
                Connect with us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
