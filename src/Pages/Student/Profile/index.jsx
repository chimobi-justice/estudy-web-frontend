import { Link } from "react-router-dom";

import Layout from "../../../Layouts";

import PersonalDetails from "./Tabs/PersonalDetails";

import medal from "../../../assets/images/medal.png";
import trophy from "../../../assets/images/trophy.png";
import quality from "../../../assets/images/quality.png";
import secTrophy from "../../../assets/images/sectrophy.png";

import { Avatar, Tabs, Badge, Modal } from "antd";
import {
  UserOutlined,
  ExclamationCircleOutlined,
  IssuesCloseOutlined,
  UsergroupAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const { confirm } = Modal;

const StudentProfile = () => {
  const handleDeleteModal = () => {
    confirm({
      title: "Are you sure you what to delete",
      icon: <ExclamationCircleOutlined />,
      content: "Account deletion may not be recoverd",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",

      onOk() {
        console.log("OK");
      },

      onCancel() {},
    });
  };

  return (
    <Layout label="Profile">
      <div className="flex justify-between">
        <div className="w-3/12 p-4 bg-white shadow-lg rounded-2xl mr-4">
          <div className="w-7/12 m-auto text-center my-7">
            <Avatar
              shape="circle"
              size="large"
              icon={<UserOutlined />}
              style={{ height: "65px", width: "65px" }}
            />
            <p>John doe</p>
          </div>
          <div className="flex justify-between text-center">
            <div>
              <Badge count={12} />
              <p className="text-xs font-bold text-gray-500">
                course in progress
              </p>
            </div>
            <div>
              <Badge
                count={150}
                overflowCount={99}
                style={{ background: "#52c41a" }}
              />
              <p className="text-xs font-bold text-gray-500">course complete</p>
            </div>
          </div>

          <div id="achievement" className="my-7">
            <h3 className="text-bold text-base text-gray-700 mb-4">
              Last Achievement
            </h3>
            <div className="flex justify-between">
              <div>
                <img src={medal} alt="" className="w-9/12" />
              </div>
              <div>
                <img src={trophy} alt="" className="w-9/12" />
              </div>
              <div>
                <img src={quality} alt="" className="w-9/12" />
              </div>
              <div>
                <img src={secTrophy} alt="" className="w-9/12" />
              </div>
            </div>
          </div>

          <div id="support" className="mt-7">
            <h3 className="text-bold text-base text-gray-700 mb-2">Support</h3>
            <p className="text-sm text-semibold text-gray-400">
              <Link
                to=""
                className="text-gray-400 hover:text-gray-400 flex items-center"
              >
                <UserOutlined className="mr-1" /> Become a member
              </Link>
            </p>
            <p className="text-sm text-semibold text-gray-400">
              <Link
                to=""
                className="text-gray-400 hover:text-gray-400 flex items-center"
              >
                <IssuesCloseOutlined className="mr-1" /> Support
              </Link>
            </p>
            <p className="text-sm text-semibold">
              <Link
                to=""
                className="text-gray-400 hover:text-gray-400 flex items-center"
              >
                <UsergroupAddOutlined className="mr-1" /> Invite a friend
              </Link>
            </p>
            <p
              className="text-sm text-semibold text-gray-400 cursor-pointer flex items-center"
              onClick={handleDeleteModal}
            >
              <DeleteOutlined className="mr-1" />
              Delete Account
            </p>
          </div>
        </div>
        <div className="w-3/4 p-4 bg-white shadow-lg rounded-2xl">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Details" key="1">
              <PersonalDetails />
            </TabPane>
            <TabPane tab="Notification" key="2">
              Notification
            </TabPane>
            <TabPane tab="Privacy" key="3">
              Privacy
            </TabPane>
            <TabPane tab="Payment" key="4">
              Payment
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default StudentProfile;
