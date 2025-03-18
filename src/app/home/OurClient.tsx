import Image from "next/image";
import client1 from "../../assets/HomeSection/ClientLogos/clLogo-1.png";
import client2 from "../../assets/HomeSection/ClientLogos/clLogo-2.png";
import client3 from "../../assets/HomeSection/ClientLogos/clLogo-3.png";
import client4 from "../../assets/HomeSection/ClientLogos/clLogo-4.png";
import client5 from "../../assets/HomeSection/ClientLogos/clLogo-5.png";
import client6 from "../../assets/HomeSection/ClientLogos/clLogo-6.png";
import client7 from "../../assets/HomeSection/ClientLogos/clLogo-7.png";
import client8 from "../../assets/HomeSection/ClientLogos/clLogo-8.png";
import client9 from "../../assets/HomeSection/ClientLogos/clLogo-9.png";
import client10 from "../../assets/HomeSection/ClientLogos/clLogo-10.png";

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
      <h2 className="text_size_1 text-center mb-10">
        <span className="text-primary">Our </span> Clients
      </h2>
      <section className="center bg-gradient-to-r from-[#F2F299] via-[#5F665B] via-80% to-[#0B151A] my-10">
      <div className="screen-size my-10  grid grid-cols-2 md:grid-cols-3 max-sm:grid-cols-1 gap-10 sm:gap-5">
                 {clientsImg.map((client)=>(
            <div key={client.id} className="flex justify-center">
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
      </section>
    </section>
  );
};

