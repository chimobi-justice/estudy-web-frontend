import { useContext } from 'react';

import { UserProfileContext } from '../../../../context/userContext';

import useCreateProfile from '../../../../hooks/useCreateProfile';

import { Input } from 'antd';
import { useFormik } from 'formik';

import Button from '../../../../Components/Button';
import { validateSchema } from '../../../../validations/studentProfile';
import UploadAvatar from '../../../../Components/UploadAvatar';

const { TextArea } = Input;

const PersonalDetails = () => {
  const { user } = useContext(UserProfileContext);

  const updateProfileMutation = useCreateProfile();

  const _handleStudentProfile = (values) => {
    updateProfileMutation.mutate({
      fullname: values.fullname,
      email: values.email,
      address: values.address,
      city: values.city,
      state: values.state,
      zip: values.zip,
      country: values.country,
      avatar: user?.data?.data?.avatar || '',
    });
  };

  const formik = useFormik({
    initialValues: {
      fullname: user?.data?.data?.fullname ? user?.data?.data?.fullname : '',
      email: user?.data?.data?.email ? user?.data?.data?.email : '',
      address: user?.data?.data?.address ? user?.data?.data?.address : '',
      city: user?.data?.data?.city ? user?.data?.data?.city : '',
      state: user?.data?.data?.state ? user?.data?.data?.state : '',
      zip: user?.data?.data?.zip ? user?.data?.data?.zip : '',
      country: user?.data?.data?.country ? user?.data?.data?.country : '',
    },
    onSubmit: _handleStudentProfile,
    validationSchema: validateSchema,
    enableReinitialize: true,
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik;
  
  return (
    <>
      <div className="py-1">
        <p className="text-2xl text-gray-600">Profile Settings</p>
      </div>

      <UploadAvatar />

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-6">
          <div className="w-6/12 mr-1">
            <Input
              type="text"
              placeholder="FullName"
              name="fullname"
              value={values.fullname}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ padding: '8px', borderRadius: '7px' }}
            />
            {errors.fullname && (
              <p className="text-red-300 mb-0">{errors.fullname}</p>
            )}
          </div>
          <div className="w-6/12 ml-1">
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={values.email}
              style={{ padding: '8px', borderRadius: '7px' }}
              disabled
            />
            {errors.email && (
              <p className="text-red-300 mb-0">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mb-6">
          <TextArea
            cols={1}
            rows={4}
            className="resize-none"
            placeholder="Address"
            name="address"
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '7px' }}
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
              style={{ padding: '8px', borderRadius: '7px' }}
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
              style={{ padding: '8px', borderRadius: '7px' }}
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
              style={{ padding: '8px', borderRadius: '7px' }}
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
              style={{ padding: '8px', borderRadius: '7px' }}
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
