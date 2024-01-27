import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAccount } from "../api/users";
import { errorNotification } from "../helpers/notification";

const useDeleteAccount = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: (error) => {
      errorNotification(error?.response?.data?.message)
    }
  });
}

export default useDeleteAccount;