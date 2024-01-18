import { useMutation, useQueryClient } from "@tanstack/react-query";
import { successNotification } from "../helpers/notification";
import { userProfile } from "../api/users";

const useProfileAvatarMutation = () => {
 const queryClient = useQueryClient();
 
 return useMutation({
   mutationFn: userProfile,
   onSuccess: (data) => {
     successNotification(data?.message);

     queryClient.invalidateQueries({
       queryKey: ['user'],
     });
   },
 });
}

export default useProfileAvatarMutation;