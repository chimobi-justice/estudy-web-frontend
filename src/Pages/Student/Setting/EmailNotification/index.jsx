import { Switch } from "antd";

const EmailNotification = () => {
  return (
    <>
      <h2 className="text-lg font-bold text-gray-600 mb-1">
        Email Notification
      </h2>
      <p className="text-xs text-gray-400">Email Me</p>
      <div className="flex justify-between items-center my-3">
        <p className="text-sm text-gray-500 font-semibold">
          Promotion, courses, recommendations
        </p>
        <Switch checked={true} />
      </div>

      <div className="flex justify-between items-center my-3">
        <p className="text-sm text-gray-500 font-semibold">
          Don't send my propotional emails
        </p>
        <Switch />
      </div>

      <div className="flex justify-between items-center my-3">
        <p className="text-sm text-gray-500 font-semibold">
          Announcement from instructors whose course
        </p>
        <Switch checked={true} />
      </div>

      <div className="flex justify-between items-center my-3">
        <p className="text-sm text-gray-500 font-semibold">
          Examination notice
        </p>
        <Switch />
      </div>
    </>
  );
};

export default EmailNotification;
