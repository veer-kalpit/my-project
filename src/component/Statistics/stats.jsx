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
    icon: <img src={Npo} alt="" />,
  },
  {
    id: 2,
    title: "425",
    desc: "Trusted Partner",
    link: "/",
    icon: <img src={Hh} alt="" />,
  },
  {
    id: 3,
    title: "978",
    desc: "Money Donated",
    link: "/",
    icon: <img src={Donate} alt="" />,
  },
  {
    id: 4,
    title: "32",
    desc: "Active Volunteer",
    link: "/",
    icon: <img src={W} alt="" />,
  },
];

const stats = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#399866] rounded-[40px] ">
          {statData.map((item) => {
            return (
              <div key={item.id} className="space-y-4 p-6  ">
                {" "}
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-[70px] font-semibold leading-[81px] text-[#FDC137] font-manuale text-center">
                  {item.title}
                </p>
                <p className="text-[20px] font-medium leading-[30px] text-white font-montserrat text-center">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default stats;
