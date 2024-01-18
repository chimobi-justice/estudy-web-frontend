import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse } from "../api/courses";

const useDeleteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['courses'],
      });
    },
  });
}

export default useDeleteCourse;