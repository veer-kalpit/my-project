// import { useState } from "react";
import Donate from "../../assets/D.png";
import Clothes from "../../assets/Clothes.png";
import Food from "../../assets/Food.png";

const statData = [
  {
    id: 1,
    title: "Donate Money",
    desc: "Your small help can change someone else life and can make someone happy and u will have a good deed added in your cart",
    link: "/",
    icon: <img src={Donate} alt="" />,
  },
  {
    id: 2,
    title: "Donate Clothes",
    desc: "Your small help can change someone else life and can make someone happy and u will have a good deed added in your cart",
    link: "/",
    icon: <img src={Clothes} alt="" />,
  },
  {
    id: 3,
    title: "Donate Food",
    desc: "Your small help can change someone else life and can make someone happy and u will have a good deed added in your cart ",
    link: "/",
    icon: <img src={Food} alt="" />,
  },
];

const stats = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="container py-8">
        <div className="text-center flex flex-col gap-[20px]">
          <h1 className="text-[32px] md:text-[50px] font-[600] leading-[40px] md:leading-[50px] text-center font-manuale">
            Making a difference for those who face hardship
          </h1>
        </div>
        <div className="container py-12 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
            {statData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="space-y-4 p-6 md:space-y-6 md:p-8 rounded-[20px] border-[6px] border-[#F8F6E4] hover:border-[#399866] transition-all duration-300"
                >
                  <div className="flex justify-center">
                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-[18px] md:text-[20px] font-semibold leading-[23px] md:leading-[25.87px] text-center font-manuale">
                    {item.title}
                  </p>
                  <p className="text-[14px] md:text-[16px] font-[400] leading-[20px] md:leading-[24px] text-center font-montserrat text-[#5F5F5F]">
                    {item.desc}
                  </p>
                  <div className="flex justify-center">
                    <button className="p-[8px_20px] md:p-[10px_30px] rounded-[30px] bg-[#F8F6E4] border-solid border-[#D0D0D0] border-[1.5px] hover:bg-[#FDC138] hover:border-[#AF8523] transition-all duration-300">
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
