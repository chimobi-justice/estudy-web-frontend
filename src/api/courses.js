import { axiosInstance } from '../axiosInstance';

// public
const allCourse = async () => {
  return await axiosInstance.get('courses/all');
};
// end public

// students

const getSingleStudentCourseOverview = async (id) => {
  return await axiosInstance.get(`courses/s/${id}`);
};

const studentEnrollCourse = async (id) => {
  return await axiosInstance.post(`courses/s/user/${id}/enroll`);
};

const studentUnEnrollCourse = async (id) => {
  return await axiosInstance.post(`courses/s/user/${id}/unenroll`);
};

const studentAllCourse = async () => {
  return await axiosInstance.get('/courses/s/all');
};

const getEnrollCourses = async () => {
  return await axiosInstance.get('/courses/s/user/enroll-courses');
};
// end students

// mentor 
const createCourse = async (fields) => {
  return await axiosInstance.post('/courses/m/create', fields);
};

const getMentorCourses = async () => {
  return await axiosInstance.get('/courses/m/all');
};

const deleteCourse = async (id) => {
  return await axiosInstance.delete(`courses/m/${id}`);
};

const updateCourse = async (id) => {
  return await axiosInstance.patch(`courses/m/${id}`);
};

const getUpdateCourse = async (id) => {
  return await axiosInstance.get(`courses/m/${id}`);
};
// end mentor

export {
  allCourse,
  studentAllCourse,
  getSingleStudentCourseOverview,
  createCourse,
  getMentorCourses,
  deleteCourse,
  updateCourse,
  getUpdateCourse,
  studentEnrollCourse,
  getEnrollCourses,
  studentUnEnrollCourse,
};
