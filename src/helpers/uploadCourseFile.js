import { axiosInstance } from '../axiosInstance';

export const uploadCourseFiles = async (
  files,
  formDataKey,
  endpoint,
  setUploadingFile
) => {
  const form = new FormData();

  if (formDataKey === 'thumbnail') {
    form.append(formDataKey, files[0]);
  }

  if (formDataKey === 'video') {
    form.append(formDataKey, files[0]);
  }

  try {
    const res = await axiosInstance.post(`/courses/m/${endpoint}`, form, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadingFile({
          name: files,
          status: percentCompleted,
          dataKey: formDataKey,
        });
      },
    });

    return res?.data;
  } catch (error) {
    if (error?.response?.data?.message) {
      if (error?.response?.data?.errors?.thumbnail) {
        throw error.response.data.errors.thumbnail[0];
      }
    } else {
      throw new Error('Something went wrong during file upload');
    }
  }
};
