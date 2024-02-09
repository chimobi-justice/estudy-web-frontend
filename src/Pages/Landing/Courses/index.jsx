import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { allCourse } from '../../../api/courses';
import Button from '../../../Components/Button';
import { CourseWrapper, CourseBoxImage, CourseHolder } from './styled.course';
import Skeleton from '../../../Components/Skeleton';
import { Avatar as AntAvatar } from 'antd';
import Avatar from 'react-avatar';

const HomeCourse = () => {
  const { data: allCourses, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: allCourse,
  });

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
              <div
                className="bg-white border border-gray-200 rounded-lg w-ful ml-2"
                key={course?.id}
              >
                <Link to="/login">
                  <CourseBoxImage src={course?.thumbnail} alt="" />
                  <div className="p-2">
                    <div className="flex justify-between p-2 items-center">
                      <div>
                        <span>
                          {course?.profile?.avatar ? (
                            <AntAvatar
                              shape="circle"
                              size="small"
                              src={
                                <img
                                  src={course?.profile?.avatar}
                                  alt="avatar"
                                />
                              }
                              style={{
                                marginRight: '3px',
                              }}
                            />
                          ) : (
                            <Avatar
                              name={course?.profile?.fullname}
                              size="30"
                              round={true}
                              className="mr-1"
                            />
                          )}
                        </span>
                        <span className="text-gray-600 text-xs">
                          {course?.profile?.fullname}
                        </span>
                      </div>
                      <p className="bg-gray-100 py-1 px-2 text-xs text-blue-400">
                        {course?.category}
                      </p>
                    </div>
                    <div className="flex justify-between items-center my-2">
                      <h4 className="mb-0 p-1 font-bold text-black-400">
                        {course?.description?.slice(0, 70)}
                      </h4>

                      <p className="text-xs text-gray-500 font-thin mb-0">
                        {course?.created_at?.human_short}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">
                        {course?.price ? '₦' : '₦0.00'}
                        {course?.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        {allCourse && allCourses?.data?.data?.length >= 8 && (
          <div className="my-6 text-center">
            <Button label="Vieww All Course" bgColor="secondary" />
          </div>
        )}

        {allCourse && allCourses?.data?.data?.length === 0 && (
          <p className="text-center text-2xl font-bold text-gray-500">
            No Course to Show!
          </p>
        )}
      </CourseHolder>
    </CourseWrapper>
  );
};

export default HomeCourse;
