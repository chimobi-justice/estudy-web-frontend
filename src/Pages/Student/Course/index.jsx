import { useState } from 'react';
import { Link } from 'react-router-dom';

import useCreateUnEnrollCourse from '../../../hooks/useCreateUnEnrollCourse';
import useCoursesEnroll from '../../../hooks/useCoursesEnroll';

import Layout from '../../../Layouts';

import EmptyState from '../../../assets/images/No_data.png';

import {
  AppstoreOutlined,
  BarsOutlined,
  CaretDownOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Select } from 'antd';

import { CourseIconImage } from './styled.Course';
import Skeleton from '../../../Components/Skeleton';
import { Modal } from 'flowbite-react';
import Button from '../../../Components/Button';

const { Option } = Select;

const StudentCourse = () => {
  const [openModal, setOpenModal] = useState(false);
  const [idValue, setIdValue] = useState(null);

  const { data: getCourseEnrolled, isLoading } = useCoursesEnroll();

  const unEnrollCourseMutation = useCreateUnEnrollCourse();

  return (
    <Layout label="My Courses">
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
        {getCourseEnrolled &&
          getCourseEnrolled?.data?.data?.map((course) => (
            <Link
              to={`/s/course/${course?.course_id}/overview`}
              key={course?.id}
              className="relative shadow-lg bg-white mb-2 border"
            >
              <div className="p-4">
                <div className="flex justify-between items-center my-2">
                  <div>
                    <CourseIconImage src={course?.thumbnail} />
                  </div>
                  <div>
                    <Button
                      label="Unenroll"
                      type="button"
                      bgColor="primary"
                      handleClick={(e) => {
                        e.preventDefault();
                        setIdValue(course?.course_id);
                        setOpenModal(true);
                      }}
                    />
                  </div>
                </div>
                <h3 className="my-2 font-medium text-gray-600">
                  {course?.name}
                </h3>
                <div className="flex justify-between items-center my-2">
                  <p className="flex items-center text-xs text-gray-500 font-thin">
                    {course?.price ? '$' : 'free'}{course?.price}
                  </p>
                  <p className="flex items-center text-xs text-gray-500 font-thin">
                    {course?.video?.length} hours
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {getCourseEnrolled && getCourseEnrolled?.data?.data?.length === 0 && (
        <>
          <div className="w-ful lg:w-2/4 mx-auto pb-5 text-center">
            <div className="mx-auto w-11/12 lg:w-3/5">
              <img
                src={EmptyState}
                alt=""
                style={{ width: '300px', height: '300px', display: 'block' }}
              />
            </div>
            <h2>
              Enrolled courses will show up here?
              <Link to="/s/dashboard">Please Enroll a course</Link>
            </h2>
          </div>
        </>
      )}

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <ExclamationCircleOutlined className="mx-auto mb-4 h-14 w-14 text-red-400 text-4xl" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to unenroll this course?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                label="Yes, I'm sure"
                bgColor="primary"
                type="button"
                handleClick={() => {
                  unEnrollCourseMutation.mutate(idValue);
                  setOpenModal(false);
                }}
              />
              <Button
                color="gray"
                label="No, cancel"
                bgColor="secondary"
                type="button"
                handleClick={() => setOpenModal(false)}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export default StudentCourse;
