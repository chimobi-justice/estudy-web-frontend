import { useQuery } from "@tanstack/react-query";
import { getEnrollCourses } from "../api/courses";

const useCoursesEnroll = () => {
  return useQuery({
    queryKey: ['courses-enroll'],
    queryFn: getEnrollCourses,
  });
}

export default useCoursesEnroll;