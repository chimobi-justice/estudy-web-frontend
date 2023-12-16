import { Success } from "./styled.HomeSuccess";

import { 
  SmileOutlined, 
  BookOutlined, 
  SecurityScanOutlined 
} from '@ant-design/icons';

const HomeSuccess = () => {
  return (
    <Success>
      <div className='grid lg:grid-cols-3 lg:gap-16 lg:w-7/12 sm:w-full sm:grid-cols-1 sm:gap-0 m-auto'>
        <div className='lg:w-4/12 sm:w-full'>
          <SmileOutlined className="text-4xl mb-2" />
          <h3 className="text-4xl font-bold mb-2">12,000+</h3>
          <p className="text-xs font-semibold">Our Happy Student</p>
        </div>

        <div className='lg:w-4/12 sm:w-full lg:ml-4 lg:mr-4 lg:relative lg:top-14'>
          <BookOutlined className="text-4xl lg:mb-2" />
          <h3 className="text-4xl font-bold lg:mb-2">130+</h3>
          <p className="text-xs font-semibold">Course Complete</p>
        </div>

        <div className='lg:w-4/12 sm:w-full'>
          <SecurityScanOutlined className="text-4xl mb-2" />
          <h3 className="text-4xl font-bold mb-2">11392+</h3>
          <p className="text-xs font-semibold">Get Certificate</p>
        </div>
      </div>
    </Success>
  );
}

export default HomeSuccess;