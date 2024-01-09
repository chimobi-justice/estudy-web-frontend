import { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserProfileContext } from '../../context/userContext';
import { Avatar, message } from 'antd';
import { CameraFilled } from '@ant-design/icons';
import { axiosInstance } from '../../axiosInstance';

import {
  errorNotification,
  successNotification,
} from '../../helpers/notification';

import { userProfile } from '../../api/users';

import DefaultUser from '../../assets/images/default_user.png';

const UploadAvatar = () => {
  const { user } = useContext(UserProfileContext);

  const queryClient = useQueryClient();

  const {
    mutate: updateProfileAvatarMutation,
  } = useMutation({
    mutationFn: userProfile,
    onSuccess: (data) => {
      successNotification(data?.message);

      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
  });

  const handleFileUpload = async (e, fileType) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      const fileSize = file.size;
      const maxFileSizeInBytes = 2 * 1024 * 1024;

      if (fileSize > maxFileSizeInBytes) {
        message.error(
          'File size exceeds the limit (2 MB). Please select a smaller file.'
        );

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
              updateProfileAvatarMutation({
                avatar: res?.data?.avatar,
              });
            }
          }
        } catch (e) {
          errorNotification(e?.response?.data?.errors?.avatar[0]);
        }
      }
    }
  };

  return (
    <div className="text-center my-10 relative">
      {user?.data?.data?.avatar && (
        <>
          <Avatar
            shape="circle"
            size="large"
            src={<img src={user?.data?.data?.avatar} alt="avatar" />}
            style={{ height: '140px', width: '140px', alignItems: 'center' }}
          />
          <label>
            <CameraFilled className="absolute top-28 right-0 left-14 text-2xl cursor-pointer" />
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
            src={DefaultUser}
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
  );
};

export default UploadAvatar;
