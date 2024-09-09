import { useState } from "react";
import { NavbarMenu } from "../mockdata/data.js";
import logo from "../../assets/logo.png";
import Hamburger from "../../assets/hamburger.png";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo */}
          <div className="flex items-center w-[40px] h-[40px] gap-[1.04px]">
            <img src={logo} alt="Logo" />
          </div>
          {/* Menu (hidden on small screens) */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 font-montserrat text-[18px] font-normal text-[#111111]">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-[#FDC137] font-semibold"
                    aria-label={item.title}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Button */}
          <div className="flex items-center gap-4">
            <button
              className="w-[100px] h-[41px] rounded-[30px] border-r-[2px] border-b-[2px] border-solid border-[#16442C] bg-[#399866] text-white font-montserrat font-medium"
              aria-label="Donate Button"
            >
              Donate
            </button>
          </div>
          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <img src={Hamburger} alt="Menu" className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
