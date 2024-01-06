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
    name: "courses",
    icon: <VideoCameraAddOutlined className="mr-1" />,
  },
  {
    id: 3,
    path: "/s/resourses",
    name: "resourses",
    icon: <FileOutlined className="mr-1" />,
  },
  {
    id: 4,
    path: "/s/chat",
    name: "chat",
    icon: <MessageOutlined className="mr-1" />,
  },
  {
    id: 5,
    path: "/s/schedule",
    name: "schedule",
    icon: <ScheduleOutlined className="mr-1" />,
  },
  {
    id: 6,
    path: "/s/profile",
    name: "profile",
    icon: <UserAddOutlined className="mr-1" />,
  },
  {
    id: 7,
    path: "/s/setting",
    name: "setting",
    icon: <SettingOutlined className="mr-1" />,
  },
];
