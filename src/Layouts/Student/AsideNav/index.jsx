import { NavLink } from "react-router-dom";

import "./AsideNav.css";

import Logo from "../../../Components/Logo";
import Button from "../../../Components/Button";

import lifetime from "../../../assets/images/lifetime.svg";

import { STUDENT_ASIDE_NAV } from "../../../constants/studentAsideNav";

import { StudentAsideNavWrapper, StudentAsideNavImg } from "./styled.AsideNav";

const AsideNav = () => {
  return (
    <>
      <StudentAsideNavWrapper className="shadow-lg">
        <div className="text-center p-1">
          <Logo />
          <p className="text-sm text-gray-600 font-normal mt-1">Learn From Home</p>
        </div>

        <ul className="mt-3 mb-2">
          {STUDENT_ASIDE_NAV.map((asidenav) => (
            <li className="py-1" key={asidenav.id}>
              <NavLink
                to={asidenav.path}
                className="hover:bg-green-100 block p-2 flex items-center text-gray-500 hover:text-gray-500"
              >
                {asidenav.icon}
                {asidenav.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-center pb-2">
          <StudentAsideNavImg>
            <img src={lifetime} alt="" />
          </StudentAsideNavImg>
          <p className="text-sm text-gray-600 font-medium mb-1">Upgrade to PRO for more instructors </p>
          <Button type="button" bgColor="primary" label="Upgrade now" />
        </div>
      </StudentAsideNavWrapper>
    </>
  );
};

export default AsideNav;
