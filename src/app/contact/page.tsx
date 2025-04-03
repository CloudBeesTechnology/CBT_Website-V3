"use client"
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
// import study from "../../assets/ContactUs/ContactUsImg/study.png";
import cloudMessage from "../../../public/assets/ContactUs/ContactIcons/contact.png";
import avatar from "../../../public/assets/ContactUs/ContactIcons/avatar.svg";
import emailIcon from "../../../public/assets/ContactUs/ContactIcons/email.svg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_3kauhuu", 
        "template_qs2oohl", 
        formData,
        "w-ACd3odlDnB7jJwS" 
      )
      .then(
        (response) => {
          setStatus("Success! Your message has been sent.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          setStatus("Failed to send the message. Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className=" center flex-col screen-size sm:m-7 ">
        <h1 className="text-center title m-9">
          <span className="text-primary">Get </span>
          <span className="text-dark_gray">in touch</span>
        </h1>
      <div className="center  w-full">
        <div className="flex center flex-wrap md:flex-nowrap w-full max-w-full overflow-hidden">
          <aside className="sm:w-2/3 center p-2 sm:h-[700px]">
            <Image
              src={cloudMessage}
              alt="cloudMessage"
              className="w-full sm:max-w-md object-cover"
            />
          </aside>

          <article className="md:w-3/5 p-2 w-full">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full px-5 sm:px-10 py-10 shadow-[1.0px_2.0px_8.0px_1.0px_rgba(84,101,255,0.5)] rounded-2xl"
            >
              {status && <p className="text-center">{status}</p>}

              <div className="center border border-sandal rounded">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name*"
                  className="mt-1 w-full p-2 outline-none placeholder:text-para_1 placeholder:text-dark_gray"
                  required
                />
                <span className="px-3">
                  <Image src={avatar} alt="avatar" className="w-7 h-7" />
                </span>
              </div>

              <div className="center border border-sandal rounded">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address*"
                  className="mt-1 w-full p-2 outline-none placeholder:text-para_1 placeholder:text-dark_gray"
                  required
                />
                <span className="px-3">
                  <Image src={emailIcon} alt="email" className="w-7 h-7" />
                </span>
              </div>

              <div className="center border border-sandal rounded">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number*"
                  className="mt-1 w-full p-2 outline-none placeholder:text-para_1 placeholder:text-dark_gray"
                  required
                />
              </div>

              <div className="center border border-sandal rounded">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject*"
                  className="mt-1 w-full p-2 outline-none placeholder:text-para_1 placeholder:text-dark_gray"
                  required
                />
              </div>

              <div className="center border border-sandal rounded">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message*"
                  rows={4}
                  className="mt-1 w-full p-2 outline-none placeholder:text-para_1 placeholder:text-dark_gray"
                  required
                ></textarea>
              </div>

              <div className="vertical">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border-primary py-1 px-5 rounded-full shadow-md bg-primary text-dark_gray title_3"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
