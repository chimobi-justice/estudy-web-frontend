import { axiosInstance } from '../axiosInstance';

const getUser = async () => {
  const response = await axiosInstance.get('/user');
  return response.data;
};

const userProfile = async (fields) => {
  const response = await axiosInstance.patch('/user/profile', fields);
  return response.data; 
};

const userProfileBio = async (fields) => {
  const response = await axiosInstance.patch('/user/profile/bio', fields);
  return response.data; 
};

const userProfileAll = async (fields) => {
  const response = await axiosInstance.patch('/user/profile/all', fields);
  return response.data; 
};

const deleteAccount = async () => {
  const response = await axiosInstance.delete('/user/delete');
  return response.data; 
};


export { 
  getUser, 
  userProfile, 
  userProfileBio, 
  userProfileAll, 
  deleteAccount 
};
