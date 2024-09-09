import img from "../../assets/img.png";
const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div className="flex flex-col justify-center py-14 md:py-0">
          <h1 className="font-manuale text-[70px] font-semibold leading-[81px]">
            Empower Hope, Transform Lives
          </h1>
          <p className="text-[20px] font-medium leading-[30px] font-montserrat">
            The essence of charity by conveying the idea of uplifting
            individuals and communities through the power of hope and positive
            change.
          </p>
        </div>
        {/* Image section */}
        <div className="flex justify-center items-center relative">
          {/* Yellow Circle */}
          <div className="absolute top-[80px] left-[50px] w-[100px] h-[100px] bg-[#FDC137] rounded-full z-30 "></div>

          {/* Main Image */}
          <img
            src={img}
            alt="Kids"
            className="rounded-[24px] w-[300px] h-auto md:w-[493.73px] object-cover z-20"
          />

          {/* Green Rectangle */}
          <div className="absolute bottom-[95px] right-[50px] w-[138px] h-[138px] bg-[#399866] rounded-[16px] z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
