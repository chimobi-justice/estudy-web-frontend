import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userProfileBio } from "../api/users";
import { errorNotification, successNotification } from "../helpers/notification";

const useCreateProfileBio = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userProfileBio,
    onSuccess: (data) => {
      successNotification(data?.message);

      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: (error) => {
      errorNotification(error?.response?.data?.message);
    },
  })
}

export default useCreateProfileBio;