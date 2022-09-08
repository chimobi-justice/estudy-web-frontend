import { Routes, Route } from 'react-router-dom';

import Landing from '../Pages/Landing';

import StudentCourse from '../Pages/Student/Course';
import StudentCourseOverview from '../Pages/Student/CousreOverview';
import StudentProfile from '../Pages/Student/Profile';
import StudentSetting from '../Pages/Student/Setting';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/dashboard/courses" element={<StudentCourse />} />
            <Route path="/dashboard/course/:id/overview" element={<StudentCourseOverview />} />
            <Route path="/dashboard/profile" element={<StudentProfile />} />
            <Route path="/dashboard/setting" element={<StudentSetting />} />
        </Routes>
    )
}

export default Pages;