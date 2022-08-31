import { Link } from "react-router-dom";

import StyledFooter from "./styled.footer";

import Logo from "../../../Components/Logo";

import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="flex justify-between w-9/12 m-auto items-center">
        <Logo />

        <ul className="flex justify-between">
          <li className="pl-5">
            <Link
              to="/"
              className="text-white hover:text-green-900 hover:underline"
            >
              About
            </Link>
          </li>
          <li className="pl-5 text-white">
            <Link
              to="/"
              className="text-white hover:text-green-900 hover:underline"
            >
              Categories
            </Link>
          </li>
          <li className="pl-5 text-white">
            <Link
              to="/"
              className="text-white hover:text-green-900 hover:underline"
            >
              Courses
            </Link>
          </li>
          <li className="pl-5 text-white">
            <Link
              to="/"
              className="text-white hover:text-green-900 hover:underline"
            >
              Blog
            </Link>
          </li>
        </ul>

        <ul>
          <Link
            to="/"
            className="pl-1 text-white hover:text-green-900 hover:underline"
          >
            <FacebookFilled />
          </Link>
          <Link
            to="/"
            className="pl-1 text-white hover:text-green-900 hover:underline"
          >
            <InstagramFilled />
          </Link>
          <Link
            to="/"
            className="pl-1 text-white hover:text-green-900 hover:underline"
          >
            <TwitterCircleFilled />
          </Link>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
