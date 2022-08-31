import { useState } from "react";
import { Link } from "react-router-dom";

import StudentLayout from "../../../Layouts/Student";

import { STUDENT_COURSE } from "../../../constants/studentCourse";

import {
  AppstoreOutlined,
  BarsOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import { Select } from "antd";

const { Option } = Select;

const StudentCourse = () => {
  const [enrollCourse, setEnrollCourse] = useState(false);
  const [singleEnrollCourseBox, setSingleEnrollCourseBox] = useState(0);

  const handleEnrollCourseBox = () => {
    setEnrollCourse(!enrollCourse);
  };

  const getCourseBoxById = (id) => {
    setSingleEnrollCourseBox(id);
  };

  return (
    <StudentLayout label="My Course">
      <div className="flex justify-end items-center my-3">
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
                width: 120
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
      </div>

      <div className="grid grid-cols-4 gap-8 mb-3">
        {STUDENT_COURSE.map((course) => (
          <Link
            to={`/dashboard/course/${course.id}/overview`}
            key={course.id}
            className="relative"
          >
            <div className="bg-white shadow-lg p-4">
              <div className="flex justify-between items-center my-2">
                <div>{course.CourseIconImage}</div>
                <div
                  className="text-gray-500"
                  onClick={(e) => {
                    handleEnrollCourseBox();
                    getCourseBoxById(course.id);
                    e.preventDefault();
                  }}
                >
                  {course.cardDashOutline}
                </div>
              </div>
              {enrollCourse && singleEnrollCourseBox === course.id && (
                <div className="absolute top-12 left-36 z-10 bg-gray-700 p-1 text-white hover:bg-gray-400">
                  Enroll Course
                </div>
              )}

              <h3 className="my-2 font-medium text-gray-600">
                History of graphic design
              </h3>
              <div className="flex items-center my-2">
                {course.CourseHolderImage}
                <p className="text-xs text-gray-500">Williams pill</p>
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="flex items-center text-xs text-gray-500 font-thin">
                  {course.lesson} 15 Lesson
                </p>
                <p className="flex items-center text-xs text-gray-500 font-thin">
                  {course.hours} 12 hours
                </p>
              </div>
              <p className="text-sm text-gray-600 font-bold my-2">Complete</p>
            </div>
          </Link>
        ))}
      </div>
    </StudentLayout>
  );
};

export default StudentCourse;
