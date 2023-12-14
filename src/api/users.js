import { axiosInstance } from '../axiosInstance';

const getUser = async () => {
  return await axiosInstance.get('auth/user');
};

export { getUser };
