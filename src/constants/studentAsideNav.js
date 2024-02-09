import {
  DashboardOutlined,
  FileOutlined,
  MessageOutlined,
  UserAddOutlined,
  ScheduleOutlined,
  SettingOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

export const STUDENT_ASIDE_NAV = [
  {
    id: 1,
    path: "/s/dashboard",
    name: "Dashboard",
    icon: <DashboardOutlined className="mr-1" />,
  },
  {
    id: 2,
    path: "/s/courses",
    name: "My Courses",
    icon: <VideoCameraAddOutlined className="mr-1" />,
  },
  {
    id: 3,
    path: "/s/resourses",
    name: "Resourses",
    icon: <FileOutlined className="mr-1" />,
  },
  {
    id: 4,
    path: "/s/chat",
    name: "Chat",
    icon: <MessageOutlined className="mr-1" />,
  },
  {
    id: 5,
    path: "/s/schedule",
    name: "Schedule",
    icon: <ScheduleOutlined className="mr-1" />,
  },
  {
    id: 6,
    path: "/s/profile",
    name: "Profile",
    icon: <UserAddOutlined className="mr-1" />,
  },
  {
    id: 7,
    path: "/s/setting",
    name: "Setting",
    icon: <SettingOutlined className="mr-1" />,
  }
];
