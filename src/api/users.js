import { axiosInstance } from '../axiosInstance';

const getUser = async () => {
  return await axiosInstance.get('/user');
};

const userProfile = async (fields) => {
  const response = await axiosInstance.patch('/user/profile', fields);
  return response.data; 
};

const userProfileAll = async (fields) => {
  const response = await axiosInstance.patch('/user/profile/all', fields);
  return response.data; 
};

const deleteAccount = async () => {
  const response = await axiosInstance.post('/user/delete');
  return response.data; 
};


export { getUser, userProfile, userProfileAll, deleteAccount };
