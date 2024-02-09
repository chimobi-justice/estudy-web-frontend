import { Link, useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpvalidateSchema } from '../../validations/signup';
import SignUpUser from '../../auth/SignUp';
import { Input } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  FacebookFilled,
  GoogleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Button from '../../Components/Button';

const Signup = () => {
  const { signUpMutation } = SignUpUser();

  const [searchParams] = useSearchParams();

  let queryString = '';

  if (searchParams.get('auth') === 'student') {
    queryString = 'mentee';
  } else {
    queryString = 'mentor';
  }

  const _handleSignup = (values) => {
    signUpMutation.mutate({
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      role: queryString,
    });
  };

  const formilk = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
    },
    onSubmit: _handleSignup,
    validationSchema: signUpvalidateSchema,
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formilk;

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
          <form
            className="lg:w-7/12 sm:w-11/12 lg:mx-32 sm:mx-4 p-2"
            onSubmit={handleSubmit}
          >
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
                  <span className="text-gray-500">Sign up with Google</span>
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
                  <span className="text-gray-500">Sign up with Facebook</span>
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <Input
                type="text"
                placeholder="Full Name"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                prefix={<UserOutlined />}
                style={{ padding: '8px', borderRadius: '7px' }}
              />
              {errors.email && (
                <p className="text-red-300 mb-0">{errors.fullname}</p>
              )}
            </div>

            <div className="mb-6">
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
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
                label={signUpMutation.isLoading ? 'Signing up...' : 'Sign Up'}
                bgColor="primary"
                type="submit"
                size="large"
              />
            </div>

            <p className="mt-12 mb-0 text-white text-center">
              Already have an account?
              <Link
                to="/login"
                className="text-green-700 hover:text-green-900 hover:underline ml-1"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;