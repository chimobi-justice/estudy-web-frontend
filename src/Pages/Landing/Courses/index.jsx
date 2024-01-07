import { useQuery } from '@tanstack/react-query';
import { allCourse } from '../../../api/courses';

import Button from '../../../Components/Button';

import { CourseWrapper, CourseBoxImage, CourseHolder } from './styled.course';
import Skeleton from '../../../Components/Skeleton';

const HomeCourse = () => {
  const { data: allCourses, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: allCourse,
  });

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <CourseWrapper className="pt-8 pb-8">
      <h3 className="text-2xl text-center font-bold text-gray-900 lg:w-3/12 sm:w-full m-auto">
        Our Popular courses
      </h3>
      <CourseHolder>
        {isLoading && <Skeleton />}

        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-3">
          {allCourses &&
            allCourses?.data?.data?.map((course) => (
              <div className="bg-white border border-gray-200 rounded-lg w-ful ml-2 p-4">
                <CourseBoxImage src={course?.thumbnail} alt="" />
                <div className="flex justify-between p-2 items-center">
                  <p className="font-semibold text-green-600">
                    ${course?.price}
                  </p>
                  <p className="bg-gray-100 py-1 px-2 text-sm text-blue-400">
                    {course?.video} lesson
                  </p>
                </div>
                <div className="flex justify-between items-center my-2">
                  <h4 className="mb-0 font-extrabold text-black-400">
                    {course?.name}
                  </h4>

                  <p className="text-xs text-gray-500 font-thin mb-0">
                    {course?.created_at?.human_short}
                  </p>
                </div>
                <div className="text-center mb-3">
                  <Button
                    type="button"
                    bgColor="secondary"
                    label="Enroll Now"
                    handleClick={handleClick(course?.id)}
                  />
                </div>
              </div>
            ))}
        </div>
      </CourseHolder>
    </CourseWrapper>
  );
};

export default HomeCourse;
