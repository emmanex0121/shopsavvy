import PropTypes from "prop-types";
import { Button } from "antd";

const ButtonLogin = ({
  btnText = "Button",
  btnColor = "bg-blue-500",
  btnTextColor = "",
}) => {
  return (
    <div>
      <Button
        type="primary"
        htmlType="submit"
        className={`w-full ${btnColor} ${btnTextColor}`}>
        {btnText}
      </Button>
    </div>
  );
};

// Defining Proptypes
ButtonLogin.propTypes = {
  btnText: PropTypes.string,
  btnColor: PropTypes.string,
  btnTextColor: PropTypes.string,
};

export default ButtonLogin;
