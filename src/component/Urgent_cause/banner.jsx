// import { useState } from "react";
import Me from "../../assets/1.png";
import Air from "../../assets/2.png";
import Patna from "../../assets/3.png";

const statData = [
  {
    id: 1,
    title: "Morocco strikes with  earthquake",
    desc: "Current situation for Morocco have gone horrible due to the strike of Earthquake ",
    link: "/",
    icon: <img src={Me} alt="" />,
    amount: "$ 4400",
    donated: "Donated till now",
  },
  {
    id: 2,
    title: "Harmful Disease in Air",
    desc: "World have been infected with deadly life taking virus ..... ",
    link: "/",
    icon: <img src={Air} alt="" />,
    amount: "$ 7888",
    donated: "Donated till now",
  },
  {
    id: 3,
    title: "Patna suffer with heavy Flood",
    desc: "People in patna have suffered a very heavy flood in past few days ",
    link: "/",
    icon: <img src={Patna} alt="" />,
    amount: "$ 11,000",
    donated: "Donated till now",
  },
];

const stats = () => {
  return (
    <div className="container py-8">
      <div className="text-center flex flex-col gap-[20px]">
        <h1 className="text-[50px] font-[600] leading-[50px] font-manuale">
          Urgent Causes
        </h1>
        <p className="text-[20px] font-[500] leading-[30px] font-montserrat">
          Supporting urgent causes, changing lives.
        </p>
      </div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
          {statData.map((item) => {
            return (
              <div
                key={item.id}
                className="space-y-3 p-6 rounded-[10px] bg-white pl-0 pr-0 pt-0 "
              >
                {" "}
                <div className="overflow-x-hidden mx-auto object-cover ">
                  {item.icon}
                </div>
                <p className="text-[18px] font-semibold leading-[25.87px] text-left font-manuale ">
                  {item.title}
                </p>
                <p className="text-[15px] font-normal leading-[21px] text-[#5F5F5F] font-montserrat text-left">
                  {item.desc}
                </p>
                <div className="flex flex-row justify-normal p-2 gap-3">
                  <p className="text-[25px] font-[700]  text-left font-manuale">
                    {item.amount}
                  </p>
                  <p className="text-[15px] font-[400]  text-left text-[#5F5F5F] font-montserrat">
                    {item.donated}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default stats;
