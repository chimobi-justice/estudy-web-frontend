import { Link } from 'react-router-dom';

import StyledFooter from './styled.footer';

import Logo from '../../../Components/Logo';

import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='flex justify-between w-9/12 m-auto items-center'>
        <Logo />

        <ul className='flex justify-between'>
          <li className='pl-5 text-white'><Link to="/">About</Link></li>
          <li className='pl-5 text-white'><Link to="/">Categories</Link></li>
          <li className='pl-5 text-white'><Link to="/">Courses</Link></li>
          <li className='pl-5 text-white'><Link to="/">Blog</Link></li>
        </ul>

        <ul>
          <Link to="/" className='pl-1'><FacebookFilled /></Link>
          <Link to="/" className='pl-1'><InstagramFilled /></Link>
          <Link to="/" className='pl-1'><TwitterCircleFilled /></Link>
        </ul>
      </div>

    </StyledFooter>
  );
}

export default Footer;