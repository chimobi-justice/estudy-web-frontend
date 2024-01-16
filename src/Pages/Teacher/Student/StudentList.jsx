import React, { useState } from 'react';

import useGetMentorStudents from '../../../hooks/useGetMentorStudents';

import { Pagination, Table } from 'flowbite-react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Skeleton from '../../../Components/Skeleton';

import EmptyState from '../../../assets/images/No_data.png';

const StudentList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const { data, isLoading, isPreviousData } = useGetMentorStudents(currentPage);

  const response = data?.data;

  return (
    <>
      {isLoading && <Skeleton />}

      {response && response.length > 0 && (
        <>
          <div className="bg-white shadow-lg rounded-2xl mt-4">
            <div className="overflow-x-auto">
              <Table striped>
                <Table.Head>
                  <Table.HeadCell>Students</Table.HeadCell>
                  <Table.HeadCell>Student ID</Table.HeadCell>
                  <Table.HeadCell>Course Name</Table.HeadCell>
                  <Table.HeadCell>Enrolled Date</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {response?.map((enrollment) => (
                    <Table.Row
                      key={enrollment?.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <p>
                          {enrollment?.enrolled_user_details?.avatar ? (
                            <Avatar
                              shape="circle"
                              size="small"
                              src={
                                <img
                                  src={
                                    enrollment?.enrolled_user_details?.avatar
                                  }
                                  alt="student avatar"
                                />
                              }
                              style={{
                                marginRight: '4px',
                              }}
                            />
                          ) : (
                            <Avatar
                              shape="circle"
                              size="small"
                              icon={<UserOutlined />}
                              style={{
                                marginRight: '4px',
                              }}
                            />
                          )}
                          {enrollment?.enrolled_user_details?.fullname}
                        </p>
                      </Table.Cell>
                      <Table.Cell>
                        #{enrollment?.enrolled_user_details?.id.slice(0, 8)}
                      </Table.Cell>
                      <Table.Cell>
                        {enrollment?.course_details?.course_name}
                      </Table.Cell>
                      <Table.Cell>
                        {enrollment?.enrolled_at?.human_short}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>

          <div className="flex overflow-x-auto sm:justify-center py-4">
            <Pagination
              layout="pagination"
              currentPage={currentPage}
              totalPages={data?.pagination?.total}
              onPageChange={onPageChange}
              previousLabel="prev"
              nextLabel="next"
              showIcons
            />
          </div>
        </>
      )}

      {response && response?.length === 0 && (
        <>
          <div
            style={{ width: '50%', margin: '2em auto', paddingBottom: '5px', textAlign: 'center' }}
          >
            <div style={{ width: '60%', margin: '0px auto' }}>
              <img
                src={EmptyState}
                alt=""
                style={{ width: '300px', height: '300px', display: 'block' }}
              />
            </div>
            <h2>
              Your Enrolled students will show up here?
            </h2>
          </div>
        </>
      )}
    </>
  );
};
export default StudentList;
