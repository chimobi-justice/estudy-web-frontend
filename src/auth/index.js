import { useNavigate } from 'react-router-dom';

import { axiosInstance } from '../axiosInstance';
import { baseURL } from '../axiosInstance/constants';

import {
  errorNotification,
  successNotification,
} from '../helpers/notification';

const useAuth = () => {
  const navigate = useNavigate();

  async function authServerCall(urlEndpoint, fields) {
    const { data, status } = await axiosInstance({
      url: urlEndpoint,
      method: 'POST',
      data: fields,
    });

    try {
      if (status === 200) {
        const title = data?.data?.message;
        successNotification(title);

        if (data?.data?.payload === 'mentee') {
          navigate('/s/dashboard');
        }
        if (data?.data?.payload === 'mentor') {
          navigate('/m/dashboard');
        }
      }

      if (status === 201) {
        const title = data?.data?.message;

        successNotification(`${title} Please logged into your account`);
        return;
      }
    } catch (errorResponse) {
      if (errorResponse) {
        errorNotification(errorResponse?.response?.data?.message);
      }
    }
  }
  
  const getToken = async () => {
    await axiosInstance.get(`sanctum/csrf-cookie`);
  }


  async function signUp(fields) {
    await getToken();
    await authServerCall(`${baseURL}auth/signup`, fields);
  }

  async function signIn(fields) {
    await getToken();
    await authServerCall(`${baseURL}auth/signin`, fields);
  }

  async function signOut() {
    await getToken();
    await authServerCall(`${baseURL}auth/signout`, null);
  }

  return {
    signUp,
    signIn,
    signOut
  };
};

export default useAuth;