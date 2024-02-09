import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';
import Logo from '../../../Components/Logo';
import { DesktopNavBar, MobileNavBar } from './styled.navbar';
import { AlignRightOutlined, CloseCircleOutlined } from '@ant-design/icons';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    window.location.href = 'register?auth=student';
  };

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Desktop */}
      <DesktopNavBar className="p-4 border fixed top-0 w-full bg-white z-10">
        <nav className="flex justify-between w-11/12 m-auto items-center">
          <Logo />

          <ul className="flex justify-between">
            <li className="pl-5">
              <Link to="/" className="text-gray-600 hover:text-gray-400">
                About
              </Link>
            </li>
            <li className="pl-5">
              <Link to="/" className="text-gray-600 hover:text-gray-400">
                Categories
              </Link>
            </li>
            <li className="pl-5">
              <Link to="/" className="text-gray-600 hover:text-gray-400">
                Courses
              </Link>
            </li>
            <li className="pl-5">
              <Link to="/" className="text-gray-600 hover:text-gray-400">
                Blog
              </Link>
            </li>
          </ul>

          <ul className="flex justify-between items-center">
            <li className="pl-5">
              <Link to="/login" className="text-gray-600 hover:text-gray-400">
                Sign in
              </Link>
            </li>
            <li className="pl-5">
              <Button
                type="button"
                handleClick={handleClick}
                bgColor="primary"
                label="Sign up"
              />
            </li>
          </ul>
        </nav>
      </DesktopNavBar>
      {/* End of Desktop */}

      {/* End of Mobile */}
      <MobileNavBar className="border fixed top-0 w-full bg-white z-10">
        <nav className="flex justify-between items-center justify-center p-2">
          <Logo />
          <div onClick={openMenu}>
            <AlignRightOutlined className="text-2xl" />
          </div>
        </nav>
      </MobileNavBar>

      {open && (
        <ul className="top-0 fixed bg-green-900 w-full h-auto p-3 z-10">
          <div className="float-right" onClick={openMenu}>
            <CloseCircleOutlined className="text-2xl" />
          </div>
          <div className="mt-10 text-white">
            <li className="pt-2 pb-2">Home</li>
            <li className="pt-2 pb-2">Categories</li>
            <li className="pt-2 pb-2">Courses</li>
            <li className="pt-2 pb-2">Blog</li>
            <li className="pt-2 pb-2">Blog</li>

            <li className="pt-2 pb-2">
              <Link to="/login" className="text-white">
                Sign in
              </Link>
            </li>
            <li className="pt-2 pb-2">
              <Button
                type="button"
                handleClick={handleClick}
                bgColor="primary"
                label="Sign up"
                size="large"
              />
            </li>
          </div>
        </ul>
      )}
      {/* End of Mobile */}
    </>
  );
};

export default NavBar;
