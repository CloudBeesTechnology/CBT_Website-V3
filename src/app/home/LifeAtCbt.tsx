"use client";
import Image from "next/image";
import group from "../../assets/HomeSection/group/group.png";

export const LifeCBT = () => {
  return (
    <section className="screen-size my-10 md:my-20 center flex-col ">
      <h4 className="text_size_1 text-center">
        <span className="text-primary">Life</span> at CBT
      </h4>
      <p className="text-xl text-center my-5 max-w-screen-lg px-2">
        Experience a thriving community where expertise is recognized and
        innovation flourishes. Come along for a rewarding path of development
        and cooperation in the software industry.
      </p>
      <div className="my-10">
        <Image
          className="w-full object-cover"
          src={group}
          alt="group-image not found"
        />
      </div>
    </section>
  );
};
