import { useContext } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UserProfileContext } from '../../../../../context/userContext';

import Button from '../../../../../Components/Button';

import { useFormik } from 'formik';

import { validateSchema } from '../../../../../validations/studentProfile';

import { Input, Avatar, message} from 'antd';
import { CameraFilled } from '@ant-design/icons';
import { userProfile, userProfileAll } from '../../../../../api/users';
import {
  errorNotification,
  successNotification,
} from '../../../../../helpers/notification';
import { axiosInstance } from '../../../../../axiosInstance';

const { TextArea } = Input;

const PersonalDetails = () => {
  const { user } = useContext(UserProfileContext);

  const queryClient = useQueryClient();

  const updateProfileMutation = useMutation({
    mutationFn: userProfileAll,
    onSuccess: (data) => {
      successNotification(data?.message);

      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: (error) => {
      errorNotification(error?.message);
    },
  });

  const updateProfileAvatarMutation = useMutation({
    mutationFn: userProfile,
    onSuccess: (data) => {
      successNotification(data?.message);

      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    }
  });

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

  const handleFileUpload = async (e, fileType) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      const fileSize = file.size;
      const maxFileSizeInBytes = 2 * 1024 * 1024;

      if (fileSize > maxFileSizeInBytes) {
        message.error('File size exceeds the limit (2 MB). Please select a smaller file.');

        e.target.value = null;
      } else {
        const formDataKey = fileType === 'avatar' ? 'avatar' : '';

        const form = new FormData();
        form.append(formDataKey, file);
    
        try {
          const res = await axiosInstance.post('user/profile/avatar', form, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          if (res) {
            if (res.status === 200) {
              updateProfileAvatarMutation.mutate({
                avatar: res?.data?.avatar,
              });
            }
          }
        } catch (e) {
          console.log(e)
          errorNotification(e?.response?.data?.errors?.avatar[0]);
        }
      }
    }
  };

  return (
    <>
      <div className="text-center my-10 relative">
        {user?.data?.data?.avatar && (
          <>
            <Avatar
              shape="circle"
              size="large"
              src={<img src={user?.data?.data?.avatar} alt="avatar" />}
              style={{ height: '140px', width: '140px', alignItems: 'center' }}
            />
            <label className="block cursor-pointer">
              <CameraFilled className="absolute top-28 right-0 left-14 text-2xl" />
              <input
                type="file"
                name="profileImage"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 'avatar')}
              />
            </label>
          </>
        )}
        {!user?.data?.data?.avatar && (
          <>
            <Avatar
              shape="circle"
              size="large"
              style={{ height: '140px', width: '140px', alignItems: 'center' }}
            />
            <label className="block cursor-pointer">
              <CameraFilled className="absolute top-28 right-0 left-14 text-2xl" />
              <input
                type="file"
                name="profileImage"
                className="hidden"
                onChange={(e) => handleFileUpload(e, 'avatar')}
              />
            </label>
          </>
        )}
      </div>

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
