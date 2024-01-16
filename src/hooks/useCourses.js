import { useQuery } from "@tanstack/react-query";
import { studentAllCourse } from "../api/courses";

const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: studentAllCourse,
  });
}

export default useCourses