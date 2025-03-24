"use client";
import InfoCard from "@/components/InfoCard";
import Image from "next/image";
import icon1 from "../../assets/ServiceSection/digital-marketing.png";
import icon2 from "../../assets/ServiceSection/UI-UX.png";
import icon3 from "../../assets/ServiceSection/micro-saas.png";
import icon4 from "../../assets/ServiceSection/native-cross.png";
import icon5 from "../../assets/ServiceSection/aws-cloud.png";
import icon6 from "../../assets/ServiceSection/devSecOps.png";
import Link from "next/link";


export default function OurServices() {
  const cardData = [
    { iconImg: icon1, title: "AI Generative Digital Marketing", description: "Digital marketing is the promotion of brands to connect with potential customers using the internet and other forms of digital communication." },
    { iconImg: icon2, title: "UI/UX & Wireframe Design", description: "A wireframe is a simple diagram that represents the skeleton of a website or an application's user interface (UI) and core functionality." },
    { iconImg: icon3, title: "Micro SaaS App Development", description: "Micro SaaS (Software as a Service) App Development involves creating small, focused web applications that solve a specific problem or meet a particular need." },
    { iconImg: icon4, title: "Mobile Native & Cross Platform", description: "Mobile app development for both native and cross-platform solutions, ensuring compatibility across all devices." },
    { iconImg: icon5, title: "AWS/Azure Cloud", description: "Cloud computing services including data storage, servers, databases, networking, and software." },
    { iconImg: icon6, title: "DevSecOps", description: "Integrating efficient CI/CD DevOps services into your development pipeline to improve productivity and security." },
  ];

  return (
    <div className=" bg-[#d8af692a] center flex-col text-center sm:px-6 py-12">
      <h2 className="text_size_1 text-center mb-6">
        <span className="text-primary">Our </span> Services
      </h2>
      <p className="lg:max-w-8/12 text-gray mb-10 para px-2 ">
      Delivering top-notch services and ensuring timely project completion, setting the standard for excellence in the industry.
      </p>
            
            <div className="grid content-center mt-10 p-2 place-items-center w-full space-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <InfoCard key={index} iconImg={card.iconImg} title={card.title} description={card.description} />
        ))}
      </div>
      <div className="center mb-5">
<Link href="/services" className="btn">
        Read More   
    </Link>
</div>
    </div>
  );
}
