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
    path: "/dashboard/",
    name: "Dashboard",
    icon: <DashboardOutlined className="mr-1" />,
  },
  {
    id: 2,
    path: "/dashboard/courses",
    name: "courses",
    icon: <VideoCameraAddOutlined className="mr-1" />,
  },
  {
    id: 3,
    path: "/dashboard/resourses",
    name: "resourses",
    icon: <FileOutlined className="mr-1" />,
  },
  {
    id: 4,
    path: "/dashboard/chat",
    name: "chat",
    icon: <MessageOutlined className="mr-1" />,
  },
  {
    id: 5,
    path: "/dashboard/schedule",
    name: "schedule",
    icon: <ScheduleOutlined className="mr-1" />,
  },
  {
    id: 6,
    path: "/dashboard/profile",
    name: "profile",
    icon: <UserAddOutlined className="mr-1" />,
  },
  {
    id: 7,
    path: "/dashboard/setting",
    name: "setting",
    icon: <SettingOutlined className="mr-1" />,
  }
];
