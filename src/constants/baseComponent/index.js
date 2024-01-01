import Landing from '../../Pages/Landing';

import Signup from '../../Pages/Signup';
import Login from '../../Pages/Login';

import StudentDashboard from '../../Pages/Student';
import StudentCourse from '../../Pages/Student/Course';
import StudentCourseOverview from '../../Pages/Student/CousreOverview';
import StudentProfile from '../../Pages/Student/Profile';
import StudentSetting from '../../Pages/Student/Setting';
import StudentChat from '../../Pages/Student/Chat';

import TeacherDashboard from '../../Pages/Teacher';
import AllCourse from '../../Pages/Teacher/Course/AllCourse';
import AddCourse from '../../Pages/Teacher/Course/AddCourse';
import UpdateCourse from '../../Pages/Teacher/Course/UpdateCourse';

export const BaseComponent = [
  // student paths
  {
    Component: Landing,
    path: '/',
    useAuth: false,
  },
  {
    Component: Signup,
    path: '/register',
    useAuth: false,
  },
  {
    Component: Login,
    path: '/login',
    useAuth: false,
  },
  {
    Component: StudentDashboard,
    path: '/s/dashboard',
    useAuth: true,
  },
  {
    Component: StudentCourse,
    path: '/s/courses',
    useAuth: true,
  },
  {
    Component: StudentCourseOverview,
    path: '/s/course/:id/overview',
    useAuth: true,
  },
  {
    Component: StudentProfile,
    path: '/s/profile',
    useAuth: true,
  },
  {
    Component: StudentSetting,
    path: '/s/setting',
    useAuth: true,
  },
  {
    Component: StudentChat,
    path: '/s/chat',
    useAuth: true,
  },

  // end student paths


  // teacher paths

  {
    Component: TeacherDashboard,
    path: '/m/dashboard',
    useAuth: true,
  },
  {
    Component: AllCourse,
    path: '/m/courses',
    useAuth: true,
  },
  {
    Component: AddCourse,
    path: '/m/courses/create',
    useAuth: true,
  },
  {
    Component: UpdateCourse,
    path: '/m/courses/:id',
    useAuth: true,
  },

  // end teacher paths
];
