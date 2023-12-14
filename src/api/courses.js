import { axiosInstance } from "../axiosInstance";

const getSingleCourseOverview = async (id) => {
  return await axiosInstance.get(`courses/${id}`);
};


const getAllCourse = async () => {
  return await axiosInstance.get('/courses/all');
};

export { getAllCourse, getSingleCourseOverview };
