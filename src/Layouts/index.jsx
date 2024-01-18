import AsideNav from '../Components/Navigation/AsideNav';
import Navbar from '../Components/Navigation/NavBar';

const Layout = ({ label, children }) => {
  return (
    <div className="lg:flex p-0 lg:p-5 h-screen overflow-auto">
      <div className="hidden lg:block w-1/6">
        <AsideNav />
      </div>
      <div className="w-full lg:w-5/6 ml-0 lg:ml-5">
        <Navbar label={label}  />
        <div className='mt-20'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
