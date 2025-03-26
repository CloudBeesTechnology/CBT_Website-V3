import Image from "next/image";
import client1 from "../../assets/HomeSection/ClientLogos/le.png";
import client2 from "../../assets/HomeSection/ClientLogos/clLogo-10.png";
import client3 from "../../assets/HomeSection/ClientLogos/e_fishing.png";
import client4 from "../../assets/HomeSection/ClientLogos/clLogo-4.png";
import client5 from "../../assets/HomeSection/ClientLogos/niche.png";
import client6 from "../../assets/HomeSection/ClientLogos/clLogo-3.png";
import client7 from "../../assets/HomeSection/ClientLogos/clLogo-7.png";
import client8 from "../../assets/HomeSection/ClientLogos/clLogo-6.png";
import client9 from "../../assets/HomeSection/ClientLogos/clLogo-8.png";
import client10 from "../../assets/HomeSection/ClientLogos/svg.png";

const clientsImg =[
    {id:1 , src: client1, alt:"Client 1"},
    {id:2 , src: client2, alt:"Client 2"},
    {id:3 , src: client3, alt:"Client 3"},
    {id:4 , src: client4, alt:"Client 4"},
    {id:5 , src: client5, alt:"Client 5"},
    {id:6 , src: client6, alt:"Client 6"},
    {id:7 , src: client7, alt:"Client 7"},
    {id:8 , src: client8, alt:"Client 8"},
    {id:9 , src: client9, alt:"Client 9"},
    {id:10 , src: client10, alt:"Client 10"},
]
export const OurClient = () => {
  return (
    <section>
      <h2 className="title text-center mb-10">
        <span className="text-primary">Our </span> Clients
      </h2>
      <section className="center relative bg-[#8c8c8c9c] my-10">
      <div className="m-5 sm:m-10  grid grid-cols-2 w-full md:grid-cols-3 py-5 sm:py-10 max-sm:grid-cols-1 gap-10 sm:gap-20">
                 {clientsImg.map((client)=>(
            <div key={client.id} className="flex justify-center items-center">
                <Image
                src={client.src}
                alt={client.alt}
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
         ))}
        </div>
        <div className="absolute w-full h-full bg-[#00000028]  "></div>
      </section>
    </section>
  );
};

