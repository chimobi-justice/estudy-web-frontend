import AsideNav from '../Components/Navigation/AsideNav';
import Navbar from '../Components/Navigation/NavBar';

const Layout = ({ label, children }) => {
  return (
    <div className="flex p-5">
      <div className="w-1/6">
        <AsideNav />
      </div>
      <div className="w-5/6 ml-5">
        <Navbar label={label} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
