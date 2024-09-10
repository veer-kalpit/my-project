import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  let bgColor;

  // Set color based on the progress percentage
  if (progress < (5000 / 15000) * 100) {
    bgColor = "bg-[#FF1414]"; // Red for less than 5000
  } else if (
    progress >= (5000 / 15000) * 100 &&
    progress < (10000 / 15000) * 100
  ) {
    bgColor = "bg-[#FB983D]"; // Orange for 5000 to 9999
  } else {
    bgColor = "bg-[#0E9602]"; // Green for 10000 and above
  }

  return (
    <div className="w-full h-4 bg-[#E0E0E0] rounded-full">
      <div
        className={`h-full ${bgColor} rounded-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

// Prop validation
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired, // Ensure progress is a number and required
};

export default ProgressBar;
