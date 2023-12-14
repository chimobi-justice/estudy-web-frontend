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
      headers: { 'Content-Type': 'application/json' },
    });

    try {
      if (status === 200) {
        const title = data?.message;
        successNotification(title);

        if (data?.payload?.role === 'mentee') {
          navigate('/s/dashboard');
        } else {
          navigate('/m/dashboard');
        }
      }

      if (status === 201) {
        // const title = data?.message;
        navigate('/auth/confirm');

        // successNotification(`${title} Please check your mail to verify`);
        return;
      }
    } catch (errorResponse) {
      console.log(errorResponse, '<>');
      if (errorResponse) {
        errorNotification(errorResponse?.response?.data?.message);
      }
    }
  }

  async function signUp(fields) {
    authServerCall(`${baseURL}/auth/signup`, fields);
  }

  async function signIn(fields) {
    authServerCall(`${baseURL}/auth/signin`, fields);
  }

  async function verifyEmail(fields) {
    authServerCall(`${baseURL}/auth/verify`, fields);
  }

  return {
    signUp,
    signIn,
    verifyEmail,
  };
};

export default useAuth;
