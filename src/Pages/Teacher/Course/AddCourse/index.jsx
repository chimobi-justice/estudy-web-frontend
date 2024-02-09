import { useState } from 'react';
import useCreateCourse from '../../../../hooks/useCreateCourse';
import { useFormik } from 'formik';
import { courseValidateSchema } from '../../../../validations/course';
import { Input, Progress, message } from 'antd';
import Layout from '../../../../Layouts';
import Button from '../../../../Components/Button';
import { FileInput, Modal, Select } from 'flowbite-react';
import { errorNotification } from '../../../../helpers/notification';
import { uploadCourseFiles } from '../../../../helpers/uploadCourseFile';

const { TextArea } = Input;

const AddCourse = () => {
  const [imagePath, setImagePath] = useState('');
  const [videoPath, setVideoPath] = useState([]);
  const [coursePreview, setCoursePreview] = useState('');
  const [uploadingFile, setUploadingFile] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [courseTitle, setCourseTitle] = useState([]);
  const [courseSubTitle, setCourseSubTitle] = useState([]);

  const createCourseMutation = useCreateCourse();

  const _handleCreateCourse = (values) => {
    createCourseMutation.mutate({
      name: values.name,
      category: values.category,
      price: values.price,
      description: values.description,
      thumbnail: imagePath,
      video: videoPath,
      title: courseTitle,
      sub_title: courseSubTitle,
      course_preview: coursePreview,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      description: '',
      thumbnail: '',
      video: '',
      title: '',
      sub_title: '',
    },
    onSubmit: _handleCreateCourse,
    validationSchema: courseValidateSchema,
  });

  const { handleChange, handleBlur, handleSubmit, errors, values } = formik;

  const handleFileUpload = async (e, fileType) => {
    e.preventDefault();

    const files = e.target.files;
    
    const formDataKey = fileType === 'thumbnail' ? 'thumbnail' : (fileType === 'video' ? 'video' : 'course_preview');

    const endpoint = fileType === 'video' ? 'video' : (fileType === 'thumbnail' ? 'thumbnail' : 'course_preview');

    if (files) {
      const fileSize = files[0].size;
      const maxFileSizeInBytes =
        fileType === 'thumbnail' ? 2 * 1024 * 1024 : 8 * 1024 * 1024;

      const allowedVideoTypes = ['video/avi', 'video/mpeg', 'video/mp4'];

      if (
        formDataKey === 'video' &&
        !allowedVideoTypes.includes(files[0].type)
      ) {
        message.error('The video field must be a file of type: avi, mpeg, mp4');
        e.target.value = null;
      }

      if (fileSize > maxFileSizeInBytes) {
        message.error(
          `File size exceeds the limit (${
            maxFileSizeInBytes / (1024 * 1024)
          } MB). Please select a smaller file.`
        );
        e.target.value = null;
      } else {
        try {
          const responseData = await uploadCourseFiles(
            files,
            formDataKey,
            endpoint,
            setUploadingFile
          );

          if (responseData) {
            if (formDataKey === 'thumbnail') {
              setImagePath(responseData.thumbnail);
            }
            if (formDataKey === 'video') {
              setVideoPath([...videoPath, responseData.video]);
            }
            if (formDataKey === 'course_preview') {
              setCoursePreview(responseData.course_preview);
            }
          }
        } catch (error) {
          errorNotification(error);
        }
      }
    }
  };

  return (
    <Layout label="Create Course">
      <div className="mt-2 w-full lg:w-6/12 m-auto p-2">
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
              <label htmlFor="">Course Price</label>
              <Input
                type="text"
                placeholder="Course Price in ₦"
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
              {imagePath &&
                uploadingFile &&
                uploadingFile?.dataKey === 'thumbnail' && (
                  <div>
                    <Progress percent={uploadingFile?.status} />
                  </div>
                )}
            </div>

            <div className="mb-2">
              <label htmlFor="">
                Course Preview <span className="text-red-500">*</span>
              </label>
              <FileInput onChange={(e) => handleFileUpload(e, 'course_preview')} />
              {coursePreview &&
                uploadingFile &&
                uploadingFile?.dataKey === 'course_preview' && (
                  <div>
                    <Progress percent={uploadingFile?.status} />
                  </div>
                )}
            </div>

            <div>
              <Button
                label="Add Video"
                type="button"
                bgColor="secondary"
                handleClick={() => setOpenModal(true)}
              />
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

          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="">
                <div className="w-full mb-2">
                  <label htmlFor="">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="course intro"
                    name="title"
                    value={values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{ padding: '6px', marginTop: '5px' }}
                  />
                  {errors.title && (
                    <p className="text-red-300 mb-0">{errors.title}</p>
                  )}
                </div>

                <div className="w-full mb-2">
                  <label htmlFor="">
                    Sub Title <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="introduction project (eg, What you'll build)"
                    name="sub_title"
                    value={values.sub_title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    style={{ padding: '6px', marginTop: '5px' }}
                  />
                  {errors.title && (
                    <p className="text-red-300 mb-0">{errors.sub_title}</p>
                  )}
                </div>

                <div className="w-full mb-2">
                  <label htmlFor="">
                    Course Video <span className="text-red-500">*</span>
                  </label>
                  <FileInput onChange={(e) => handleFileUpload(e, 'video')} />
                  {videoPath &&
                    uploadingFile &&
                    uploadingFile?.dataKey === 'video' && (
                      <div>
                        <Progress percent={uploadingFile?.status} />
                      </div>
                    )}
                </div>
                <div>
                  <Button
                    label="Add Video"
                    bgColor="primary"
                    type="button"
                    disabled={
                      !values.title ||
                      !values.sub_title ||
                      !videoPath.length === 0
                    }
                    handleClick={() => {
                      if (
                        values.title &&
                        values.sub_title &&
                        videoPath.length > 0
                      ) {
                        setCourseTitle([...courseTitle, values.title]);
                        setCourseSubTitle([
                          ...courseSubTitle,
                          values.sub_title,
                        ]);
                        message.success('Added successfully');
                        setOpenModal(false);
                      }
                    }}
                  />
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </form>
      </div>
    </Layout>
  );
};

export default AddCourse;
