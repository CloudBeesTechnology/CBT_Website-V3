import FeatureCard from "@/components/FeatureCard";
import img1 from "../../assets/project/AWE_WEBSITE.png";
import img2 from "../../assets/project/HR_PORTAL.png";
import img3 from "../../assets/project/EMP_PORTAL.png";
import img4 from "../../assets/project/lepondy (1).png";
import img5 from "../../assets/project/POS.png";
import img6 from "../../assets/project/E_FISHING.png";
import img7 from "../../assets/project/ALADDIN.png";
import img8 from "../../assets/project/DOPOTLUCK.png";
import img9 from "../../assets/project/DOHOME_FOOD.png";
import img10 from "../../assets/project/SPRING.png";
import img11 from "../../assets/project/B2V.png";
import img12 from "../../assets/project/SENTHUR.png";

import client1 from "../../assets/HomeSection/ClientLogos/le.png";
import client2 from "../../assets/HomeSection/ClientLogos/clLogo-10.png";
import client3 from "../../assets/HomeSection/ClientLogos/e-Fiching-color.png";
import client4 from "../../assets/HomeSection/ClientLogos/DoHome-color.png";
import client5 from "../../assets/HomeSection/ClientLogos/niche.png";
import client6 from "../../assets/HomeSection/ClientLogos/svg.png";
import client7 from "../../assets/HomeSection/ClientLogos/clLogo-7.png";
import client8 from "../../assets/HomeSection/ClientLogos/sn-color.png";
import client9 from "../../assets/HomeSection/ClientLogos/B2V 1 1.png";
import client10 from "../../assets/HomeSection/ClientLogos/do-color.png";

export default function Project() {
  const features = [
    {
      id: 1,
      title: "AWE Website",
      description:
        "Our platform ensures a seamless experience with user friendly navigation, expert insights, or innovative tools Whether you're here to explore, learn, or connect, we are committed to making your journey smooth and valuable.",
      imageSrc: img1,
      clientLogo:client2,
    },
    {
      id: 2,
      title: "AWE HR PORTAL",
      description:
        "HRMS portal is designed to streamline and automate HR processes, making workforce management more efficient and effective. It serves as a centralized platform for employee records, payroll, recruitment, performance tracking, and more.",
      imageSrc: img2,
      clientLogo:client2,
    },
    {
      id: 3,
      title: "AWE Employee PORTAL",
      description:
        "An Employee Portal is a centralized platform that provides employees with easy access to essential work-related information and self-service tools. It allows users to view their payroll details, request leave, track attendance, access company policies, and communicate with HR.",
      imageSrc: img3,
      clientLogo:client2,
    },
    {
      id: 4,
    //   title: "HRMS Products",
      description:
        "A food ordering website allows users to browse menus, place orders, and get meals delivered to their doorstep with ease. It provides a seamless experience by offering multiple restaurant options, secure payment methods, and real-time order tracking. Customers can customize their meals, schedule deliveries, and access exclusive discounts or offers.",
      imageSrc: img4,
      clientLogo:client1,
    },
    // {
    //   id: 5,
    //   title: "POS",
    //   description:
    //     "Mobile POS systems are ideal for retail stores, restaurants, and on-the-go businesses, streamlining operations and enhancing profitability. Let me know if you need adjustments",
    //   imageSrc: img5,
    // //   clientLogo:client1,
    // },
    {
      id: 5,
    //   title: "HRMS Products",
      description:
        "eTournament Fishing is a mobile tournament fishing app that can be used to organize any fishing event. Using your mobile device, go to the app store and download eTournament Fishing for free and take your first step in experiencing the POWER of total control from the palm of your hand!",
      imageSrc: img6,
      clientLogo:client3,
    },
    {
      id: 6,
    //   title: "HRMS Products",
      description:
        "Discover the power of seamless textile networking on Aladdin365. Connect with industry experts, thought leaders, and peers from around the world. Forge collaborations, share insights, and unlock new opportunities in the textile industry.",
      imageSrc: img7,
      clientLogo:client7,
    },
    {
      id: 7,
    //   title: "HRMS Products",
      description:
        "DoPotluck is a planner app, with features specially designed keeping your organising needs in mind.",
      imageSrc: img8,
      clientLogo:client10,
    },
    {
      id: 8,
    //   title: "HRMS Products",
      description:
        "Interactive platform for home chefs to manage their customers by easily publishing their menu , pick up times and accepting/rejecting order.",
      imageSrc: img9,
      clientLogo:client4,
    },
    // {
    //   id: 9,
    // //   title: "HRMS Products",
    //   description:
    //     "Springnet Technology is a team of developers and designers devoted to our commitments, providing results, and striving for the highest quality.",
    //   imageSrc: img10,
    //   clientLogo:client8,
    // },
    {
      id: 9,
    //   title: "HRMS Products",
      description:
        "Access resources and guides to help you excel in your internship and future career.our platform offers a wealth of knowledge and tools to help you thrive during your internship and chart a course toward a prosperous career.",
      imageSrc: img11,
      clientLogo:client9,
    },
    {
      id: 10,
    //   title: "HRMS Products",
      description:
        "Senthur Velavan Groups real estate division excels in developing premium residential and commercial properties. They are committed to quality, innovation, and customer satisfaction in every project.",
      imageSrc: img12,
      clientLogo:client6,
    },
  ];

  return (
    <div className="screen-size flex flex-col space-y-12 sm:space-y-14 my-14 p-3 w-full">
        <h2 className="title text-center ">
        <span className="text-primary">Our </span> Projects
      </h2>
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} isEven={feature.id % 2 === 0} />
      ))}
    </div>
  );
}
