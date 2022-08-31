import { UserOutlined } from "@ant-design/icons";
import { Avatar, Progress, Rate, Form, Input } from "antd";
import Button from "../../../../Components/Button";

const { TextArea } = Input;

const Review = () => {
  return (
    <>
      <div>
        <div>
          <h3>Average rating</h3>
          <div>
            <p>4.3</p>
            <p>
              <Rate allowHalf defaultValue={4.3} />
            </p>
            <p>Rating</p>
          </div>
        </div>

        <div>
          <h3>Detailed rating</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs">
                <Rate allowHalf defaultValue={3.2} />
              </p>
              <p className="text-xs">
                <Rate allowHalf defaultValue={3.5} />
              </p>
            </div>
            <div className="w-8/12">
              <Progress percent={30} />
              <Progress percent={75} />
            </div>
          </div>
        </div>
      </div>

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
          <p className="mb-0 text-gray-700 font-semibold text-sm">John doe</p>
          <p className="text-xs">
            <Rate allowHalf defaultValue={2.5} />
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          officia facilis? Est in blanditiis, facilis optio minima dicta
        </p>
      </div>

      <Form className="mb-6">
        <div className="mb-2">
          <TextArea
            cols={8}
            rows={8}
            color="gray"
            className="resize-none"
            placeholder="Make feedback here.."
          />
        </div>
        <div className="mb-2">
          <Button type="submit" label="Submit" bgColor="primary" />
        </div>
      </Form>
    </>
  );
};

export default Review;
