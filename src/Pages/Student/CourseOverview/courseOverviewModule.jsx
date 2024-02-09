import { useState } from 'react';

const CourseOverviewModule = ({ title, numberIndex, handleClick }) => {
  const [courseOverviewModule, setCourseOverviewModule] = useState(false);

  const handleCourseOverViewModule = () => {
    setCourseOverviewModule(!courseOverviewModule);
  };

  return (
    <>
      <div>
        <div
          className="flex justify-between items-center cursor-pointer mb-3"
          onClick={() => {
            handleCourseOverViewModule();
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
      </div>
    </>
  );
};

export default CourseOverviewModule;
