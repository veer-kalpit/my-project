import Logo from "../../assets/Flogo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative h-auto">
      {/* Half background colors */}
      <div className="absolute top-0 left-0 w-full h-[20%] bg-white"></div>
      <div className="absolute top-0 right-0 w-full h bg-[#F8F6E4]"></div>
      <div className="relative container mx-auto bg-[#399866] rounded-[40px] pt-10 text-white z-10 mb-6">
        <div className=" flex flex-col items-center md:flex-row justify-between px-5 md:px-20 ">
          {/* Center Section: Footer Links */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 justify-between md:justify-between w-full md:w-auto ">
            <div className="flex flex-col items-left md:items-start mb-6 md:mb-0">
              <img
                src={Logo}
                alt="Company Logo"
                className="h-[113px] w-[113px] mb-6"
              />
            </div>

            {/* Company Links */}
            <div className="text-left md:text-left">
              <h1 className="mb-4 font-manuale text-[16px] font-bold leading-[24px]">
                Company
              </h1>
              <ul className="space-y-2 font-montserrat text-[14px] font-normal leading-[40px]">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            {/* Help Links */}
            <div className="text-left md:text-left">
              <h1 className="mb-4 font-manuale text-[16px] font-bold leading-[24px]">
                Help
              </h1>
              <ul className="space-y-2 font-montserrat text-[14px] font-normal leading-[40px]">
                <li>
                  <a href="#" className="hover:underline">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="text-left md:text-left">
              <h1 className="mb-4 font-manuale text-[16px] font-bold leading-[24px]">
                Resources
              </h1>
              <ul className="space-y-2 font-montserrat text-[14px] font-normal leading-[40px]">
                <li>
                  <a href="#" className="hover:underline">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0 justify-center">
            <div className="grid grid-cols-4  gap-[20px] md:grid-cols-2">
              <a
                href="#"
                className="w-[36px] h-[36px] bg-white rounded-full text-[#696969] hover:bg-[#f0f0f0] flex items-center justify-center"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-[36px] h-[36px] bg-white rounded-full text-[#696969] hover:bg-[#f0f0f0] flex items-center justify-center"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-[36px] h-[36px] bg-white rounded-full text-[#696969] hover:bg-[#f0f0f0] flex items-center justify-center"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-[36px] h-[36px] bg-white rounded-full text-[#696969] hover:bg-[#f0f0f0] flex items-center justify-center"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-[#f0f0f0] pt-4 text-center font-montserrat text-[14px] font-normal leading-[22px] text-white">
          &copy; Copyright 2023-24, All Rights Reserved by Charity
        </div>
      </div>
    </footer>
  );
};

export default Footer;
