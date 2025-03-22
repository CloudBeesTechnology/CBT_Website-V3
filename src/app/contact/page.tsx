import Image from "next/image";
import study from "../../assets/ContactUs/ContactUsImg/study.png";
import cloudMessage from "../../assets/ContactUs/ContactUsImg/cloudMessage.svg";
const Contact: React.FC = () => {
  return (
    // <div className=" screen-size m-7 ">
    //   <h3 className="center title_1 m-9">
    //     <span className="text-primary">Get </span>
    //     <span className="text-dark_gray">in touch</span>
    //   </h3>
    //   <div className="screen-size  center ">
    //     <div className=" flex w-full min-w-[300px] max-w-full  overflow-hidden">
    //       <div className="w-2/3  relative flex flex-col h-[700px] ml-10 ">
    //         <div className="relative inset-0 z-10 flex items-end px-5 justify-end">
    //           <Image
    //             src={cloudMessage}
    //             alt="cloudMessage"
    //             className="w-80 h-80 object-cover "
    //           />

    //           <figcaption className="title_2 absolute bottom-20 left-96 inset-0 flex flex-col items-center justify-center space-y-2">
    //             <h2 className="flex">
    //               <span className="text-dark_gray">Level </span>
    //               <span className="ml-1 text-primary">up</span>
    //             </h2>
    //             <h2 className="flex">
    //               <span className="text-dark_gray">Your brand </span>
    //               <span className="ml-1 text-primary">!</span>
    //             </h2>
    //           </figcaption>
    //         </div>

    //         <div className="absolute inset-0 top-64  bottom-20 flex items-center justify-center ">
    //           <Image
    //             src={study}
    //             alt="gif"
    //             className="w-96 h-96 rounded-full shadow-lg "
    //           />
    //         </div>
    //       </div>

    //       <div className="w-3/5 p-8  vertical">
    //         <form className="space-y-6  w-full shadow-lg px-10 py-10  rounded-2xl ">
    //           <div>
    //             <input
    //               type="text"
    //               placeholder="Your Name*"
    //               className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1"
    //             />
    //           </div>

    //           <div>
    //             <input
    //               type="email"
    //               placeholder="Email Address*"
    //               className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1 "
    //             />
    //           </div>
    //           <div>
    //             <input
    //               type="number"
    //               placeholder="Phone Number*"
    //               className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1"
    //             />
    //           </div>

    //           <div>
    //             <input
    //               type="text"
    //               placeholder="Subject*"
    //               className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1"
    //             />
    //           </div>

    //           <div>
    //             <textarea
    //               placeholder="Message*"
    //               rows={4}
    //               className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1"
    //             ></textarea>
    //           </div>
    //           <div className="vertical">
    //             <button
    //               type="submit"
    //               className="border-primary py-1  px-5 rounded-full bg-primary text-dark_gray title_2"
    //             >
    //               Send
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className=" screen-size m-7 ">
      <h3 className="center title_1 m-9">
        <span className="text-primary">Get </span>
        <span className="text-dark_gray">in touch</span>
      </h3>
      <div className="screen-size  center ">
        {/* <div className="flex  w-full min-w-[300px] max-w-full  overflow-hidden"> */}
        <div className="flex flex-wrap md:flex-nowrap w-full min-w-[300px] max-w-full overflow-hidden">
          <div className="w-2/3 hidden   relative md:flex flex-col h-[700px] ml-10 items-end ">
            <div className="relative  inset-0 z-10 flex items-end px-5 justify-end w-fit ">
              <Image
                src={cloudMessage}
                alt="cloudMessage"
                className="w-40 h-40 md:w-80 md:h-80 object-cover "
              />

              <figcaption className="md:text_size_3 title_2 absolute bottom-23 inset-0 flex flex-col items-center justify-center space-y-2">
                <h2 className="flex">
                  <span className="text-dark_gray">Level </span>
                  <span className="ml-1 text-primary">up</span>
                </h2>
                <h2 className="flex">
                  <span className="text-dark_gray">Your brand </span>
                  <span className="ml-1 text-primary">!</span>
                </h2>
              </figcaption>
            </div>

            <div className="absolute inset-0 top-64  bottom-20 flex items-center justify-center ">
              <Image src={study} alt="gif" className="w-96 h-96 rounded-full" />
            </div>
          </div>

          <div className="md:w-3/5 p-8 vertical w-full">
            <form className="space-y-6 w-full  shadow-lg px-10 py-10  rounded-2xl bg-blogWhite ">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1 "
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Phone Number*"
                  className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject*"
                  className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1"
                />
              </div>

              <div>
                <textarea
                  placeholder="Message*"
                  rows={4}
                  className="mt-1 w-full p-2 border border-sandal rounded outline-none placeholder:text-para_1"
                ></textarea>
              </div>
              <div className="vertical">
                <button
                  type="submit"
                  className="border-primary py-1  px-5 rounded-full bg-primary text-dark_gray title_3"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
