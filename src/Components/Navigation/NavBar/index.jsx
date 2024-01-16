import { useContext } from 'react';

import { UserProfileContext } from '../../../context/userContext';

import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Input } from 'antd';

import { Nav } from './styled.Navbar';

const Navbar = ({ label }) => {
  const { user } = useContext(UserProfileContext);

  return (
    <Nav className="flex justify-between fixed w-4/5 border-b-2 z-10 bg-white top-0">
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
  );
};

export default Navbar;
