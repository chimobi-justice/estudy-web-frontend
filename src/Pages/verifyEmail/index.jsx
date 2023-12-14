import { useMemo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import EmailIConfirmedmage from '../../assets/images/email-confirmed.gif';

import useAuth from '../../auth';

const VerifyEmail = () => {
  const { search } = useLocation();
  const { verifyEmail } = useAuth()
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const query = useMemo(
    () => new URLSearchParams(search),
    [search]
  );
  const token = query.get('t');

  useEffect(() => {
    setIsLoading(true);
    const data = async () => {
      try {
        if (token) {
          const res = await verifyEmail({ token });
          if (res) {
            setIsLoading(false);
            setIsError(false);
            setMessage(res.message);
          }
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setMessage(error.data.message);
      }
    };
    data();
  }, []);

  if (!token) return <p>Something went wrong</p>;

  if (isLoading && !isError) return <p>Please wait...</p>;

  return (
    <div style={{ width: '80%', margin: '5em auto', textAlign: 'center' }}>
      {isError && !isLoading ? (
        <p variant="subtitle2" style={{ fontSize: '1rem !important' }}>
          {message}
        </p>
      ) : (
        !isError &&
        !isLoading && (
          <>
            <img
              src={EmailIConfirmedmage}
              alt="Email animation"
              style={{ width: '150px', height: '150px', objectFit: 'contain' }}
            />
            <p
              variant="subtitle2"
              style={{ mb: 4, fontSize: '1rem !important', lineHeight: '1.3em' }}
            >
              {message}
            </p>
            <button
              // fullWidth={false}
              // href={`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}
            >
              Login
            </button>
          </>
        )
      )}
    </div>
  );
};

export default VerifyEmail;
