import { Link } from 'react-router-dom';

import StyledFooter from './styled.footer';

import Logo from '../../../Components/Logo';


const Footer = () => {
  return (
    <StyledFooter>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:w-9/12 sm:w-full lg:mx-auto gap-16 text-gray-800 pt-6 pb-6">
        <div className="">
          <div className="">
            <div className="">
              <a href={`${process.env.PUBLIC_URL}/`}>
                <Logo />
              </a>
            </div>
            <div className="footer-desc">
              Bluesea Investment Limited – Excellence in Engineering,
              Procurement, and Construction. Your success is our commitment.
            </div>
          </div>
        </div>
        <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
          {/* footer widget */}
          <div className="footer-widget">
            <h4 className="">LINKS</h4>
            <ul className="footer-widget__navigation">
              <li>
                <a href="/" className="text-gray-800">Home</a>
              </li>
              <li>
                <a href="/about-us" className="text-gray-800">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-gray-800">Service</a>
              </li>
              <li>
                <a href="contact-us" className="text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="">
            <h4 className="">CONTACT US</h4>
            <div className="">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptate.
              </p>
              <ul className="">
                <li>+234(0) 768 009 8778,</li>
                <li>+234(0) 524 78272 888,</li>
                <li>
                  <a href="mailto:estudy@example.com" className="text-gray-800">estudy@example.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2">
        <div className="text-center">
          <p className="pt-6">
            &copy; Estudy {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
