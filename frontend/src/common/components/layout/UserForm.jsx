import "../../../index.css";
import { Button, Form, Input, InputNumber } from "antd";
import CustomButton from "../ui/CustomButton";
import PropTypes from "prop-types";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

const UserForm = ({ handleClick }) => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
      background: "#FBFBFB",
      padding: "1rem 3rem",
      borderRadius: "0.7rem",
    }}
    validateMessages={validateMessages}>
    <h1 className="text-center text-2xl font-bold mb-10">Create a new user</h1>
    <Form.Item
      name={["user", "firstName"]}
      label="First Name"
      rules={[
        {
          required: true,
        },
      ]}>
      <Input className="hover:border-customPurple" placeholder="John" />
    </Form.Item>
    <Form.Item
      name={["user", "lastName"]}
      label="Last Name"
      rules={[
        {
          required: true,
        },
      ]}>
      <Input className="hover:border-customPurple" placeholder="Doe" />
    </Form.Item>
    <Form.Item
      name={["user", "userName"]}
      label="User Name"
      rules={[
        {
          required: true,
        },
      ]}>
      <Input className="hover:border-customPurple" placeholder="Uusername24" />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[
        {
          type: "email",
          required: true,
        },
      ]}>
      <Input
        className="hover:border-customPurple"
        placeholder="john.doe@example.com"
        type="email"
      />
    </Form.Item>
    <Form.Item
      name={["user", "paswword"]}
      label="Paswword"
      rules={[
        {
          required: true,
          type: "password",
        },
      ]}>
      <Input
        className="hover:border-customPurple"
        placeholder="*****************"
        type="password"
      />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}>
      {/* <Button
        className="bg-customPurple !hover:bg-customPurpleLight"
        type="primary"
        htmlType="submit">
        Submit
      </Button> */}
      <CustomButton value="Submit" onClick={handleClick} />
    </Form.Item>
  </Form>
);

UserForm.propTypes = {
  handleClick: PropTypes.func,
};
export default UserForm;
