import { Link } from "react-router-dom";

import { Breadcrumb, Tabs } from "antd";

import StudentLayout from "../../../Layouts/Student";

import Overview from "./Tabs/overview";
import FAQ from "./Tabs/FAQ";
import Discussion from "./Tabs/discussion";
import Review from "./Tabs/reviews";

import CourseOverviewModule from "./courseOverviewModule";

const { Item } = Breadcrumb;

const { TabPane } = Tabs;

const StudentCourseOverview = () => {
  return (
    <StudentLayout label="My Course">
      <div className="flex justify-between">
        <div className="w-9/12 h-auto mr-3 p-3">
          <div className="h-3/6 rounded-lg bg-emerald-100 shadow-sm"></div>
          <h2 className="text-lg font-bold pt-2 pb-0">
            Introduction to HTML to advance
          </h2>

          <Breadcrumb>
            <Item className="text-xs font-medium">
              <Link to="">William joe</Link>
            </Item>
            <Item className="text-xs font-medium">HTML</Item>
            <Item className="text-xs font-medium">
              <Link to="">+Follow</Link>
            </Item>
          </Breadcrumb>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Overview" key="1">
              <Overview />
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
        <div className="bg-white shadow-lg rounded-2xl w-1/4 h-auto ml-3 p-3">
          <h1 className="text-base font-bold text-gray-600 mb-0">
            Course Content
          </h1>
          <p className="text-xs font-medium text-gray-400 mb-1">
            Lecture (15) Total (55 hrs)
          </p>

          <CourseOverviewModule />
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentCourseOverview;
