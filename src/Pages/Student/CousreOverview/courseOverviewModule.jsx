import { useState } from 'react';

import { Timeline } from 'antd';

const { Item } = Timeline;

const CourseOverviewModule = ({ title, numberIndex, handleClick }) => {
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
      <div>
        <div
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => {
            handleCourseOverViewModule();
            handleSingleActiveModule(numberIndex);
            handleClick(numberIndex)
          }}
        >
          <div>
            <p className="mb-0 text-xs font-bold text-gray-500">
              Module {numberIndex}
            </p>
            <p className="mb-0 text-xs font-medium text-gray-500">{title}</p>
          </div>

          <p className="flex items-center mb-0 text-xs font-bold text-gray-500"></p>
        </div>

        {/* {courseOverviewModule && activeModule === numberIndex && (
          <div className="mt-5">
            <Timeline>
              <Item>Getting started lesson</Item>
              <Item>Overview about basic tools</Item>
              <Item>Virtual design using tools</Item>
            </Timeline>
          </div>
        )} */}
      </div>
    </>
  );
};

export default CourseOverviewModule;
