import Image from "next/image";
import client1 from "../../../public/assets/HomeSection/AppIcons/shiftbl.svg";
import client1Hover from "../../../public/assets/HomeSection/AppIcons/shiftcl.svg";
import client2 from "../../../public/assets/HomeSection/AppIcons/javabl.svg";
import client2Hover from "../../../public/assets/HomeSection/AppIcons/javacl.svg";
import client3 from "../../../public/assets/HomeSection/AppIcons/kotlinbl.svg";
import client3Hover from "../../../public/assets/HomeSection/AppIcons/kotlincl.svg";
import client4 from "../../../public/assets/HomeSection/AppIcons/awsbl.svg";
import client4Hover from "../../../public/assets/HomeSection/AppIcons/awscl.svg";
import client5 from "../../../public/assets/HomeSection/AppIcons/flutterbl.svg";
import client5Hover from "../../../public/assets/HomeSection/AppIcons/fluttercl.svg";
import client6 from "../../../public/assets/HomeSection/AppIcons/reactbl.svg";
import client6Hover from "../../../public/assets/HomeSection/AppIcons/reactcl.svg";
import client7 from "../../../public/assets/HomeSection/AppIcons/angularbl.svg";
import client7Hover from "../../../public/assets/HomeSection/AppIcons/angularcl.svg";
import client8 from "../../../public/assets/HomeSection/AppIcons/amazonbl.svg";
import client8Hover from "../../../public/assets/HomeSection/AppIcons/amazoncl.svg";
import client9 from "../../../public/assets/HomeSection/AppIcons/firebasebl.svg";
import client9Hover from "../../../public/assets/HomeSection/AppIcons/firebasecl.svg";
import client10 from "../../../public/assets/HomeSection/AppIcons/githubbl.svg";
import client10Hover from "../../../public/assets/HomeSection/AppIcons/githubcl.svg";
import client11 from "../../../public/assets/HomeSection/AppIcons/jsbl.svg";
import client11Hover from "../../../public/assets/HomeSection/AppIcons/jscl.svg";
import client12 from "../../../public/assets/HomeSection/AppIcons/larabl.svg";
import client12Hover from "../../../public/assets/HomeSection/AppIcons/laracl.svg";
import client13 from "../../../public/assets/HomeSection/AppIcons/kotlinbl.svg";
import client13Hover from "../../../public/assets/HomeSection/AppIcons/kotlincl.svg";
import client14 from "../../../public/assets/HomeSection/AppIcons/dbbl.svg";
import client14Hover from "../../../public/assets/HomeSection/AppIcons/dbcl.svg";
import client15 from "../../../public/assets/HomeSection/AppIcons/bootstrapbl.svg";
import client15Hover from "../../../public/assets/HomeSection/AppIcons/bootstrapcl.svg";
import client16 from "../../../public/assets/HomeSection/AppIcons/mysqlbl.svg";
import client16Hover from "../../../public/assets/HomeSection/AppIcons/mysqlcl.svg";
import client17 from "../../../public/assets/HomeSection/AppIcons/nodejsbl.svg";
import client17Hover from "../../../public/assets/HomeSection/AppIcons/nodejscl.svg";
import client18 from "../../../public/assets/HomeSection/AppIcons/objbl.svg";
import client18Hover from "../../../public/assets/HomeSection/AppIcons/objcl.svg";
import client19 from "../../../public/assets/HomeSection/AppIcons/phpbl.svg";
import client19Hover from "../../../public/assets/HomeSection/AppIcons/phpcl.svg";
import client20 from "../../../public/assets/HomeSection/AppIcons/postsqlbl.svg";
import client20Hover from "../../../public/assets/HomeSection/AppIcons/postsqlcl.svg";
import client21 from "../../../public/assets/HomeSection/AppIcons/saasbl.svg";
import client21Hover from "../../../public/assets/HomeSection/AppIcons/saascl.svg";
import client22 from "../../../public/assets/HomeSection/AppIcons/tailwindbl.svg";
import client22Hover from "../../../public/assets/HomeSection/AppIcons/tailwindcl.svg";
import client23 from "../../../public/assets/HomeSection/AppIcons/tsbl.svg";
import client23Hover from "../../../public/assets/HomeSection/AppIcons/tscl.svg";
import client24 from "../../../public/assets/HomeSection/AppIcons/unitybl.svg";
import client24Hover from "../../../public/assets/HomeSection/AppIcons/unitycl.svg";
import client25 from "../../../public/assets/HomeSection/AppIcons/xamarinbl.svg";
import client25Hover from "../../../public/assets/HomeSection/AppIcons/xamarincl.svg";

const clientsImg = [
  { id: 1, defaultSrc: client1, hoverSrc: client1Hover, alt: "Client 1", title:"Swift" },
  { id: 2, defaultSrc: client2, hoverSrc: client2Hover, alt: "Client 2", title:"Java"},
  { id: 3, defaultSrc: client3, hoverSrc: client3Hover, alt: "Client 3", title:"Kotlin"},
  { id: 4, defaultSrc: client4, hoverSrc: client4Hover, alt: "Client 4", title:"Aws/Azure Cloud"},
  { id: 5, defaultSrc: client5, hoverSrc: client5Hover, alt: "Client 5", title:"Flutter"},
  { id: 6, defaultSrc: client6, hoverSrc: client6Hover, alt: "Client 6", title:"React"},
  { id: 7, defaultSrc: client7, hoverSrc: client7Hover, alt: "Client 7", title:"Angular"},
  { id: 8, defaultSrc: client8, hoverSrc: client8Hover, alt: "Client 8", title:"Amazonweb Service"},
  { id: 9, defaultSrc: client9, hoverSrc: client9Hover, alt: "Client 9", title:"Firebase"},
  { id: 10, defaultSrc: client10, hoverSrc: client10Hover, alt: "Client 10", title:"Github"},
  { id: 11, defaultSrc: client11, hoverSrc: client11Hover, alt: "Client 11", title:"Javascript"},
  { id: 12, defaultSrc: client12, hoverSrc: client12Hover, alt: "Client 12", title:"Laravel"},
  { id: 13, defaultSrc: client13, hoverSrc: client13Hover, alt: "Client 13", title:"Kotlin"},
  { id: 14, defaultSrc: client14, hoverSrc: client14Hover, alt: "Client 14", title:"MangoDB"},
  { id: 15, defaultSrc: client15, hoverSrc: client15Hover, alt: "Client 15", title:"Bootstrap"},
  { id: 16, defaultSrc: client16, hoverSrc: client16Hover, alt: "Client 16", title:"MySQL"},
  { id: 17, defaultSrc: client17, hoverSrc: client17Hover, alt: "Client 17", title:"Node JS"},
  { id: 18, defaultSrc: client18, hoverSrc: client18Hover, alt: "Client 18", title:"Objective-C"},
  { id: 19, defaultSrc: client19, hoverSrc: client19Hover, alt: "Client 19", title:"PHP"},
  { id: 20, defaultSrc: client20, hoverSrc: client20Hover, alt: "Client 20", title:"PostgreSQL"},
  { id: 21, defaultSrc: client21, hoverSrc: client21Hover, alt: "Client 21", title:"Saas"},
  { id: 22, defaultSrc: client22, hoverSrc: client22Hover, alt: "Client 22", title:"Tailwind"},
  { id: 23, defaultSrc: client23, hoverSrc: client23Hover, alt: "Client 23", title:"Typescript"},
  { id: 24, defaultSrc: client24, hoverSrc: client24Hover, alt: "Client 24", title:"Unity"},
  { id: 25, defaultSrc: client25, hoverSrc: client25Hover, alt: "Client 25", title:"Xamarin"},
];

export const Technologies = () => {
  return (
    <section className="screen-size center flex-col mt-14 mb-5 sm:my-20 ">
       <h2 className="title text-center sm:mb-6">
        <span className="text-primary">Our </span> Technologies
      </h2>
      <div className="my-10 flex flex-wrap justify-between gap-7 sm:gap-10 ">
        {clientsImg.map((client) => (
          <div
            key={client.id}
            className="group flex flex-col items-center w-[18%] min-w-[200px] sm:min-w-[250px] max-w-[200px] "
          >
            {/* Image Wrapper */}
            <div className="relative w-[200px] h-[180px] flex items-center justify-center group">
  {/* Default Image */}
  <Image
    src={client.defaultSrc}
    alt={client.alt}
    width={150}
    height={100}
    className="absolute opacity-100 group-hover:opacity-0 transition-opacity duration-[1000ms] border border-primary rounded-full"
  />
  {/* Hover Image */}
  <Image
    src={client.hoverSrc}
    alt={client.alt}
    width={150}
    height={100}
    className="object-contain rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] shadow-xl"
    style={{ boxShadow: "3px 0px 2px 3px #DCDCDC" }}
  />
</div>


            {/* Title */}
            <h2 className="text-cente para px-3 ">{client.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};
  