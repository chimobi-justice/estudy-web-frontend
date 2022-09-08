import Button from "../../../../../Components/Button";

import { useFormik } from "formik";

import { validateSchema } from "../../../../../validations/studentProfile";

import { Input, Upload, message, Avatar } from "antd";
import { CameraFilled, UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const PersonalDetails = () => {
  const _handleStudentProfile = () => {
    console.log("submit profile", ">>>>");
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      emailAddress: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    onSubmit: _handleStudentProfile,
    validationSchema: validateSchema,
  });

  const { 
    handleChange, 
    handleBlur, 
    handleSubmit, 
    errors, 
    values 
  } = formik;

  const props = {
    action: "https://www.estudyweb/v2/profile-upload",
    name: "file",
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="text-center my-10">
          <Upload
            {...props}
            onChange={(response) => {
              if (response.file.status !== "uploading") {
                console.log(response.file, response.fileList);
              }
              if (response.file.status === "done") {
                message.success(`${response.file.name} 
                                   file uploaded successfully`);
              } else if (response.file.status === "error") {
                message.error(`${response.file.name} 
                                 file upload failed.`);
              }
            }}
          >
            <div className="relative">
              <Avatar
                shape="circle"
                size="large"
                icon={<UserOutlined />}
                style={{ height: "65px", width: "65px" }}
              />
              <CameraFilled className="absolute top-12 left-12 " />
            </div>
          </Upload>
        </div>
        <div className="flex justify-between mb-6">
          <div className="w-6/12 mr-1">
            <Input
              type="text"
              placeholder="FullName"
              name="fullname"
              value={values.fullname}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{padding: '6px'}}
            />
            {errors.fullname && (
              <p className="text-red-300 mb-0">{errors.fullname}</p>
            )}
          </div>
          <div className="w-6/12 ml-1">
            <Input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={values.emailAddress}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{padding: '6px'}}
            />
            {errors.emailAddress && (
              <p className="text-red-300 mb-0">{errors.emailAddress}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <TextArea
            cols={1}
            rows={1}
            className="resize-none"
            placeholder="Address"
            name="address"
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
            style={{padding: '6px'}}
          />
          {errors.address && (
            <p className="text-red-300 mb-0">{errors.address}</p>
          )}
        </div>
        <div className="flex justify-between mb-6">
          <div className="w-6/12 mr-1">
            <Input
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{padding: '6px'}}
            />
            {errors.city && <p className="text-red-300 mb-0">{errors.city}</p>}
          </div>
          <div className="w-6/12 ml-1">
            <Input
              type="text"
              placeholder="State/Province"
              name="state"
              value={values.state}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{padding: '6px'}}
            />
            {errors.state && (
              <p className="text-red-300 mb-0">{errors.state}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <div className="w-6/12 mr-1">
            <Input
              type="text"
              placeholder="Zip"
              name="zip"
              value={values.zip}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{padding: '6px'}}
            />
            {errors.zip && <p className="text-red-300 mb-0">{errors.zip}</p>}
          </div>
          <div className="w-6/12 ml-1">
            <Input
              type="text"
              placeholder="Country"
              name="country"
              value={values.country}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{padding: '6px'}}
            />
            {errors.country && (
              <p className="text-red-300 mb-0">{errors.country}</p>
            )}
          </div>
        </div>

        <div>
          <Button type="submit" label="Save Profile" bgColor="primary" />
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
