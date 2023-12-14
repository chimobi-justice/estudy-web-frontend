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
    path: "/s/dashboard/",
    name: "Dashboard",
    icon: <DashboardOutlined className="mr-1" />,
  },
  {
    id: 2,
    path: "/s/dashboard/courses",
    name: "courses",
    icon: <VideoCameraAddOutlined className="mr-1" />,
  },
  {
    id: 3,
    path: "/s/dashboard/resourses",
    name: "resourses",
    icon: <FileOutlined className="mr-1" />,
  },
  {
    id: 4,
    path: "/s/dashboard/chat",
    name: "chat",
    icon: <MessageOutlined className="mr-1" />,
  },
  {
    id: 5,
    path: "/s/dashboard/schedule",
    name: "schedule",
    icon: <ScheduleOutlined className="mr-1" />,
  },
  {
    id: 6,
    path: "/s/dashboard/profile",
    name: "profile",
    icon: <UserAddOutlined className="mr-1" />,
  },
  {
    id: 7,
    path: "/s/dashboard/setting",
    name: "setting",
    icon: <SettingOutlined className="mr-1" />,
  }
];
