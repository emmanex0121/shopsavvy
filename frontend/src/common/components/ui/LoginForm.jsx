import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const LoginForm = () => (
  <Form
    className="w-full max-w-lg bg-customGrey p-4"
    name="basic"
    // labelCol={{
    //   span: 8,
    // }}
    // wrLoginFormerCol={{
    //   span: 16,
    // }}
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
    <p className="text-center">Please enter your details to sign in</p>

    <Form.Item
      // label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your email!",
        },
      ]}>
      <label className="block text-sm font-bold text-gray-700">
        Email <span className="text-customOrange">*</span>
      </label>
      <Input className="mt-1" />
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
      <Input.Password className="mt-1" />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrLoginFormerCol={{
        offset: 8,
        span: 16,
      }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrLoginFormerCol={{
        offset: 8,
        span: 16,
      }}>
      <Button type="primary" htmlType="submit" className="w-full">
        Sign in
      </Button>
    </Form.Item>
  </Form>
);
export default LoginForm;
