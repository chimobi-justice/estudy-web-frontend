import { axiosInstance } from '../axiosInstance';

// public
const allCourse = async () => {
  return await axiosInstance.get('courses/all');
};
// end public

// students

const getSingleStudentCourseOverview = async (id) => {
  const response = await axiosInstance.get(`courses/s/${id}`);
  return response.data; 
};

const getStudentPaidCourseOverview = async (slug) => {
  const response = await axiosInstance.get(`courses/s/paid-overview/${slug}`);
  return response.data; 
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

const updateCourse = async ({ id, data }) => {
  const response = await axiosInstance.patch(`courses/m/${id}`, data);
  return response.data; 
};

const getUpdateCourse = async (id) => {
  const response =  await axiosInstance.get(`courses/m/${id}`);
  return response.data;
};

const getMentorEnrolledStudents = async (page = 1) => {
  const response = await axiosInstance.get(`courses/m/enrolled-students?page=${page}`);
  return response.data;
};

// end mentor

export {
  allCourse,
  studentAllCourse,
  getSingleStudentCourseOverview,
  getStudentPaidCourseOverview,
  createCourse,
  getMentorCourses,
  deleteCourse,
  updateCourse,
  getUpdateCourse,
  studentEnrollCourse,
  getEnrollCourses,
  studentUnEnrollCourse,
  getMentorEnrolledStudents,
};
