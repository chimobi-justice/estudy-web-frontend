import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { useFormik } from 'formik';
import { courseValidateSchema } from '../../../../validations/course';

import { Input, Progress } from 'antd';
import Layout from '../../../../Layouts';

import Button from '../../../../Components/Button';

import { FileInput, Select } from 'flowbite-react';

import { getUpdateCourse } from '../../../../api/courses';
import { axiosInstance } from '../../../../axiosInstance';
import {
  errorNotification,
  successNotification,
} from '../../../../helpers/notification';

const { TextArea } = Input;

const UpdateCourse = () => {
  const [imagePath, setImagePath] = useState('');
  const [videoPath, setVideoPath] = useState('');
  const [uploadingFile, setUploadingFile] = useState({});

  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['courses', id],
    queryFn: () => getUpdateCourse(id),
  });

  const _handleUpdateCourse = async (values) => {
    const payload = {
      name: values.name,
      category: values.category,
      price: values.price,
      description: values.description,
      thumbnail: imagePath || data?.data?.data?.thumbnail,
      video: videoPath || data?.data?.data?.video,
    };
    const res = await axiosInstance.patch(`/courses/m/${id}`, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log(res);

    if (res.status === 200) {
      successNotification(res?.data?.message);
    }

  };

  const formik = useFormik({
    initialValues: {
      name: data?.data?.data?.name ? data?.data?.data?.name : '',
      price: data?.data?.data?.price ? data?.data?.data?.price : '',
      category: data?.data?.data?.category ? data?.data?.data?.category : '',
      description: data?.data?.data?.description
        ? data?.data?.data?.description
        : '',
      thumbnail: data?.data?.data?.thumbnail ? data?.data?.data?.thumbnail : '',
      video: data?.data?.data?.thumbnail ? data?.data?.data?.video : '',
    },
    onSubmit: _handleUpdateCourse,
    validationSchema: courseValidateSchema,
    enableReinitialize: true,
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik;

  const handleFileUpload = async (e, fileType) => {
    e.preventDefault();

    const filename = e.target.files[0].name;

    const formDataKey = fileType === 'thumbnail' ? 'thumbnail' : 'video';

    const endpoint = fileType === 'video' ? 'video' : 'thumbnail';

    const form = new FormData();
    form.append(formDataKey, e.target.files[0]);

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
          setUploadingFile({ name: filename, status: percentCompleted });
        },
      });

      if (res) {
        if (res?.data?.thumbnail) {
          setImagePath(res?.data?.thumbnail);
        }

        if (res?.data?.video) {
          setVideoPath(res?.data?.video);
        }
      }
    } catch (e) {
      errorNotification('Something went wrong');
    }
  };

  return (
    <Layout label="Update Course">
      <div className="mt-2 w-6/12 m-auto p-2">
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div>
            <div className="w-full mb-2">
              <label htmlFor="">
                Course Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Course Name"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{ padding: '6px', marginTop: '5px' }}
              />
              {errors.name && (
                <p className="text-red-300 mb-0">{errors.name}</p>
              )}
            </div>

            <div className="w-full mb-2">
              <label htmlFor="">
                Course Price <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Course Price"
                name="price"
                value={values.price}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{ padding: '6px', marginTop: '5px' }}
              />
              {errors.price && (
                <p className="text-red-300 mb-0">{errors.price}</p>
              )}
            </div>

            <div className="w-full mb-2">
              <label htmlFor="">Course Category</label>
              <Select
                id="countries"
                name="category"
                onChange={handleChange}
                value={values.category}
              >
                <option value="all category">All Category</option>
                <option value="marketing">Marketing</option>
                <option value="web development">Web Development</option>
                <option value="mobile development">Mobile Development</option>
              </Select>
            </div>

            <div className="mb-2">
              <label htmlFor="">
                Course Description <span className="text-red-500">*</span>
              </label>
              <TextArea
                cols={1}
                rows={5}
                className="resize-none"
                placeholder="description"
                name="description"
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
                style={{ padding: '6px', marginTop: '5px' }}
              />
              {errors.description && (
                <p className="text-red-300 mb-0">{errors.description}</p>
              )}
            </div>

            <div className="mb-2">
              <label htmlFor="">
                Thumbnail <span className="text-red-500">*</span>
              </label>
              <FileInput onChange={(e) => handleFileUpload(e, 'thumbnail')} />
              {imagePath && uploadingFile && (
                <div>
                  <Progress percent={uploadingFile?.status} />
                </div>
              )}
            </div>

            <div className="w-full mb-2">
              <label htmlFor="">
                Course Video <span className="text-red-500">*</span>
              </label>
              <FileInput
                multiple
                onChange={(e) => handleFileUpload(e, 'video')}
              />
              {videoPath && uploadingFile && (
                <div>
                  <Progress percent={uploadingFile?.status} />
                </div>
              )}
            </div>

            <div className="w-full mt-4">
              <Button
                label="Submit"
                type="submit"
                bgColor="primary"
                size="large"
                disabled={
                  !values.name &&
                  !values.price &&
                  !values.category &&
                  !values.description
                }
              />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default UpdateCourse;
