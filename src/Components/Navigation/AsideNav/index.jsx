import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Logo';
import Button from '../../Button';
import { AsideNavWrapper } from './styled.AsideNav';
import useAuth from '../../../auth';
import { STUDENT_ASIDE_NAV } from '../../../constants/studentAsideNav';
import { TEACHER_ASIDE_NAV } from '../../../constants/teacherAsideNav';

const AsideNav = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { signOut } = useAuth();

  const handleLoggedOut = () => {
    signOut();
    localStorage.removeItem('uc');
    navigate('/login');
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

        <ul className="mt-3 mb-2 block">
          {pathname.includes('/s')
            ? STUDENT_ASIDE_NAV.map((asidenav) => (
                <li className="py-1 px-2" key={asidenav.id}>
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
                <li className="py-1 px-2" key={asidenav.id}>
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

          <div className="absolute bottom-8 w-full p-2">
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
