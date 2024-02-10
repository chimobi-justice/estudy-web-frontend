import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Result } from 'antd';
import Button from '../../Components/Button';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../../axiosInstance';
import {
  errorNotification,
  successNotification,
} from '../../helpers/notification';

const PaymentCallback = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const statusParams = queryParams.get('status');
  const transParams = queryParams.get('transaction_id');
  const refParams = queryParams.get('tx_ref');

  const paymentSuccess = useMutation(
    (transactionId) =>
      axiosInstance.post('payment/callback', { transaction_id: transactionId }),
    {
      onSuccess: (data) => {
        if (data?.data?.status === 'success') {
          successNotification(data?.data?.message);
        } else {
          errorNotification(data?.data?.message);
        }
      },
    }
  );

  useEffect(() => {
    if (transParams) {
      paymentSuccess.mutate(transParams);
    }
  }, []);

  return (
    <>
      {refParams && transParams && statusParams === 'successful' ? (
        <Result
          status={
            paymentSuccess.error?.response?.status === 400 ? 'error' : 'success'
          }
          title={
            paymentSuccess.error?.response?.status === 422
              ? 'Payment has been verified'
              : paymentSuccess.error?.response?.status === 400
              ? 'Verification failed!'
              : 'Payment Successfully!'
          }
          subTitle={`Transaction number: ${transParams}, Please Your payment ${
            paymentSuccess.error?.response?.status === 422
              ? 'has been verified successfully'
              : paymentSuccess.error?.response?.status === 400
              ? 'Verification failed!'
              : 'has been Paid successfully!'
          }`}
          extra={[
            <Button
              label="Go Back"
              bgColor="secondary"
              type="button"
              handleClick={() => {
                window.location.href = `${process.env.REACT_APP_FRONTEND_URL}s/dashboard`
              }}
            />
          ]}
        />
      ) : (
        <Result
          status="error"
          title="Transaction Failed"
          subTitle="Please check and modify the following information before resubmitting."
          extra={[
            <Button label="Go Back" 
              bgColor="secondary" 
              type="button"  
              handleClick={() => {
                window.location.href = `${process.env.REACT_APP_FRONTEND_URL}s/dashboard`
              }} 
            />
          ]}
        />
      )}
    </>
  );
};

export default PaymentCallback;
