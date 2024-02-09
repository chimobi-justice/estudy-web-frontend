import { Result } from "antd";
import Button from "../../Components/Button";

const NotFound = () => {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <div className="text-center">
      <Result
        status="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="button"
            bgColor="primary"
            handleClick={handleClick}
            label="Back Home"
          />
        }
      />
    </div>
  );
};

export default NotFound;
