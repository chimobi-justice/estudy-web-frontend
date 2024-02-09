import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInvalidateSchema } from '../../validations/login';
import SignInUser from '../../auth/SignIn';
import { Input } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  FacebookFilled,
  GoogleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Button from '../../Components/Button';

const Login = () => {
  const { signInMutation } = SignInUser();

  const _handleLogin = (values) => {
    signInMutation.mutate({
      email: values.email,
      password: values.password
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: _handleLogin,
    validationSchema: signInvalidateSchema,
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik;

  return (
    <div className="bg-gray-900 h-screen overflow-scroll">
      <h1 className="text-2xl font-bold p-4">
        <Link
          to="/"
          className="text-green-500 hover:text-green-600"
          title="Home"
        >
          Estudy
        </Link>
      </h1>
      <div className="lg:flex lg:flex-row justify-center items-center lg:my-28 sm:my-4">
        <div className="lg:w-5/12 sm:w-full">
          <form className="lg:w-7/12 sm:w-11/12 lg:mx-32 sm:mx-4 p-2" onSubmit={handleSubmit}>
            <div className="w-full mb-6 mt-3">
              <div className="mb-3 text-center">
                <Link
                  to=""
                  className="flex flex-row justify-center items-center border border-gray-300 rounded-lg p-2"
                >
                  <GoogleOutlined
                    className="mr-1"
                    style={{ color: 'red', fontSize: '17px' }}
                  />
                  <span className="text-white">Sign in with Google</span>
                </Link>
              </div>
              <div>
                <Link
                  to=""
                  className="flex flex-row justify-center items-center border border-gray-300 rounded-lg p-2"
                >
                  <FacebookFilled
                    className="mr-1"
                    style={{ color: 'blue', fontSize: '17px' }}
                  />
                  <span className="text-white">Sign in with Facebook</span>
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete=''
                prefix={<UserOutlined />}
                style={{ padding: '8px', borderRadius: '7px' }}
              />
              {errors.email && (
                <p className="text-red-300 mb-0">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <Input.Password
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                prefix={<UserOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                style={{ padding: '8px', borderRadius: '7px' }}
              />
              {errors.password && (
                <p className="text-red-300 mb-0">{errors.password}</p>
              )}
            </div>

            <div>
              <Button
                label={signInMutation.isLoading ? 'Signing in...' : 'Sign In'}
                bgColor="primary"
                type="submit"
                size="large"
              />
            </div>

            <p className="mt-12 mb-0 text-white text-center">
              Don’t have an account yet?
              <Link
                to="/register?auth=student"
                className="text-green-700 hover:text-green-900 hover:underline ml-1"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
