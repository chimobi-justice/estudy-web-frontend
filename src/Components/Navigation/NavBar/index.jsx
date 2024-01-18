import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { UserProfileContext } from '../../../context/userContext';

import {
  AlignRightOutlined,
  CloseCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Input } from 'antd';

import { Nav } from './styled.Navbar';
import useAuth from '../../../auth';
import { STUDENT_ASIDE_NAV } from '../../../constants/studentAsideNav';
import { TEACHER_ASIDE_NAV } from '../../../constants/teacherAsideNav';
import Button from '../../Button';

const Navbar = ({ label }) => {
  const { user } = useContext(UserProfileContext);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { signOut } = useAuth();

  const handleLoggedOut = () => {
    signOut();
    localStorage.removeItem('uc');
    navigate('/login');
  };

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <Nav className="hidden lg:block lg:flex justify-between fixed w-4/5 border-b-2 bg-white top-0">
        <div className="flex justify-between w-7/12 items-center">
          <h1 className="font-bold text-lg mb-0">{label}</h1>
          <div className="w-9/12 flex items-center">
            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Search..."
              type="search"
              name="search"
              className="p-2"
            />
          </div>
        </div>
        <div className="flex w-1/7 items-center">
          <div className="flex items-center">
            {user?.data?.data?.avatar && (
              <Avatar
                shape="circle"
                size="small"
                src={<img src={user?.data?.data?.avatar} alt="avatar" />}
                style={{
                  marginRight: '3px',
                }}
              />
            )}
            {!user?.data?.data?.avatar && (
              <Avatar
                shape="circle"
                size="small"
                icon={<UserOutlined />}
                style={{
                  marginRight: '3px',
                }}
              />
            )}
            {user?.data?.data?.fullname ? user?.data?.data?.fullname : 'Guest'}
          </div>
        </div>
      </Nav>

      <Nav className="block lg:hidden flex justify-between fixed w-full border-b-2 bg-white top-0">
        <div onClick={openMenu}>
          <AlignRightOutlined className="text-2xl" />
        </div>
        <div>
          {user?.data?.data?.avatar && (
            <Avatar
              shape="circle"
              size="small"
              src={<img src={user?.data?.data?.avatar} alt="avatar" />}
              style={{
                marginRight: '3px',
              }}
            />
          )}
          {!user?.data?.data?.avatar && (
            <Avatar
              shape="circle"
              size="small"
              icon={<UserOutlined />}
              style={{
                marginRight: '3px',
              }}
            />
          )}
        </div>
      </Nav>

      {open && (
        <ul className="top-0 fixed bg-green-900 w-full h-screen overflow-scroll p-3" style={{zIndex: '9999'}}>
          <div className="flex justify-between">
            <h2 className="text-white text-lg">Estudy</h2>
            <div onClick={openMenu}>
              <CloseCircleOutlined className="text-2xl" />
            </div>
          </div>
          <div className="mt-10">
            {pathname.includes('/s')
              ? STUDENT_ASIDE_NAV.map((asidenav) => (
                  <li className="py-1 px-0" key={asidenav.id}>
                    <Link
                      to={asidenav.path}
                      className="block p-2 flex items-center text-white"
                    >
                      {asidenav.icon}
                      {asidenav.name}
                    </Link>
                  </li>
                ))
              : null}

            {pathname.includes('/m')
              ? TEACHER_ASIDE_NAV.map((asidenav) => (
                  <li className="py-1 px-0" key={asidenav.id}>
                    <Link
                      to={asidenav.path}
                      className="block p-2 flex items-center text-white"
                    >
                      {asidenav.icon}
                      {asidenav.name}
                    </Link>
                  </li>
                ))
              : null}
          </div>


          <div className="absolute bottom-8 w-11/12 p-2">
            <Button
              type="submit"
              handleClick={handleLoggedOut}
              bgColor="primary"
              size="large"
              label="Log out"
            />
          </div>
        </ul>
      )}
    </>
  );
};

export default Navbar;
