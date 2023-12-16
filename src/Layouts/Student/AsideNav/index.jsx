import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './AsideNav.css';

import Logo from '../../../Components/Logo';
import Button from '../../../Components/Button';

import { STUDENT_ASIDE_NAV } from '../../../constants/studentAsideNav';

import { StudentAsideNavWrapper } from './styled.AsideNav';
import useAuth from '../../../auth';
import { successNotification } from '../../../helpers/notification';
import { AuthContext } from '../../../context/authContext';

const AsideNav = () => {
  const { clearStoredUserCookie } = useContext(AuthContext);

  const navigate = useNavigate();

  const { signOut } = useAuth();

  const handleLoggedOut = () => {
    signOut();
    clearStoredUserCookie()
    navigate('/login');
    successNotification('logged out successfully');
  };

  return (
    <>
      <StudentAsideNavWrapper className="shadow-lg">
        <div className="text-center p-1">
          <Logo />
          <p className="text-sm text-gray-600 font-normal mt-1">
            Learn From Home
          </p>
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
      </StudentAsideNavWrapper>
    </>
  );
};

export default AsideNav;
