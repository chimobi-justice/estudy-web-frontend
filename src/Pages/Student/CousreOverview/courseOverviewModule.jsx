import { useState } from "react";

import { STUDENT_COURSE_OVERVIEW } from "../../../constants/studentCourseOverview";

import {
  CheckCircleTwoTone,
  DownCircleOutlined,
  FieldTimeOutlined,
  FileOutlined,
} from "@ant-design/icons";

import { Timeline } from "antd";

const { Item } = Timeline;

const CourseOverviewModule = () => {
  const [courseOverviewModule, setCourseOverviewModule] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

  const handleCourseOverViewModule = () => {
    setCourseOverviewModule(!courseOverviewModule);
  };

  const handleSingleActiveModule = (id) => {
    setActiveModule(id);
  };

  return (
    <>
      {STUDENT_COURSE_OVERVIEW.map((overview) => (
        <div key={overview.id}>
          <div
            className="flex justify-between items-center cursor-pointer mb-3"
            onClick={() => {
              {
                handleCourseOverViewModule();
              }
              {
                handleSingleActiveModule(overview.id);
              }
            }}
          >
            <div>
              <p className="mb-0 text-xs font-bold text-gray-500">
                {overview.module}
              </p>
              <p className="mb-0 text-xs font-medium text-gray-500">
                Introduction
              </p>
            </div>

            <p className="flex items-center mb-0 text-xs font-bold text-gray-500">
              <FileOutlined className="mr-1" /> {overview.lectureCount}
              <FieldTimeOutlined className="mr-1 ml-1" /> {overview.time}
              {courseOverviewModule && activeModule === overview.id ? (
                <CheckCircleTwoTone className="ml-2" />
              ) : (
                <DownCircleOutlined className="ml-2" />
              )}
            </p>
          </div>

          {courseOverviewModule && activeModule === overview.id && (
            <div className="mt-5">
              <Timeline>
                <Item>Getting started lesson</Item>
                <Item>Overview about basic tools</Item>
                <Item>Virtual design using tools</Item>
              </Timeline>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CourseOverviewModule;
