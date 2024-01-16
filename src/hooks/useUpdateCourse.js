import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCourse } from "../api/courses";
import { errorNotification, successNotification } from "../helpers/notification";

const useUpdateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCourse,
    onSuccess: (data) => {
      successNotification(data?.message);

      queryClient.invalidateQueries({
        queryKey: ['courses'],
      });
    },
    onError: (error) => {
      errorNotification(error?.response?.data?.message);
    },
  });
};

export default useUpdateCourse;
