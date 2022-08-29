import { Routes, Route } from 'react-router-dom';

import Landing from '../Pages/Landing';

import StudentCourse from '../Pages/Student/Course';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />

            <Route path='/dashboard/courses' element={<StudentCourse />} />
        </Routes>
    )
}

export default Pages;