import { Link } from "react-router-dom";

import loginImage from "../../assets/images/auth.gif";

import { useFormik } from "formik";
import { validateSchema } from "../../validations/login";

import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  FacebookFilled,
  GoogleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Button from "../../Components/Button";

const Login = () => {
  const _handleLogin = () => {
    console.log("loading...");
  };

  const formilk = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    onSubmit: _handleLogin,
    validationSchema: validateSchema,
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formilk;

  return (
    <div className="flex items-center">
      <div className="w-3/6">
        <img src={loginImage} alt="" />
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
          <h1 className="text-gray-400 text-3xl font-bold mb-1">
            Welcome Back
          </h1>
          <p className="text-red-600 text-sm font-semimedium mb-1">
            Sign in with
          </p>
          <div className="flex justify-between w-full mb-8 mt-3">
            <div>
              <Link
                to=""
                className="flex items-center border border-gray-300 rounded-lg p-2 hover:bg-gray-50"
              >
                <GoogleOutlined
                  className="mr-1"
                  style={{ color: "red", fontSize: "17px" }}
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
                  style={{ color: "blue", fontSize: "17px" }}
                />
                <span className="text-gray-500">Sign up with Facebook</span>
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <Input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={values.emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={<UserOutlined />}
              style={{ padding: "6px" }}
            />
            {errors.emailAddress && (
              <p className="text-red-300 mb-0">{errors.emailAddress}</p>
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
              style={{ padding: "6px" }}
            />
            {errors.password && (
              <p className="text-red-300 mb-0">{errors.password}</p>
            )}
          </div>

          <div>
            <Button label="Register" bgColor="primary" type="submit" />
          </div>

          <p className="mt-2 mb-0">
            Already have an account?
            <Link
              to="/register?auth=student"
              className="text-green-700 hover:text-green-900 hover:underline ml-1"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
