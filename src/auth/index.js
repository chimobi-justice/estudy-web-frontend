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
        const title = data?.message;
        successNotification(title);

        const accessToken = data?.access_token;

        if (accessToken) {
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        }

        if (data?.user_type === 'mentee') {
          localStorage.setItem('uc', data?.access_token);
          navigate('/s/dashboard');
        }
        if (data?.user_type === 'mentor') {
          localStorage.setItem('uc', data?.access_token);
          navigate('/m/dashboard');
        }
      }

      if (status === 201) {
        const title = data?.message;

        successNotification(`${title} Please logged into your account`);
        return;
      }
    } catch (errorResponse) {
      if (errorResponse) {
        errorNotification(errorResponse?.response?.data?.message);
      }
    }
  }
  
  async function signUp(fields) {
    await authServerCall(`${baseURL}auth/signup`, fields);
  }

  async function signIn(fields) {
    await authServerCall(`${baseURL}auth/signin`, fields);
  }

  async function signOut() {
    await authServerCall(`${baseURL}auth/signout`, null);
  }

  return {
    signUp,
    signIn,
    signOut
  };
};

export default useAuth;