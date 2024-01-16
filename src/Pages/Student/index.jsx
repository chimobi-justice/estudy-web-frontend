import { Link } from 'react-router-dom';

import useCourses from '../../hooks/useCourses';
import useCreateEnrollCourse from '../../hooks/useCreateEnrollCourse';

import Layout from '../../Layouts';

import {
  AppstoreOutlined,
  BarsOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { Avatar, Select } from 'antd';

import {
  DashbaordCourseIconImage,
  DashbaordCourseHolderImage,
} from './styled.index';
import Skeleton from '../../Components/Skeleton';

import Button from '../../Components/Button';

const { Option } = Select;

const StudentDashboard = () => {
  const { data: getAllCourses, isLoading } = useCourses();

  const enrollCourseMutation = useCreateEnrollCourse();

  return (
    <Layout label="Dashboard">
      <div className="flex justify-end items-center my-3">
        <div className="bg-white pt-1 pl-2 pr-2 pb-2 shadow-sm">
          <CaretDownOutlined />
        </div>
        <div>
          <div className="flex items-center">
            <span className="bg-white pt-1 pl-2 pr-2 pb-2 shadow-sm">
              sort by:
            </span>
            <Select
              defaultValue="all category"
              style={{
                width: 120,
              }}
            >
              <Option value="marketing">Marketing</Option>
              <Option value="web development">Web Development</Option>
              <Option value="mobile development">Mobile Development</Option>
              <Option value="all category">All Category</Option>
            </Select>
          </div>
        </div>
        <div className="bg-white pt-1 pl-2 pr-2 pb-2 shadow-sm">
          <BarsOutlined />
        </div>
        <div className="bg-green-300 pt-1 pl-2 pr-2 pb-2 shadow-sm">
          <AppstoreOutlined />
        </div>
      </div>

      {isLoading && <Skeleton />}

      <div className="grid grid-cols-4 gap-8 mb-3">
        {getAllCourses?.data?.data?.map((course) => (
          <Link
            to={`/s/course/${course?.id}/overview`}
            key={course?.id}
            className="relative"
          >
            <div className="bg-white shadow-lg p-4">
              <div className="flex justify-between items-center my-2">
                <div>
                  <DashbaordCourseIconImage src={course?.thumbnail} />
                </div>

                {course?.isEnrolled ? null : (
                  <Button
                    label="Enroll"
                    type="button"
                    bgColor="primary"
                    handleClick={(e) => {
                      e.preventDefault();
                      enrollCourseMutation.mutate(course.id);
                    }}
                  />
                )}
              </div>

              <div className="flex justify-between items-center my-2">
                <h3 className="mb-0 font-medium text-gray-600">
                  {course?.name}
                </h3>

                <p className="text-xs text-gray-500 font-thin mb-0">
                  ${course?.price}
                </p>
              </div>
              <div className="flex items-center my-2">
                <div>
                  {course?.profile?.avatar ? (
                    <DashbaordCourseHolderImage src={course?.profile?.avatar} />
                  ) : (
                    <Avatar
                      shape="circle"
                      size="small"
                      style={{
                        marginRight: '3px',
                      }}
                    />
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-0 ml-2">
                  {course?.profile?.fullname}
                </p>
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="flex items-center text-xs text-gray-500 font-thin">
                  {course?.created_at?.human}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default StudentDashboard;
