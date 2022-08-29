import { NavLink } from 'react-router-dom';

import Button from '../../../Components/Button';
import Logo from '../../../Components/Logo';

const NavBar = () => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <>
      <header className='p-3'>
        <nav className='flex justify-between w-11/12 m-auto items-center'>
          <Logo />

          <ul className='flex justify-between'>
            <li className='pl-5'><NavLink to="/">About</NavLink></li>
            <li className='pl-5'><NavLink to="/">Categories</NavLink></li>
            <li className='pl-5'><NavLink to="/">Courses</NavLink></li>
            <li className='pl-5'><NavLink to="/">Blog</NavLink></li>
          </ul>

          <ul className='flex justify-between items-center'>
            <li className='pl-5'><NavLink to="/">Sign in</NavLink></li>
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