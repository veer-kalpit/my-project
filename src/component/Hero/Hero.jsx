import img from "../../assets/img.png";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[650px] relative items-center">
        {/* Image section comes first on mobile */}
        <div className="order-none md:order-1 flex justify-center items-center relative h-auto mt-8 md:mt-0">
          <div className="w-[350px] md:w-max relative">
            <img
              src={img}
              alt="Smiling children"
              className="rounded-xl object-cover z-20 relative w-full"
            />
            {/* Yellow Circle */}
            <div className="absolute top-[-10px] md:top-[-20px] left-[-10px] md:left-[-20px] w-[60px] md:w-[100px] h-[60px] md:h-[100px] bg-[#FDC137] rounded-full z-30"></div>
            {/* Green Rounded Square */}
            <div className="absolute bottom-[-10px] md:bottom-[-20px] right-[-10px] md:right-[-20px] w-[80px] md:w-[138px] h-[80px] md:h-[138px] bg-[#399866] rounded-[12px] md:rounded-[16px] z-10"></div>
          </div>
        </div>

        <div className="order-1 md:order-none flex flex-col justify-center px-4 md:px-0 py-8 md:py-0">
          <h1 className="font-manuale text-[40px] md:text-[70px] font-semibold leading-[40px] md:leading-[81px]">
            Empower Hope, Transform Lives
          </h1>
          <p className="text-[20px] md:text-[20px] font-medium leading-[30px] md:leading-[30px] font-montserrat mt-4 md:mt-0 ">
            The essence of charity by conveying the idea of uplifting
            individuals and communities through the power of hope and positive
            change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
