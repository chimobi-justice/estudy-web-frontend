import { useMutation } from '@tanstack/react-query';

import useAuth from '.';

import { errorNotification } from '../helpers/notification';

const SignInUser = () => {
  const { signIn } = useAuth();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onError: (error)  => {
      errorNotification(error?.response?.data?.message);
    },
  });

  return { signInMutation };
};

export default SignInUser;
