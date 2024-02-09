import {
  DashboardOutlined,
  FileOutlined,
  MessageOutlined,
  UserAddOutlined,
  ScheduleOutlined,
  SettingOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

export const TEACHER_ASIDE_NAV = [
  {
    id: 1,
    path: "/m/dashboard",
    name: "Dashboard",
    icon: <DashboardOutlined className="mr-1" />,
  },
  {
    id: 2,
    path: "/m/courses",
    name: "My Courses",
    icon: <VideoCameraAddOutlined className="mr-1" />,
  },
  {
    id: 3,
    path: "/m/enrolled-students",
    name: "Student",
    icon: <FileOutlined className="mr-1" />,
  },
  {
    id: 4,
    path: "/m/transactions",
    name: "Transactions",
    icon: <FileOutlined className="mr-1" />,
  },
  {
    id: 5,
    path: "/m/chat",
    name: "Chat",
    icon: <MessageOutlined className="mr-1" />,
  },
  {
    id: 6,
    path: "/m/schedule",
    name: "Schedule",
    icon: <ScheduleOutlined className="mr-1" />,
  },
  {
    id: 7,
    path: "/m/profile",
    name: "Profile",
    icon: <UserAddOutlined className="mr-1" />,
  },
  {
    id: 8,
    path: "/m/setting",
    name: "Setting",
    icon: <SettingOutlined className="mr-1" />,
  },
];
