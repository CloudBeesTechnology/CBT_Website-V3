"use client";
import Image from "next/image";
import aboutUs from "../../../public/assets/AboutSection/HeaderImages/aboutUs.png";
import ourMission from "../../../public/assets/AboutSection/HeaderImages/ourMission.png";
import { Banner } from "@/components/Banner";
import Frontiers from "./frontiers";
import { employees } from "./employeesData";
import { useEffect, useState } from "react";
import CeoQuotesCard from "./CeoQuotesCard";

const About: React.FC = () => {
  const [rotate, setRotate] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  const aboutBannerText = (
    <>
      <div className="flex justify-center items-start space-x-10">
        {/* Empowering */}
        <div className="flex items-center space-y-1">
          <span className="text-white banner_title text-center tracking-wide">
            Unveiling CBT A Narrative In Progress
          </span>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Banner>
        <div className="absolute bg-blend-overlay flex items-center justify-center h-[80vh] lg:h-[60vh] px-2 text-white">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col items-center justify-center pb-24 space-y-5">
              <h2 className="title">{aboutBannerText}</h2>
              <h3
                className={` para_head text-white text-center font-light italic transition-all duration-[1000ms] ease-out ${rotate
                  ? "rotate-0 scale-100 opacity-100"
                  : "rotate-[18deg] scale-50 opacity-0"
                  }`}
              >
                <i> Weaving Words Bridging Worlds </i>
              </h3>
            </div>
          </div>
        </div>

      </Banner>

      <div className="flex flex-col lg:flex-row justify-around items-center p-6 rounded-lg screen-size">
        <div className="w-full lg:w-1/2 flex lg:justify-start sm:justify-center">
          <Image
            src={aboutUs}
            alt="logo"
            width={350}
            // height={450}
            className="max-w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center ">
          <h2 className="title mb-6 p-4">
            <span className="text-primary">About </span>
            <span className="text-dark_gray">Us</span>
          </h2>

          <p className="para text-gray">
            At CloudBees Tech, we don’t just deliver solutions we create
            pathways to your success. We connect your projects with innovative
            solutions, turning your ideas into reality. With a foundation built
            on trust, excellence, and reliability, our priority is your growth.
            Our clients have seen firsthand the benefits of our collaborative
            spirit and expertise. We know your industry inside out and stay
            ahead of trends to keep you in the lead. Partner with us, and
            experience the difference of a team dedicated to your success.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center  p-6 rounded-lg  screen-size">
        <h2 className="title mb-4 text-center">
          <span className="text-gray">Our </span>
          <span className="text-primary">Mission</span>
        </h2>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex flex-col justify-center  lg:p-6 text-center space-y-4">
            <h6 className="para_head font-medium text-gray">
              CloudBees Tech brings your ideas to life.
            </h6>
            <p className="para text-gray">
              Our mission is to deliver top-notch software solutions that spark
              innovation and drive success. We’re the bridge between your ideas
              and their potential, turning challenges into triumphs with
              creativity, trust, and a relentless commitment to excellence.
              Let’s make your next breakthrough our shared success!
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={ourMission}
              alt="ourMission"
              width={350}
              // height={450}
              className="rounded-lg max-w-full"
            />
          </div>
        </div>
      </div>
      <CeoQuotesCard />
      <Frontiers employees={employees} />
    </>
  );
};

export default About;
