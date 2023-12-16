import { useState } from 'react';

import { getUser } from '../../../api/users';
import { useQuery } from '@tanstack/react-query';

import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Input } from 'antd';

import { StudentNav } from './styled.Navbar';

const Navbar = ({ label }) => {
  const [toggle, setToggle] = useState(false);

  const handleSearch = () => {
    setToggle(!toggle);
  };
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  return (
    <StudentNav className="flex justify-between">
      <div className="flex justify-between w-7/12 items-center">
        <h1 className="font-bold text-lg">{label}</h1>
        <div className="w-9/12 flex items-center">
          <SearchOutlined className="mr-1" onClick={handleSearch} />
          {toggle && (
            <Input
              type="text"
              name="search"
              className="p-1 border-2 border-black"
            />
          )}
        </div>
      </div>
      <div className="flex w-1/7 items-center">
        <p className="flex items-center">
          <Avatar
            shape="circle"
            size="small"
            icon={<UserOutlined />}
            style={{
              marginRight: '3px',
            }}
          />
          {user?.data?.data?.fullname ? user?.data?.data?.fullname : 'Guest'}
        </p>
      </div>
    </StudentNav>
  );
};

export default Navbar;
