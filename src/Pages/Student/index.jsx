import { Link } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import Layout from '../../Layouts';
import Avatar from 'react-avatar';
import {
  AppstoreOutlined,
  BarsOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { Select } from 'antd';
import {
  DashbaordCourseIconImage,
  DashbaordCourseHolderImage,
} from './styled.index';
import Skeleton from '../../Components/Skeleton';
import Truncate from '../../helpers/truncate';

const { Option } = Select;

const StudentDashboard = () => {
  const { data: getAllCourses, isLoading } = useCourses();

  return (
    <Layout label="Dashboard">
      <div className="flex justify-center lg:justify-end items-center my-3">
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6 p-2">
        {getAllCourses?.data?.data?.map((course) => {
          return (
            <Link
              to={
                course?.price
                  ? `/s/${course?.slug}/course`
                  : `/s/course/${course?.id}/overview`
              }
              key={course?.id}
              className="relative shadow-lg bg-white mb-2 border"
            >
              <div className="p-4">
                <div className="flex justify-between items-center my-2">
                  <div>
                    <DashbaordCourseIconImage src={course?.thumbnail} />
                  </div>
                </div>

                <div className="flex justify-between items-center my-2">
                  <h3 className="mb-0 font-medium text-gray-600">
                    {Truncate(course?.name, 22)}
                  </h3>

                  <p className="text-xs text-gray-500 font-thin mb-0">
                    {course?.price ? '₦' : '₦0.00'}
                    {course?.price}
                  </p>
                </div>
                <div className="flex items-center my-2">
                  <div>
                    {course?.profile?.avatar ? (
                      <DashbaordCourseHolderImage
                        src={course?.profile?.avatar}
                      />
                    ) : (
                      <Avatar
                      name={course?.profile?.fullname}
                      size="25"
                      round={true}
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
          );
        })}
      </div>
    </Layout>
  );
};

export default StudentDashboard;
