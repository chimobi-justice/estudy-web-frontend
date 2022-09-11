import { Routes, Route } from 'react-router-dom';

import Landing from '../Pages/Landing';

import Signup from '../Pages/Signup';
import Login from '../Pages/Login';

import StudentCourse from '../Pages/Student/Course';
import StudentCourseOverview from '../Pages/Student/CousreOverview';
import StudentProfile from '../Pages/Student/Profile';
import StudentSetting from '../Pages/Student/Setting';
import StudentChat from '../Pages/Student/Chat';
import StudentUserChat from '../Pages/Student/Chat/user';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard/courses" element={<StudentCourse />} />
            <Route path="/dashboard/course/:id/overview" element={<StudentCourseOverview />} />
            <Route path="/dashboard/profile" element={<StudentProfile />} />
            <Route path="/dashboard/setting" element={<StudentSetting />} />
            <Route path="/dashboard/chat" element={<StudentChat />} />
            <Route path="/dashboard/chat/:name" element={<StudentUserChat />} />
        </Routes>
    )
}

export default Pages;