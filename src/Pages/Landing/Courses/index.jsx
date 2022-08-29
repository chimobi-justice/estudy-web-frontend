import Button from '../../../Components/Button';

import { CourseWrapper, CourseBoxImage, CourseHolder } from './styled.course';

import CourseImgage from '../../../assets/images/course.jpg';

const HomeCourse = () => {
  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <CourseWrapper className='pt-8 pb-8'>
      <h3 className='text-3xl font-bold text-gray-900 w-3/12 m-auto'>Our Popular courses</h3>
      <CourseHolder>
        <div className='flex justify-between'>
          <div className="bg-white border border-gray-50 shadow-lg rounded-lg w-3/12 mr-2">
            <CourseBoxImage src={CourseImgage} alt="" />
            <div className='flex justify-between p-2 items-center'>
              <p className='font-semibold text-green-600'>$199</p>
              <p className='bg-gray-100 py-1 px-2 text-sm text-blue-400'>18 lesson</p>
            </div>
            <h4 className='font-extrabold text-black-400 p-2'>Digital Marketing</h4>
            <div className='text-center mb-3'>
              <Button
                type="button"
                bgColor="secondary"
                label="Enroll Now"
                handleClick={handleClick}
              />
            </div>
          </div>

          <div className="bg-white border border-gray-50 shadow-lg rounded-lg w-3/12 mr-2 ml-2">
            <CourseBoxImage src={CourseImgage} alt="" />
            <div className='flex justify-between p-2 items-center'>
              <p className='font-semibold text-green-600'>$199</p>
              <p className='bg-gray-100 py-1 px-2 text-sm text-blue-400'>18 lesson</p>
            </div>
            <h4 className='font-extrabold text-black-400 p-2'>Digital Marketing</h4>
            <div className='text-center mb-3'>
              <Button
                type="button"
                bgColor="secondary"
                label="Enroll Now"
                handleClick={handleClick}
              />
            </div>
          </div>

          <div className="bg-white border border-gray-50 shadow-lg rounded-lg w-3/12 mr-2 ml-2">
            <CourseBoxImage src={CourseImgage} alt="" />
            <div className='flex justify-between p-2 items-center'>
              <p className='font-semibold text-green-600'>$199</p>
              <p className='bg-gray-100 py-1 px-2 text-sm text-blue-400'>lesson</p>
            </div>
            <h4 className='font-extrabold text-black-400 p-2'>Digital Marketing</h4>
            <div className='text-center mb-3'>
              <Button
                type="button"
                bgColor="secondary"
                label="Enroll Now"
                handleClick={handleClick}
              />
            </div>
          </div>

          <div className="bg-white border border-gray-50 shadow-lg rounded-lg w-3/12 ml-2">
            <CourseBoxImage src={CourseImgage} alt="" />
            <div className='flex justify-between p-2 items-center'>
              <p className='font-semibold text-green-600'>$199</p>
              <p className='bg-gray-100 py-1 px-2 text-sm text-blue-400'>lesson</p>
            </div>
            <h4 className='font-extrabold text-black-400 p-2'>Digital Marketing</h4>
            <div className='text-center mb-3'>
              <Button
                type="button"
                bgColor="secondary"
                label="Enroll Now"
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </CourseHolder>
    </CourseWrapper>
  );
}

export default HomeCourse;