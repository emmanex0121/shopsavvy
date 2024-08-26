import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LoginForm = () => (
  <Form
    className="w-full max-w-lg bg-customGrey p-4 rounded-2xl"
    name="basic"
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off">
    <h1 className="text-center text-2xl font-bold mb-10">Welcome Back</h1>
    <p className="text-center mb-10">Please enter your details to sign in</p>

    <div className="flex flex-wrap gap-4">
      <Form.Item
        className="flex-1 min-w-[200px]"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your First Name",
          },
        ]}>
        <label className="block text-sm font-bold text-gray-700">
          First Name <span className="text-customOrange">*</span>
        </label>
        <Input
          className="mt-1 bg-customGrey border-black"
          placeholder="First Name"
        />
      </Form.Item>

      <Form.Item
        className="flex-1 min-w-[200px]"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please input your Last Name",
          },
        ]}>
        <label className="block text-sm font-bold text-gray-700">
          Last Name <span className="text-customOrange">*</span>
        </label>
        <Input
          className="mt-1 bg-customGrey border-black"
          placeholder="Last Name"
        />
      </Form.Item>
    </div>

    <Form.Item
      className=""
      name="userName"
      rules={[
        {
          required: true,
          message: "Please input your First Name",
        },
      ]}>
      <label className="block text-sm font-bold text-gray-700">
        User Name <span className="text-customOrange">*</span>
      </label>
      <Input className="mt-1 bg-customGrey border-black" placeholder="" />
    </Form.Item>

    <Form.Item
      className=""
      name="email"
      rules={[
        {
          required: true,
          type: "email",
          message: "Please input your First Name",
        },
      ]}>
      <label className="block text-sm font-bold text-gray-700">
        Email <span className="text-customOrange">*</span>
      </label>
      <Input
        className="mt-1 bg-customGrey border-black"
        placeholder="email@example.com"
      />
    </Form.Item>

    <Form.Item
      // label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}>
      <label className="block text-sm font-bold text-gray-700">
        Password <span className="text-customOrange">*</span>
      </label>
      <Input.Password
        className="mt-1 bg-customGrey border-black"
        placeholder="*****************"
      />
    </Form.Item>

    <div className="flex justify-between items-center mt-10 mb-6">
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <a className="text-blue-500 hover:text-blue-700" href="#">
        Forgot Password?
      </a>
    </div>

    <Form.Item
      wrLoginFormerCol={{
        offset: 8,
        span: 16,
      }}>
      <Button type="primary" htmlType="submit" className="w-full">
        Sign in
      </Button>
    </Form.Item>

    <div className="text-center">
      <p>
        Don&apos;t have an account yet?{" "}
        <Link className="text-blue-500 hover:text-blue-700" to="/register">
          Sign Up
        </Link>
      </p>
    </div>
  </Form>
);
export default LoginForm;
