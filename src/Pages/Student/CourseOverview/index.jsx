import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useCreateEnrollCourse from '../../../hooks/useCreateEnrollCourse';
import ReactPlayer from 'react-player';
import { Breadcrumb, Result, Tabs } from 'antd';
import Layout from '../../../Layouts';
import Overview from './Tabs/Overview';
import FAQ from './Tabs/FAQ';
import Discussion from './Tabs/Discussion';
import Review from './Tabs/Reviews';
import CourseOverviewModule from './courseOverviewModule';
import { getSingleStudentCourseOverview } from '../../../api/courses';
import Skeleton from '../../../Components/Skeleton';
import Button from '../../../Components/Button';

const { Item } = Breadcrumb;

const { TabPane } = Tabs;

const StudentCourseOverview = () => {
  const { id } = useParams();
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const {
    data: getCourseOverview,
    isError,
    error,
    isLoading
  } = useQuery({
    queryKey: ['course-overview', id],
    queryFn: () => getSingleStudentCourseOverview(id),
  });

  const res = getCourseOverview?.data;

  const enrollCourseMutation = useCreateEnrollCourse()

  const handleTitleClick = (index) => {
    setSelectedVideoIndex(index);
  };

  return (
    <Layout label="My Course">
      {isLoading && (
        <Skeleton />
      )}

      {getCourseOverview && (
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-9/12 h-auto mr-3 p-3">
            <div className="h-auto rounded-lg shadow-sm">
              <ReactPlayer
                url={res?.video[selectedVideoIndex]}
                controls
                width="100"
                height="100"
              />
            </div>
            <h2 className="text-lg font-bold pt-2 pb-0">
              {res?.name}
            </h2>

            <Breadcrumb>
              <Item className="text-xs font-medium">
                <Link to="">{res?.profile?.fullname}</Link>
              </Item>
              <Item className="text-xs font-medium">HTML</Item>
              <Item className="text-xs font-medium">
                <Link to="">+Follow</Link>
              </Item>
            </Breadcrumb>

            <Tabs defaultActiveKey="1">
              <TabPane tab="Overview" key="1">
                <Overview description={res?.description} />
              </TabPane>
              <TabPane tab="FAQ" key="2">
                <FAQ />
              </TabPane>
              <TabPane tab="Discussion" key="3">
                <Discussion />
              </TabPane>
              <TabPane tab="Reviews" key="4">
                <Review />
              </TabPane>
            </Tabs>
          </div>
          <div className="bg-white shadow-lg rounded-2xl w-11/12 lg:w-1/4 h-auto ml-3 p-3">
            {!res?.isEnrolled && (
              <div className="mb-2">
                <h3 className="text-sm font-bold text-gray-600 mb-2">
                  Enroll this course to watch later
                </h3>
                <Button label="Enroll" bgColor="secondary" size="large" handleClick={() => {
                  enrollCourseMutation.mutate(res?.id)
                }}/>
              </div>
            )}
            <h1 className="text-base font-bold text-gray-600 mb-2">
              Course Content
            </h1>
            <p className="text-xs font-medium text-gray-400 mb-1">
              Course episode
              {res?.video.length !== 1 ? 's' : ''} (
              {res?.video.length})
            </p>

            {res?.title?.map((module, index) => (
              <CourseOverviewModule
                key={index}
                title={module}
                numberIndex={index + 1}
                handleClick={() => handleTitleClick(index)}
              />
            ))}
          </div>
        </div>
      )}

      {isError && error && error.response && error.response.status === 403 && (
        <Result
          status="403"
          subTitle="Sorry, you are not authorized to access this page."
        />
      )}

      {isError && error && error.response && error.response.status === 404 && (
        <Result
          status="404"
          subTitle="Sorry, this record you visited does not exist."
        />
      )}

      {isError && error && error.response && error.response.status === 500 && (
        <Result
          status="500"
          subTitle="Sorry, something went wrong."
        />
      )}
    </Layout>
  );
};

export default StudentCourseOverview;
