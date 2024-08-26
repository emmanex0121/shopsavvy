import PropTypes from "prop-types";
import savvyLogo from "../../../assets/images/shopsavvy-logo.png";

const SavyyLogo = ({ width = "20vh" }) => {
  return (
    <div className="text-center" style={{ width }}>
      <img className="w-full" src={savvyLogo} alt="shopsavvy-logo" />
    </div>
  );
};

// Define PropTypes
SavyyLogo.propTypes = {
  width: PropTypes.string,
};

export default SavyyLogo;
