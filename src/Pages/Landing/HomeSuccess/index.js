import { Success } from "./styled.HomeSuccess";
import { 
  SmileOutlined, 
  BookOutlined, 
  SecurityScanOutlined 
} from '@ant-design/icons';

const HomeSuccess = () => {
  return (
    <Success>
      <div className='flex justify-between w-7/12 m-auto'>
        <div className='w-4/12'>
          <SmileOutlined className="text-4xl mb-2" />
          <h3 className="text-4xl font-bold mb-2">12,000+</h3>
          <p className="text-xs font-semibold">Our Happy Student</p>
        </div>

        <div className='w-4/12 ml-4 mr-4 relative top-14'>
          <BookOutlined className="text-4xl mb-2" />
          <h3 className="text-4xl font-bold mb-2">130+</h3>
          <p className="text-xs font-semibold">Course Complete</p>
        </div>

        <div className='w-4/12'>
          <SecurityScanOutlined className="text-4xl mb-2" />
          <h3 className="text-4xl font-bold mb-2">11392+</h3>
          <p className="text-xs font-semibold">Get Certificate</p>
        </div>
      </div>
    </Success>
  );
}

export default HomeSuccess;