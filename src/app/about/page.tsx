"use client";
import Image from "next/image";
import aboutUs from "../../assets/AboutSection/HeaderImages/aboutUs.png";
import ourMission from "../../assets/AboutSection/HeaderImages/ourMission.png";
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
          <span className="text-white text_size_1 ">
            Unveiling CBT a Narrative in Progress
          </span>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Banner aboutBannerText={aboutBannerText} rotate={rotate} />

      <div className="flex flex-col lg:flex-row justify-around items-center p-6 rounded-lg screen-size">
        <div className="w-full lg:w-1/2 flex lg:justify-start sm:justify-center">
          <Image
            src={aboutUs}
            alt="logo"
            width={400}
            height={450}
            className="max-w-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center ">
          <h2 className="title_4 mb-6 p-4">
            <span className="text-primary">About </span>
            <span className="text-dark_gray">Us</span>
          </h2>

          <p className="text-lg text-gray">
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
        <h2 className="title_4 mb-4 text-center">
          <span className="text-gray">Our </span>
          <span className="text-primary">Mission</span>
        </h2>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex flex-col justify-center  lg:p-6 text-center space-y-4">
            <h6 className="title_5 text-gray">
              CloudBees Tech brings your ideas to life.
            </h6>
            <p className="text-lg text-gray">
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
              width={400}
              height={450}
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
