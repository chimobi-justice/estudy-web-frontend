import { NavLink, Link } from 'react-router-dom';

import Button from '../../../Components/Button';
import Logo from '../../../Components/Logo';

const NavBar = () => {
  const handleClick = () => {
    window.location.href = 'register?auth=student';
  }

  return (
    <>
      <header className='p-3'>
        <nav className='flex justify-between w-11/12 m-auto items-center'>
          <Logo />

          <ul className='flex justify-between'>
            <li className='pl-5'><Link to="/" className='text-gray-600 hover:text-gray-400'>About</Link></li>
            <li className='pl-5'><Link to="/" className='text-gray-600 hover:text-gray-400'>Categories</Link></li>
            <li className='pl-5'><Link to="/" className='text-gray-600 hover:text-gray-400'>Courses</Link></li>
            <li className='pl-5'><Link to="/" className='text-gray-600 hover:text-gray-400'>Blog</Link></li>
          </ul>

          <ul className='flex justify-between items-center'>
            <li className='pl-5'><Link to="/login" className='text-gray-600 hover:text-gray-400'>Sign in</Link></li>
            <li className='pl-5'>
              <Button 
                type="button" 
                handleClick={handleClick} 
                bgColor="primary" 
                label="Sign up" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;