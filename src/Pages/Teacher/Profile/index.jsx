import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserProfileContext } from '../../../context/userContext';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import Layout from '../../../Layouts';

import { Avatar } from 'antd';

import {
  BookOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  IssuesCloseOutlined,
  StarOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import Button from '../../../Components/Button';
import { Modal } from 'flowbite-react';
import PersonalDetails from './PersonalDetails';
import { deleteAccount } from '../../../api/users';
import {
  errorNotification,
  successNotification,
} from '../../../helpers/notification';

const TeacherProfile = () => {
  const { user } = useContext(UserProfileContext);
  const [openModal, setOpenModal] = useState(false);

  const queryClient = useQueryClient();

  const deleteAccountMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
      successNotification(data?.message);
    },
    onError: (error) => {
      errorNotification(error?.response?.data?.message);
    },
  });

  return (
    <Layout label="Profile">
      <>
        <div className="flex justify-between">
          <div className="w-3/12 p-4 bg-white shadow-lg rounded-2xl mr-4">
            <div className="w-7/12 m-auto text-center my-7">
              {user?.data?.data?.avatar && (
                <Avatar
                  shape="circle"
                  size="large"
                  src={<img src={user?.data?.data?.avatar} alt="avatar" />}
                  style={{ height: '65px', width: '65px' }}
                />
              )}
              {!user?.data?.data?.avatar && (
                <Avatar
                  shape="circle"
                  size="large"
                  icon={<UserOutlined />}
                  style={{ height: '65px', width: '65px' }}
                />
              )}
              <p>{user?.data?.data?.fullname}</p>
            </div>
            <div className="flex justify-around text-center">
              <div className="text-center items-center">
                <UsergroupAddOutlined className="text-3xl"/>
                <p>20</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
              <div className="text-center items-center">
                <BookOutlined className="text-3xl"/>
                <p>20</p>
                <p className="text-xs text-gray-500">Course</p>
              </div>
              <div className="text-center items-center">
                <StarOutlined className="text-3xl"/>
                <p>20</p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
            </div>

            <div id="achievement" className="my-7">
              <h3 className="text-bold text-base text-gray-600 mb-4">
                Short Bio
              </h3>
              <div className="mb-6">
                <p className="text-xs text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam voluptas, doloribus adipisci libero quisquam
                  debitis.
                </p>
              </div>
            </div>

            <div id="support" className="mt-7">
              <h3 className="text-bold text-base text-gray-700 mb-2">
                Support
              </h3>
              <p className="text-sm text-semibold text-gray-400">
                <Link
                  to=""
                  className="text-gray-400 hover:text-gray-400 flex items-center"
                >
                  <IssuesCloseOutlined className="mr-1" /> Support
                </Link>
              </p>
              <p
                className="text-sm text-semibold text-gray-400 cursor-pointer flex items-center"
                onClick={() => setOpenModal(true)}
              >
                <DeleteOutlined className="mr-1" />
                Delete Account
              </p>
            </div>
          </div>
          <div className="w-3/4 p-4 bg-white shadow-lg rounded-2xl">
            <PersonalDetails />
          </div>
        </div>

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
                Are you sure you want to delete your account?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  label="Yes, I'm sure"
                  bgColor="primary"
                  type="button"
                  handleClick={() => {
                    deleteAccountMutation.mutate();
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

export default TeacherProfile;
