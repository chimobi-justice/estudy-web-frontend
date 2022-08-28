import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';
import Logo from '../../../Components/Logo';

const NavBar = () => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <>
      <header className='p-3'>
        <nav className='flex justify-between w-9/12 m-auto items-center'>
          <Logo />

          <ul className='flex justify-between'>
            <li className='pl-5'><Link to="/">About</Link></li>
            <li className='pl-5'><Link to="/">Categories</Link></li>
            <li className='pl-5'><Link to="/">Courses</Link></li>
            <li className='pl-5'><Link to="/">Blog</Link></li>
          </ul>

          <ul className='flex justify-between items-center'>
            <li className='pl-5'><Link to="/">Sign in</Link></li>
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