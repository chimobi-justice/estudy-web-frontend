import { useMutation, useQueryClient } from "@tanstack/react-query";
import { studentEnrollCourse } from "../api/courses";
import { errorNotification, successNotification } from "../helpers/notification";

const useCreateEnrollCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: studentEnrollCourse,
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

export default useCreateEnrollCourse;