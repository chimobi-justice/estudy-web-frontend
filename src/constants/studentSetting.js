import {
  GatewayOutlined,
  LineChartOutlined,
  MailFilled,
  PayCircleFilled,
  PropertySafetyFilled
} from "@ant-design/icons";

const STUDENT_SETTING_ASIDE_LEFT_BOX = [
  {
    id: 1,
    icon: <GatewayOutlined />,
    text: 'General'
  },
  {
    id: 2,
    icon: <MailFilled />,
    text: 'Email Notification'
  },
  {
    id: 3,
    icon: <PropertySafetyFilled />,
    text: 'Subcription'
  },
  {
    id: 4,
    icon: <PayCircleFilled />,
    text: 'Payment'
  },
  {
    id: 5,
    icon: <LineChartOutlined />,
    text: 'Learning Reminder'
  },
];

export default STUDENT_SETTING_ASIDE_LEFT_BOX;
