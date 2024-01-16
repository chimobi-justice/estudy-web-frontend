import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourse } from "../api/courses";
import { errorNotification, successNotification } from "../helpers/notification";

const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCourse,
    onSuccess: (data) => {
      successNotification(data?.data?.message);

      queryClient.invalidateQueries({
        queryKey: ['courses'],
      });
    },
    onError: (error) => {
      errorNotification(error?.response?.data?.message);
    },
  });
}

export default useCreateCourse;