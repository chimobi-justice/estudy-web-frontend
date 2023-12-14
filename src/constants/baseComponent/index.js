import Landing from '../../Pages/Landing';

import Signup from '../../Pages/Signup';
import Login from '../../Pages/Login';

import StudentDashboard from '../../Pages/Student';
import StudentCourse from '../../Pages/Student/Course';
import StudentCourseOverview from '../../Pages/Student/CousreOverview';
import StudentProfile from '../../Pages/Student/Profile';
import StudentSetting from '../../Pages/Student/Setting';
import StudentChat from '../../Pages/Student/Chat';
import ConfirmEmail from '../../Pages/confirmEmail';
import VerifyEmail from '../../Pages/verifyEmail';

export const BaseComponent = [
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
    Component: ConfirmEmail,
    path: '/auth/confirm',
    useAuth: false,
  },
  {
    Component: VerifyEmail,
    path: '/auth/verify',
    useAuth: false,
  },
  {
    Component: StudentDashboard,
    path: '/s/dashboard',
    useAuth: true,
  },
  {
    Component: StudentCourse,
    path: '/s/dashboard/courses',
    useAuth: true,
  },
  {
    Component: StudentCourseOverview,
    path: '/s/dashboard/course/:id/overview',
    useAuth: true,
  },
  {
    Component: StudentProfile,
    path: '/s/dashboard/profile',
    useAuth: true,
  },
  {
    Component: StudentSetting,
    path: '/s/dashboard/setting',
    useAuth: true,
  },
  {
    Component: StudentChat,
    path: '/s/dashboard/chat',
    useAuth: true,
  },
];
