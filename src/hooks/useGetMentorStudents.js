import { useQuery } from "@tanstack/react-query";
import { getMentorEnrolledStudents } from "../api/courses";

const useGetMentorStudents = (page) => {
  return useQuery({
    queryKey: ['student', {page}],
    keepPreviousData: true,
    queryFn: () => getMentorEnrolledStudents(page),
  })
}

export default useGetMentorStudents;