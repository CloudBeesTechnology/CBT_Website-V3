import InfoCard from "@/components/InfoCard";
import icon4 from "../../assets/ServiceSection/native-cross.png";
import icon5 from "../../assets/ServiceSection/aws-cloud.png";
import icon6 from "../../assets/ServiceSection/devSecOps.png";
import icon11 from "../../assets/ServiceSection/blockChain.png";
import icon12 from "../../assets/ServiceSection/web-develop.jpg";
import icon13 from "../../assets/ServiceSection/MachineLearning.png";
import Link from "next/link";

export default function OurServices() {
  const cardData = [
    { iconImg: icon13, title: "AI & Machine learning", description: "AI (Artificial Intelligence) and ML (Machine Learning) enable businesses to automate tasks, analyze data, and make smarter decisions, improving efficiency and innovation. " },
    { iconImg: icon5, title: "AWS/Azure Cloud", description: "Cloud computing is the delivery of different services through the Internet, including data storage, servers, databases, networking, and software." },
    { iconImg: icon12, title: "Web Development", description: "A well-designed website enhances credibility, attracts more visitors, and boosts conversions for your business." },
    { iconImg: icon4, title: "Mobile Native & Cross Platform", description: "Transforming ideas into seamless experiences, our mobile app development crafts intuitive solutions that redefine user engagement and drive technological innovation." },
    { iconImg: icon11, title: "Blockchain", description: "Blockchain is a decentralized digital ledger that securely records transactions across multiple computers. It ensures data integrity, prevents tampering, and enables secure peer-to-peer transactions without intermediaries." },
    { iconImg: icon6, title: "DevSecOps", description: "Integrating efficient CI/CD DevOps services into your development pipeline to improve productivity, quality, and speed across the software lifecycle." },
  ];

  return (
    <div className=" bg-[#d8af692a] center flex-col text-center sm:px-6 py-12">
      <h2 className="title text-center mb-6">
        <span className="text-primary">Our </span> Services
      </h2>
      <p className="lg:max-w-8/12 text-gray mb-10 para px-2 ">
      Delivering top-notch services and ensuring timely project completion, setting the standard for excellence in the industry.
      </p>
            
            <div className="grid content-center mt-10 p-2 place-items-center w-full space-y-10 grid-cols-1 min-[880px]:grid-cols-2 xl:grid-cols-3 gap-10">
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
