import { axiosInstance } from '../axiosInstance';

const getUser = async () => {
  return await axiosInstance.get('/user');
};

export { getUser };
