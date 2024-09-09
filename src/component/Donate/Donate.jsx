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
          <h1 className="text-[50px] font-[600] leading-[50px] text-center font-manuale ">
            Making a difference for those who face hardship
          </h1>
        </div>
        <div className="container py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-center items-center">
            {statData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="space-y-3 p-6 
                 rounded-[20px] border-[6px] border-[#F8F6E4] hover:border-[#399866]"
                >
                  {" "}
                  <div className="overflow-x-hidden mx-auto object-cover ">
                    {item.icon}
                  </div>
                  <p className="text-[18px] font-semibold leading-[25.87px] text-left font-manuale ">
                    {item.title}
                  </p>
                  <p className="text-[15px] font-[400] leading-[21px] text-center font-montserrat text-[#5F5F5F]">
                    {item.desc}
                  </p>
                  <button
                    className="p-[20px_30px] gap-[10px] rounded-[30px] bg-[#F8F6E4] border-solid border-[#D0D0D0] border-r-[1.5px] border-b-[1.5px]
                  hover:bg-[#FDC138] hover:border-[#AF8523]"
                  >
                    Donate
                  </button>
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
