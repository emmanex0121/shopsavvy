import PropTypes from "prop-types";

const CustomButton = ({ value, onClick }) => {
  return (
    <input
      type="button"
      value={value}
      onClick={onClick}
      style={{
        padding: "0.1rem 1.5rem",
        backgroundColor: "#7D54F3",
        color: "#fff",
        border: "none",
        borderRadius: "0.5rem",
        cursor: "pointer",
        fontSize: "1rem",
      }}
    />
  );
};

CustomButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
