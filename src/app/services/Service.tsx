// pages/service.tsx
import InfoCard from "@/components/InfoCard";
import Image from "next/image";
import icon1 from "../../assets/ServiceSection/digital-marketing.png";
import icon2 from "../../assets/ServiceSection/UI-UX.png";
import icon3 from "../../assets/ServiceSection/micro-saas.png";
import icon4 from "../../assets/ServiceSection/native-cross.png";
import icon5 from "../../assets/ServiceSection/aws-cloud.png";
import icon6 from "../../assets/ServiceSection/devSecOps.png";
import icon7 from "../../assets/ServiceSection/ai-react.png";
import icon8 from "../../assets/ServiceSection/it-support.png";
import icon9 from "../../assets/ServiceSection/cyber-security.png";
import icon10 from "../../assets/ServiceSection/software-testing.png";

export default function Service() {
  const cardData = [
    { iconImg: icon1, title: "AI Generative Digital Marketing", description: "Digital marketing is the promotion of brands to connect with potential customers using the internet and other forms of digital communication." },
    { iconImg: icon2, title: "UI/UX & Wireframe Design", description: "A wireframe is a simple diagram that represents the skeleton of a website or an application's user interface (UI) and core functionality." },
    { iconImg: icon3, title: "Micro SaaS App Development", description: "Micro SaaS (Software as a Service) App Development involves creating small, focused web applications that solve a specific problem or meet a particular need." },
    { iconImg: icon4, title: "Mobile Native & Cross Platform", description: "Mobile app development for both native and cross-platform solutions, ensuring compatibility across all devices." },
    { iconImg: icon5, title: "AWS/Azure Cloud", description: "Cloud computing services including data storage, servers, databases, networking, and software." },
    { iconImg: icon6, title: "DevSecOps", description: "Integrating efficient CI/CD DevOps services into your development pipeline to improve productivity and security." },
    { iconImg: icon7, title: "AI Powered Digital Publishing", description: "Leveraging AI technologies to automate and optimize various aspects of digital publishing." },
    { iconImg: icon8, title: "IT Support & Consulting", description: "Providing specialized support services to businesses to assist with critical operational functions." },
    { iconImg: icon9, title: "Cybersecurity & Code Vulnerability", description: "Protecting internet-connected systems from cyber threats and ensuring secure code development." },
    { iconImg: icon10, title: "Software Testing", description: "Our Quality Team assesses software effectiveness through manual and automated testing." },
  ];

  return (
    <div className="screen-size  center flex-col text-center sm:px-6 py-12">
      <h2 className="text_size_1 text-center mb-6">
        <span className="text-primary">Helping </span> you grow at every step
      </h2>
      <p className="lg:max-w-8/12 text-gray my-4 para px-2">
      Unlock the full potential of your business with CloudBees Tech. Our expert team evaluates your business, processes, and technology to provide tailored recommendations that enhance your competitive edge. Whether you need Business Specific Application Development, CMS & e-commerce Applications, Mobile Applications, Business.
      </p>
      <p className="lg:max-w-8/12 text-gray mb-10 para px-2 ">
      Applications, or Blockchain Applications, our niche experts deliver unparalleled customer satisfaction to drive your business forward.      </p>
      <div className="grid content-center mt-10 p-2 place-items-center w-full space-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <InfoCard key={index} iconImg={card.iconImg} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}
