import PropTypes from "prop-types";

const ResponsiveMenu = ({ open }) => {
  return (
    open && (
      <div className="absolute top-20 left-0 w-full h-screen z-20">
        <div className="text-xl font-semibold uppercase bg-[#399866] text-[#FDC137] py-10 m-6 rounded-3xl">
          <ul className="flex flex-col justify-center items-center gap-10">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    )
  );
};

ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;
