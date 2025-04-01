const CeoQuotesCard: React.FC = () => {
  return (
    <div className="text-center p-6 my-8 rounded-2xl screen-size bg-gradient-to-r from-[#40404094] to-[#faba0b91]">
      <div className=" p-10 rounded-2xl sm:p-6">
        <h2 className="title mb-4 text-2xl sm:text-xl">
          <span className="text-primary">CEO </span>
          <span className="text-dark_gray">Quotes</span>
        </h2>
        <div className="flex flex-col italic text-xl sm:text-2xl ">
          <i>
            Meet our vibrant team of young innovators, shaping digital solutions
          </i>
          <i>
            that not only impress but also inspire. We’re here to create
            impactful
          </i>
          <i>products and services that elevate lives and spark</i>
          <i>positive change! Growth.</i>
        </div>
      </div>
    </div>
  );
};

export default CeoQuotesCard;
