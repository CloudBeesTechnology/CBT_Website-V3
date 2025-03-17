"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import logo from "../assets/logo/cloudbeestech_logo.svg";

export const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="center bg-gradient relative">
      <div className="screen-size center text-white flex-col flex-wrap gap-14 mt-16 mb-5">
        <section className="flex justify-center lg:justify-between flex-wrap">
          <div className="w-full lg:w-[30%] flex flex-col max-lg:items-center gap-5 font-light text-sm">
            <div>
              <Image
                className="object-cover max-w-72 w-full"
                src={logo}
                alt="CloudBees Tech Logo"
              />
            </div>
            <div className="max-lg:center gap-3 max-lg:text-center flex-wrap max-[500px]:flex-col">
              <p className="para flex-1 max-sm:text-center">
                We are a team of young developers developing digital products and
                services that have a positive impact on people.
              </p>
              <article className="flex-1 my-5">
                <p className="para">
                  <strong className="para text-yellow">Email:</strong> hr@cloudbeestech.com
                </p>
                <div className="flex gap-1 my-1 max-lg:justify-center">
                  <p className="para text-yellow">Phone:</p>
                  <div className="para">
                    <p>India - +91 - 7200533357</p>
                    <p>USA - +1 (614) 632-9349</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="flex sm:justify-around justify-center max-md:text-center mt-3 sm:mt-10 flex-wrap gap-14">
            {[
              {
                location: "Pondicherry",
                address: [
                  "#1, III Main road,",
                  "Kavery Nagar,",
                  "Reddiyarpalayam,",
                  "Puducherry - 605010.",
                ],
                link: "http://tinyurl.com/bp6ptfb2",
              },
              {
                location: "Chennai",
                address: [
                  "#68, R K shanmugam salai,",
                  "Opposite to double tank,",
                  "KK Nagar,",
                  "Chennai - 600078.",
                ],
                link: "http://tinyurl.com/2z7huru4",
              },
              {
                location: "USA",
                address: [
                  "#8999, Ellrod way,",
                  "Lewis center,",
                  "Ohio - 43035.",
                ],
                link: "https://tinyurl.com/5a9c4sx4",
              },
            ].map(({ location, address, link }) => (
              <article key={location} className="flex flex-col gap-5">
                <h6 className="para font-semibold text-yellow underline underline-offset-6">{location}</h6>
                <p className="para sm:h-20 ">
                  {address.map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <a
                  className="footer-direction"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Direction
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col max-sm:text-center gap-5">
          <p className="text-[20px] font-medium">
            © 2019 - 2029 CloudBees Tech Private Limited. All rights reserved.
          </p>
          <div className="center gap-5">
            {[
              {
                icon: <FaFacebookF />,
                href: "https://www.facebook.com/people/CloudBees-Tech/61556253873919/?sk=friends_likes",
              },
              {
                icon: <FaInstagram />,
                href: "https://www.instagram.com/cloudbeestechnology/?hl=en",
              },
              {
                icon: <FaLinkedinIn />,
                href: "https://www.linkedin.com/in/cloudbees-tech/",
              },
              {
                icon: <FaTwitter />,
                href: "https://twitter.com/CBeesTechnology",
              },
            ].map(({ icon, href }, index) => (
              <Link key={index} href={href} className="text-[24px] font-semibold" target="_blank" rel="noopener noreferrer">
                {icon}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
