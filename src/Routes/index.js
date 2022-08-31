import { Routes, Route } from 'react-router-dom';

import Landing from '../Pages/Landing';

import StudentCourse from '../Pages/Student/Course';
import StudentCourseOverview from '../Pages/Student/CousreOverview';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/dashboard/courses" element={<StudentCourse />} />
            <Route path="/dashboard/course/:id/overview" element={<StudentCourseOverview />} />
        </Routes>
    )
}

export default Pages;