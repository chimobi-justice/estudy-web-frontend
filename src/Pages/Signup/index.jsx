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

import signupImage from '../../assets/images/auth.gif';

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
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
      role: queryString,
    });

    console.log('first', '>>>>>>>')
  };

  const formilk = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    onSubmit: _handleSignup,
    validationSchema: signUpvalidateSchema,
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formilk;

  return (
    <div className="flex items-center">
      <div className="w-3/6">
        <img src={signupImage} alt="" />
      </div>
      <div className="w-3/6">
        <h1 className="text-4xl font-bold text-center">
          <Link
            to="/"
            className="text-green-500 hover:text-green-500"
            title="Home"
          >
            Estudy
          </Link>
        </h1>
        <form
          className="w-9/12 p-4 rounded-sm shadow-lg bg-white mx-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-gray-400 text-3xl font-bold mb-1">Sign up</h1>
          <p className="text-red-600 text-sm font-semimedium mb-1">
            Sign up with
          </p>
          <div className="flex justify-between w-full mb-8 mt-3">
            <div>
              <Link
                to=""
                className="flex items-center border border-gray-300 rounded-lg p-2 hover:bg-gray-50"
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
                className="flex items-center border border-gray-300 rounded-lg p-2 text-gray-500 hover:bg-gray-50"
              >
                <FacebookFilled
                  className="mr-1"
                  style={{ color: 'blue', fontSize: '17px' }}
                />
                <span className="text-gray-500">Sign up with Facebook</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <div className="w-6/12 mr-1">
              <Input
                type="text"
                placeholder="First Name"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                prefix={<UserOutlined />}
                style={{ padding: '6px' }}
              />
              {errors.firstname && (
                <p className="text-red-300 mb-0">{errors.firstname}</p>
              )}
            </div>
            <div className="w-6/12 ml-1">
              <Input
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                prefix={<UserOutlined />}
                style={{ padding: '6px' }}
              />
              {errors.lastname && (
                <p className="text-red-300 mb-0">{errors.lastname}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <div className="w-6/12 mr-1">
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                prefix={<UserOutlined />}
                style={{ padding: '6px' }}
              />
              {errors.email && (
                <p className="text-red-300 mb-0">{errors.email}</p>
              )}
            </div>
            <div className="w-6/12 ml-1">
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
                style={{ padding: '6px' }}
              />
              {errors.password && (
                <p className="text-red-300 mb-0">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <Button label="Register" bgColor="primary" type="submit" />
          </div>

          <p className="mt-2 mb-0">
            Already have an account?
            <Link
              to="/login"
              className="text-green-700 hover:text-green-900 hover:underline ml-1"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
