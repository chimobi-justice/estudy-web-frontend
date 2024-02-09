import { axiosInstance } from "../axiosInstance";

const payment = async (data) => {
  return await axiosInstance.post('pay', data);
};

const paymentCallback = async (id) => {
  const response = await axiosInstance.get('/rave/callback');
  return response.data;
};

export { payment, paymentCallback }