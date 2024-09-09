import Logo from "../../assets/Flogo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#399866] rounded-t-[30px] py-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 px-5 md:px-20 ">
        {/* Left Section: Company Logo */}
        <div className="">
          <img src={Logo} alt="Company Logo" className="" />
        </div>

        {/* Center Section: Footer Links */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-10">
          {/* Company Links */}
          <div>
            <h1 className=" mb-4 font-manuale text-base font-bold leading-6 text-left">
              Company
            </h1>
            <ul className="space-y-2 font-montserrat text-sm font-normal leading-[40px] text-left">
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
          <div>
            <h1 className="mb-4 font-manuale text-base font-bold leading-6 text-left">
              Help
            </h1>
            <ul className="space-y-2 font-montserrat text-sm font-normal leading-[40px] text-left ">
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
          <div>
            <h1 className="mb-4 font-manuale text-base font-bold leading-6 text-left">
              Resources
            </h1>
            <ul className="space-y-2 font-montserrat text-sm font-normal leading-[40px] text-left">
              <li>
                <a href="#" className="hover:underline">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Development Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-xl hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center mt-8 font-poppins text-sm font-normal leading-[22px] text-[#FFFFFF]">
        &copy; Copyright 2023-24, All Rights Reserved by Charity
      </div>
    </footer>
  );
};

export default Footer;
