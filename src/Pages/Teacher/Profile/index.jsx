import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserProfileContext } from '../../../context/userContext';
import useDeleteAccount from '../../../hooks/useDeleteAccount';
import Layout from '../../../Layouts';
import Avatar from 'react-avatar';
import { Avatar as AntAvatar } from 'antd';
import {
  BookOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  IssuesCloseOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import Button from '../../../Components/Button';
import { Modal } from 'flowbite-react';
import PersonalDetails from './PersonalDetails';
import Truncate from '../../../helpers/truncate';

const TeacherProfile = () => {
  const { user } = useContext(UserProfileContext);
  const [openModal, setOpenModal] = useState(false);

  const deleteAccountMutation = useDeleteAccount();

  return (
    <Layout label="Profile">
      <>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full h-auto lg:w-3/12 p-4 bg-white shadow-lg rounded-2xl mr-4">
            <div className="w-7/12 m-auto text-center my-4 lg:my-7">
              {user?.data?.data?.avatar && (
                <AntAvatar
                  shape="circle"
                  size="large"
                  src={<img src={user?.data?.avatar} alt="avatar" />}
                  style={{ height: '65px', width: '65px' }}
                />
              )}
              {!user?.data?.avatar && (
                <Avatar
                  name={user?.data?.fullname}
                  size="100"
                  round={true}
                  className="mb-1 text-2xl"
                />
              )}
              <p>{user?.data?.fullname}</p>
            </div>
            <div className="flex justify-around text-center">
              <div className="text-center items-center">
                <UsergroupAddOutlined className="text-3xl" />
                <p>20</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
              <div className="text-center items-center">
                <BookOutlined className="text-3xl" />
                <p>20</p>
                <p className="text-xs text-gray-500">Course</p>
              </div>
              <div className="text-center items-center">
                <StarOutlined className="text-3xl" />
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
                  {user?.data?.bio ? (
                    Truncate(user?.data?.bio, 335)
                  ) : (
                    <p className="text-lg text-center font-bold p-2">
                      No Bio to show yet!
                    </p>
                  )}
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
          <div className="w-full lg:w-3/4 p-4 bg-white shadow-lg rounded-2xl">
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
