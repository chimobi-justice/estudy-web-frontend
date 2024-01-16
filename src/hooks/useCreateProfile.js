import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userProfileAll } from "../api/users";
import { errorNotification, successNotification } from "../helpers/notification";

const useCreateProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: userProfileAll,
    onSuccess: (data) => {
      successNotification(data?.message);

      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: (error) => {
      errorNotification(error?.message);
    },
  });

}

export default useCreateProfile;