import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import useDeleteCourse from '../../../../hooks/useDeleteCourse';

import { Dropdown, Table, Modal } from 'flowbite-react';

import { getMentorCourses } from '../../../../api/courses';

import EmptyState from '../../../../assets/images/No_data.png';

import { Select } from 'antd';
import {
  AppstoreOutlined,
  BarsOutlined,
  CaretDownOutlined,
  DashOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import Layout from '../../../../Layouts';
import Button from '../../../../Components/Button';
import Skeleton from '../../../../Components/Skeleton';

const { Option } = Select;

const AllCourse = () => {
  const [openModal, setOpenModal] = useState(false);
  const [checkValue, setCheckValue] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: getMentorCourses,
  });

  const deleteCourseMutation = useDeleteCourse();

  return (
    <Layout label="My Courses">
      <>
        <div className="ml-2 block lg:hidden">
          <Link
            to="/m/courses/create"
            className="text-white text-sm hover:text-white py-3 px-3 rounded"
            style={{ background: '#11a789' }}
          >
            Add Course
          </Link>
        </div>

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
          <div className="ml-2 hidden lg:block">
            <Link
              to="/m/courses/create"
              className="text-white hover:text-white py-3 px-3 rounded"
              style={{ background: '#11a789' }}
            >
              Add Course
            </Link>
          </div>
        </div>

        {isLoading && <Skeleton />}

        {data && (
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Course Name</Table.HeadCell>
                <Table.HeadCell>Videos</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Day Created</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {data?.data?.data?.map((d) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={d?.id}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {d?.name}
                    </Table.Cell>
                    <Table.Cell>{d?.video}</Table.Cell>
                    <Table.Cell>${d?.price}</Table.Cell>
                    <Table.Cell>{d?.created_at?.human_short}</Table.Cell>
                    <Table.Cell>
                      <Dropdown
                        arrowIcon={false}
                        inline
                        label={<DashOutlined />}
                        className="w-32"
                      >
                        <Dropdown.Item className="mb-2">
                          <Link
                            to={`/m/courses/${d?.id}`}
                            className="text-gray-700 hover:text-gray-700"
                          >
                            Edit
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            setCheckValue(d.id);
                            setOpenModal(true);
                          }}
                          className="text-red-500 hover:text-red-500 mt-2"
                        >
                          Delete
                        </Dropdown.Item>
                      </Dropdown>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        )}

        {data && data?.data?.data?.length === 0 && (
          <>
            <div
              style={{
                width: '50%',
                margin: '5em auto',
                textAlign: 'center',
              }}
            >
              <div style={{ width: '60%', margin: '0px auto' }}>
                <img
                  src={EmptyState}
                  alt=""
                  style={{
                    width: '300px',
                    height: '300px',
                    display: 'block',
                  }}
                />
              </div>
              <h2>
                Your Created courses will show up here ?
                <Link to="/m/courses/create">Create a course</Link>
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
                Are you sure you want to delete this course?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  label="Yes, I'm sure"
                  bgColor="primary"
                  type="button"
                  handleClick={() => {
                    deleteCourseMutation.mutate(checkValue);
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
      </>
    </Layout>
  );
};

export default AllCourse;
