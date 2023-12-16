import { useMutation } from '@tanstack/react-query';

import useAuth from '.';

import { errorNotification } from '../helpers/notification';

const SignUpUser = () => {
  const { signUp } = useAuth();

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onError: (error)  => {
      errorNotification(error.response.data.message);
    },
  });

  return { signUpMutation };
};

export default SignUpUser;