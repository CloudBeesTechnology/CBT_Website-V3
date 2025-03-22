<div className="relative bg_image overflow-hidden">
  <div className="absolute bg-blend-overlay animate-move bottom-0 w-full">
    <Image
      src={BubbleImg}
      alt="CBT Banner Image"
      width={500}
      height={100}
      className="animate-spin-custom shadow-lg blur-[60px] w-[50%] sm:w-[40%] md:w-[30%] lg:w-[20%] xl:w-[15%] mx-auto"
    />
  </div>

  {/* Home */}
  {homeLogo && homeBannerText && (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="flex justify-evenly w-full">
        
        {/* Logo Wrapper */}
        <div className="flex items-center justify-center relative pb-12 w-[40%] sm:w-[30%] md:w-[20%] lg:w-[15%] xl:w-[10%]">
          <Image
            src={homeLogo}
            alt="Home Logo"
            width={150}
            height={50}
            className="animate-bounce-custom w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]"
          />
          <div className="animate-bounce-custom-shadow absolute bottom-0 left-10 right-0 h-[6px] max-w-2/4 bg-black blur-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.3)]"></div>
        </div>

        {/* Banner Text */}
        <div className="flex items-center justify-center w-full sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%]">
          <h2 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {homeBannerText}
          </h2>
        </div>
      </div>
    </div>
  )}
</div>
