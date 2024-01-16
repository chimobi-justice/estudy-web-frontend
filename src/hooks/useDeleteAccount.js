import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAccount } from "../api/users";
import { errorNotification, successNotification } from "../helpers/notification";

const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
      successNotification(data?.message)
    },
    onError: (error) => {
      errorNotification(error?.response?.data?.message)
    }
  });
}

export default useDeleteAccount;