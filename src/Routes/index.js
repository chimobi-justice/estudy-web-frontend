import { Routes, Route } from 'react-router-dom';

import Landing from '../Pages/Landing';

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    )
}

export default Pages;