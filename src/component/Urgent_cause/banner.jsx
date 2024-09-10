import Me from "../../assets/1.png";
import Air from "../../assets/2.png";
import Patna from "../../assets/3.png";
import ProgressBar from "./progressBar";

const statData = [
  {
    id: 1,
    title: "Morocco Strikes With Earthquake",
    desc: "Current situation for Morocco have gone horrible due to the strike of Earthquake.",
    link: "/",
    icon: (
      <img
        src={Me}
        alt=""
        className="rounded-t-[10px] object-cover w-full h-auto"
      />
    ),
    amount: 4400,
    donated: "Donated till now",
  },
  {
    id: 2,
    title: "Harmful Disease In Air",
    desc: "World has been infected with deadly life taking virus...",
    link: "/",
    icon: (
      <img
        src={Air}
        alt=""
        className="rounded-t-[10px] object-cover w-full h-auto"
      />
    ),
    amount: 7888,
    donated: "Donated till now",
    button: true,
  },
  {
    id: 3,
    title: "Patna Suffers With Heavy Flood",
    desc: "People in Patna have suffered a very heavy flood in the past few days.",
    link: "/",
    icon: (
      <img
        src={Patna}
        alt=""
        className="rounded-t-[10px] object-cover w-full h-auto"
      />
    ),
    amount: 11000,
    donated: "Donated till now",
  },
];

const Stats = () => {
  const maxAmount = 15000;

  return (
    <div className="bg-[#f8f4e9] py-8">
      <div className="text-center flex flex-col gap-[20px]">
        <h1 className="text-[50px] font-[600] leading-[50px] font-manuale">
          Urgent Causes
        </h1>
        <p className="text-[20px] font-[500] leading-[30px] font-montserrat">
          Supporting urgent causes, changing lives.
        </p>
      </div>
      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {statData.map((item) => {
            const progress = Math.min((item.amount / maxAmount) * 100, 100);

            return (
              <div
                key={item.id}
                className="p-0 bg-white rounded-[10px] shadow-lg overflow-hidden"
              >
                {item.icon}
                <div className="p-6">
                  <p className="text-[18px] font-semibold leading-[25.87px] font-manuale text-left">
                    {item.title}
                  </p>
                  <p className="text-[15px] font-normal leading-[21px] text-[#5F5F5F] font-montserrat text-left mt-2">
                    {item.desc}
                  </p>
                  <div className="flex flex-row justify-start items-center mt-4 gap-2">
                    <p className="text-[25px] font-[700] font-manuale">
                      ${item.amount}
                    </p>
                    <p className="text-[15px] font-[400] text-[#5F5F5F] font-montserrat">
                      {item.donated}
                    </p>
                  </div>
                  <ProgressBar progress={progress} color="#FF6B6B" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
