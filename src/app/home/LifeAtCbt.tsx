import Image from "next/image";
import group from "../../../public/assets/HomeSection/group/lifeAtCbt.png";

export const LifeCBT = () => {
  return (
    <section className="screen-size my-10 md:my-20 center flex-col ">
      <h4 className="title text-center">
        <span className="text-primary">Life</span> at CBT
      </h4>
      <p className="text-xl text-center para my-5 max-w-screen-lg px-2">
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
