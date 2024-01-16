import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorNotification, successNotification } from "../helpers/notification";
import { studentUnEnrollCourse } from "../api/courses";

const useCreateUnEnrollCourse = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: studentUnEnrollCourse,
    onSuccess: (data) => {
      successNotification(data?.data?.message);
      queryClient.invalidateQueries({
        queryKey: ['courses-enroll'],
      });
    },
    onError: (error) => {
      errorNotification(error?.response?.data?.message);
    },
  });
} 

export default useCreateUnEnrollCourse;