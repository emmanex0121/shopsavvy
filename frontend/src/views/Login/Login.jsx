
import bg from '../../assets/images/bg.png';
import logo from '../../assets/images/logo.png';
import LoginForm from '../../common/components/ui/LoginForm';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="min-h-screen grid grid-cols-2">
      <section className="">
            <LoginForm/>  
      </section>
    </div>
  );
};

export default Login;
