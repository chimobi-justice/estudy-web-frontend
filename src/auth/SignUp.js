import { useMutation, useQueryClient } from '@tanstack/react-query';

import QUERY_KEY from '../constants/queryKeys';

import useAuth from '.';

import { errorNotification } from '../helpers/notification';

const SignUpUser = () => {
  const { signUp } = useAuth();

  const queryClient = useQueryClient();

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      queryClient.invalidateQueries([QUERY_KEY.user]);
    },
    onError: (error) => {
      errorNotification(error);
    },
  });

  return { signUpMutation };
};

export default SignUpUser;
