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
              Estudy An e-learning platform – Excellence in Teaching,
            </div>
          </div>
        </div>
        <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
          {/* footer widget */}
          <div className="footer-widget">
            <h4 className="">LINKS</h4>
            <ul className="footer-widget__navigation">
              <li>
                <Link to="/" className="text-gray-800">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-800">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-800">Service</Link>
              </li>
              <li>
                <Link to="contact-us" className="text-gray-800">Contact Us</Link>
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
            &copy; Estudy {new Date().getFullYear()}. All Rights Reserved. Born in NG 	.
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
