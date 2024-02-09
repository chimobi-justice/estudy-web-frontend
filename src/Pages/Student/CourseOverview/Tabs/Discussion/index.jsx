import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Discussion = () => {
  return (
    <>
      <div className="flex mb-2">
        <Avatar
          shape="circle"
          size="large"
          icon={<UserOutlined />}
          style={{
            marginRight: "2px",
          }}
        />
        <div className="ml-2">
          <p className="mb-0 text-gray-700 font-semibold text-base">John doe</p>
          <p className="mb-0 text-gray-500 font-medium text-xs">
            Student 24 hrs ago
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          officia facilis? Est in blanditiis, facilis optio minima dicta
          consequuntur, velit nihil sit delectus doloremque placeat sint quia,
          quasi adipisci eum?
        </p>
      </div>
      <div className="flex mb-3">
        <Avatar
          shape="circle"
          size="large"
          icon={<UserOutlined />}
          style={{
            marginRight: "2px",
          }}
        />
        <div className="ml-2">
          <p className="mb-0 text-gray-700 font-semibold text-base">John doe</p>
          <p className="mb-0 text-gray-500 font-medium text-xs">
            Student 24 hrs ago
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          officia facilis? Est in blanditiis, facilis optio minima dicta
          consequuntur, velit nihil sit delectus doloremque placeat sint quia,
          quasi adipisci eum?
        </p>
      </div>
    </>
  );
};

export default Discussion;
