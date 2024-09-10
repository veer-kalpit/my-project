import Npo from "../../assets/npo.png";
import Hh from "../../assets/hh.png";
import Donate from "../../assets/Donate.png";
import W from "../../assets/w.png";

const statData = [
  {
    id: 1,
    title: "563",
    desc: "Project Completed",
    link: "/",
    icon: <img src={Npo} alt="Project Completed Icon" />,
  },
  {
    id: 2,
    title: "425",
    desc: "Trusted Partner",
    link: "/",
    icon: <img src={Hh} alt="Trusted Partner Icon" />,
  },
  {
    id: 3,
    title: "978",
    desc: "Money Donated",
    link: "/",
    icon: <img src={Donate} alt="Money Donated Icon" />,
  },
  {
    id: 4,
    title: "32",
    desc: "Active Volunteer",
    link: "/",
    icon: <img src={W} alt="Active Volunteer Icon" />,
  },
];

const Stats = () => {
  return (
    <div className="relative h-auto">
      {/* Background section */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top half #F8F6E4 */}
        <div className="flex-1 bg-[#F8F6E4]"></div>
        {/* Bottom half white */}
        <div className="flex-1 bg-white"></div>
      </div>

      {/* Content container on top of the background */}
      <div className="relative container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#399866] rounded-[40px] py-8 px-4">
          {statData.map((item) => (
            <div
              key={item.id}
              className="space-y-2 p-4 flex flex-col items-center"
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-center font-manuale text-[70px] font-semibold leading-[81px] text-[#FDC137]">
                {item.title}
              </p>
              <p className="font-montserrat text-[20px] font-medium leading-[30px] text-white text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
