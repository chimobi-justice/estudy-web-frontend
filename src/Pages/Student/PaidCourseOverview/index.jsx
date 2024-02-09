import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../../Layouts';
import { getStudentPaidCourseOverview } from '../../../api/courses';
import useCreatePayment from '../../../hooks/useCreatePayment';
import { useQuery } from '@tanstack/react-query';
import { Accordion } from 'flowbite-react';
import {
  FundOutlined,
  PlayCircleOutlined,
  SafetyCertificateOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import Button from '../../../Components/Button';
import ModalVideo from 'react-modal-video';
import Avatar from 'react-avatar';
import { successNotification } from '../../../helpers/notification';
import Truncate from '../../../helpers/truncate';

const PaidCourseOverview = () => {
  const [isOpen, setOpen] = useState(false);
  const { slug } = useParams();

  const { data: getPaidCourseOverview } = useQuery({
    queryKey: ['paid-course-overview', slug],
    queryFn: () => getStudentPaidCourseOverview(slug),
  });

  const res = getPaidCourseOverview?.data;

  const paymentMutation = useCreatePayment();

  return (
    <Layout label="Course">
      <div>
        <div className="bg-gray-700 p-5">
          <h1 className="text-xl text-white font-semibold mb-4 w-full lg:w-7/12">
            {res?.name}
          </h1>
          <p className="text-xs text-white">
            Created by{' '}
            <Link to="#" className="text-blue-500 underline">
              {res?.profile?.fullname}
            </Link>
          </p>
        </div>

        <div className="flex flex-col flex-col-reverse lg:flex-row lg:justify-between my-4 p-2 lg:p-0">
          <div className="w-full lg:w-8/12">
            <h2 className="text-xl font-semibold mb-4">Course Contents</h2>
            <Accordion collapseAll>
              {res?.title?.map((title, index) => (
                <Accordion.Panel key={index}>
                  <Accordion.Title>{title}</Accordion.Title>
                  <Accordion.Content>
                    <div className="text-gray-500 dark:text-gray-400 flex items-center">
                      <PlayCircleOutlined className="text-lg mr-1" />
                      <span>{Truncate(res?.sub_title[index], 30)}</span>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>

            <div className="my-4">
              <h3 className="font-semibold text-lg">Description</h3>
              <p className="text-gray-600 font-base">{res?.description}</p>
            </div>

            <div className="my-4">
              <h3 className="font-semibold text-lg">Instructor</h3>
              <p className="text-gray-600 font-base">
                {res?.profile?.bio?.occupation}
              </p>
              <div className="flex justify-around lg:justify-start items-center">
                <div className="w-1/5">
                  {res?.profile?.bio?.avatar ? (
                    <img
                      src={res?.profile?.bio?.avatar}
                      alt=""
                      className="w-full h-36"
                      style={{ borderRadius: '50%' }}
                    />
                  ) : (
                    <Avatar
                      name={res?.profile?.fullname}
                      size="150"
                      round={true}
                      className="mr-1 text-3xl"
                    />
                  )}
                </div>

                <div className="ml-4">
                  <p className="text-sm font-base text-gray-500 mb-1 flex items-center">
                    <UsergroupAddOutlined className="mr-2" />
                    <span>{res?.profile?.bio?.student_count}</span>
                  </p>
                  <p className="text-sm font-base text-gray-500 mb-1 flex items-center">
                    <PlayCircleOutlined className="mr-2" />
                    <span>{res?.profile?.bio?.courses_count}</span>
                  </p>
                </div>
              </div>

              <div className="my-4">
                <p className="text-gray-500 text-sm font-base leading-7">
                  {res?.profile?.bio?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/12 h-1/4 shadow-lg mb-10 lg:mb-0">
            <div>
              <div>
                <div style={{ position: 'relative' }}>
                  <img
                    src={res?.thumbnail}
                    alt=""
                    style={{ width: '100%', height: '200px' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '60%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                    }}
                  >
                    <PlayCircleOutlined
                      className="text-6xl"
                      onClick={() => setOpen(true)}
                    />
                    <p className="text-lg lg:text-sm text-white font-semibold mt-6">
                      preview this course
                    </p>
                  </div>
                </div>
                <ModalVideo
                  channel="custom"
                  url={res?.course_preview}
                  isOpen={isOpen}
                  onClose={() => setOpen(false)}
                />
              </div>
              <div className="py-2 mx-4">
                <h3 className="text-2xl text-gray-800">₦{res?.price}</h3>
                {res?.isEnrolled && (
                  <Button
                    label="Already Enrolled"
                    bgColor="secondary"
                    type="button"
                    size="large"
                    handleClick={() => {
                      successNotification('You have been enrolled on this course.');
                    }}
                  />
                )}

                {!res?.isEnrolled && (
                  <Button
                    label={
                      paymentMutation.isLoading ? 'Processing...' : 'Buy Now'
                    }
                    bgColor="secondary"
                    type="button"
                    size="large"
                    handleClick={() => {
                      paymentMutation.mutate({
                        amount: res?.price,
                        course_id: res?.id,
                        course_owner_id: res?.profile?.id,
                      });
                    }}
                  />
                )}

                <p className="text-center text-xs text-gray-500 my-3">
                  30-Day Money-Back Guarantee
                </p>
                <div>
                  <h3>This course includes:</h3>
                  <p className="flex items-center">
                    <FundOutlined className="mr-1" />{' '}
                    <span>Full lifetime access</span>
                  </p>
                  <p className="flex items-center">
                    <SafetyCertificateOutlined className="mr-1" />
                    <span>Certificate of completion</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaidCourseOverview;
