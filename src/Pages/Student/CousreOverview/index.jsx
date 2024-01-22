import { Link, useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import ReactPlayer from 'react-player';

import { Breadcrumb, Tabs } from 'antd';

import Layout from '../../../Layouts';

import Overview from './Tabs/Overview';
import FAQ from './Tabs/FAQ';
import Discussion from './Tabs/Discussion';
import Review from './Tabs/Reviews';

import CourseOverviewModule from './courseOverviewModule';

import { getSingleStudentCourseOverview } from '../../../api/courses';
import { useState } from 'react';

const { Item } = Breadcrumb;

const { TabPane } = Tabs;

const StudentCourseOverview = () => {
  const { id } = useParams();
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const { data: getCourseOverview } = useQuery({
    queryKey: ['course-overview', id],
    queryFn: () => getSingleStudentCourseOverview(id),
  });

  const handleTitleClick = (index) => {
    setSelectedVideoIndex(index);
  };

  return (
    <Layout label="My Course">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-9/12 h-auto mr-3 p-3">
          <div className="h-auto rounded-lg shadow-sm">
            <ReactPlayer
              url={getCourseOverview?.data?.video[selectedVideoIndex]}
              controls
              width="100"
              height="100"
            />
          </div>
          <h2 className="text-lg font-bold pt-2 pb-0">
            {getCourseOverview?.data?.name}
          </h2>

          <Breadcrumb>
            <Item className="text-xs font-medium">
              <Link to="">{getCourseOverview?.data?.profile?.fullname}</Link>
            </Item>
            <Item className="text-xs font-medium">HTML</Item>
            <Item className="text-xs font-medium">
              <Link to="">+Follow</Link>
            </Item>
          </Breadcrumb>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Overview" key="1">
              <Overview description={getCourseOverview?.data?.description} />
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
          <h1 className="text-base font-bold text-gray-600 mb-2">
            Course Content
          </h1>
          <p className="text-xs font-medium text-gray-400 mb-1">
            Lecture{getCourseOverview?.data?.video.length !== 1 ? 's' : ''} (
            {getCourseOverview?.data?.video.length})
          </p>

          {getCourseOverview?.data?.title?.map((module, index) => (
            <CourseOverviewModule
              key={index}
              title={module}
              numberIndex={index + 1}
              handleClick={() => handleTitleClick(index)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StudentCourseOverview;
