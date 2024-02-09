import { useMutation } from '@tanstack/react-query';
import { payment } from '../api/payments';
import {
  errorNotification,
} from '../helpers/notification';

const useCreatePayment = () => {
  return useMutation({
    mutationFn: payment,
    onSuccess: (data) => {
      window.open(data?.data?.url, '_blank');
    },
    onError: (error) => {
      errorNotification(error?.response?.data?.message);
    },
  });
};

export default useCreatePayment;
