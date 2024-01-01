import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import './AsideNav.css';

import Logo from '../../Components/Logo';
import Button from '../../Components/Button';

import { STUDENT_ASIDE_NAV } from '../../constants/studentAsideNav';

import { AsideNavWrapper } from './styled.AsideNav';
import useAuth from '../../auth';
import { successNotification } from '../../helpers/notification';
import { TEACHER_ASIDE_NAV } from '../../constants/teacherAsideNav';

const AsideNav = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { signOut } = useAuth();

  const handleLoggedOut = () => {
    signOut();
    localStorage.removeItem('uc');
    navigate('/login');
    successNotification('logged out successfully');
  };

  return (
    <>
      <AsideNavWrapper className="shadow-lg">
        <div className="text-center p-1">
          <Logo />
          <p className="text-sm text-gray-600 font-normal mt-1">
            Learn From Home
          </p>
        </div>

        <ul className="mt-3 mb-2">
          {pathname.includes('/s')
            ? STUDENT_ASIDE_NAV.map((asidenav) => (
                <li className="py-1" key={asidenav.id}>
                  <NavLink
                    to={asidenav.path}
                    className="hover:bg-green-100 block p-2 flex items-center text-gray-500 hover:text-gray-500"
                  >
                    {asidenav.icon}
                    {asidenav.name}
                  </NavLink>
                </li>
              ))
            : null}

          {pathname.includes('/m')
            ? TEACHER_ASIDE_NAV.map((asidenav) => (
                <li className="py-1" key={asidenav.id}>
                  <NavLink
                    to={asidenav.path}
                    className="hover:bg-green-100 block p-2 flex items-center text-gray-500 hover:text-gray-500"
                  >
                    {asidenav.icon}
                    {asidenav.name}
                  </NavLink>
                </li>
              ))
            : null}

          <div className="absolute bottom-8 w-full">
            <Button
              type="submit"
              handleClick={handleLoggedOut}
              bgColor="primary"
              size="large"
              label="Log out"
            />
          </div>
        </ul>
      </AsideNavWrapper>
    </>
  );
};

export default AsideNav;
