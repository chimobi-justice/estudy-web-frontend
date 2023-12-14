import { useMutation, useQueryClient } from '@tanstack/react-query';

import QUERY_KEY from '../constants/queryKeys';

import useAuth from '.';

import { errorNotification } from '../helpers/notification';

const SignInUser = () => {
  const { signIn } = useAuth();

  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      queryClient.invalidateQueries([QUERY_KEY.user]);
    },
    onError: (error) => {
      errorNotification(error);
    },
  });

  return { signInMutation };
};

export default SignInUser;
