import { 
  Platform, 
  PlatformTitle, 
  PlatformImage, 
  PlatformImageWrapper 
} from "./styled.platform";
import expert from '../../../assets/images/expert.svg';
import certificate from '../../../assets/images/certificate.svg';
import lifetime from '../../../assets/images/lifetime.svg';

const OurPlatform = () => {
  return (
    <Platform>
      <PlatformTitle className='text-3xl font-bold text-gray-900'>What You Find From Our Platform</PlatformTitle>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:w-11/12 sm:w-full m-auto gap-10'>
        <div className='lg:w-full'>
          <div className="bg-white p-3 border border-gray-50 shadow-lg rounded-lg mb-3">
            <h3 className='text-sm font-bold pb-3'>Expert Mentor</h3>
            <PlatformImageWrapper>
              <PlatformImage src={expert} className='w-11/12' alt=""/>  
            </PlatformImageWrapper>
          </div>
          <p className='text-sm font-medium'>You will get world class mentor</p>
        </div>

        <div className='lg:w-full lg:relative lg:top-14'>
          <div className="bg-white p-5 border border-gray-50 shadow-lg rounded-lg mb-3">
            <h3 className='text-sm font-bold pb-3'>Certification</h3>
            <PlatformImageWrapper>
              <PlatformImage src={certificate} className='w-11/12' alt=""/>  
            </PlatformImageWrapper>
          </div>
          <p className='text-sm font-medium'>After complete course, you will get valuable Certificate</p>
        </div>

        <div className='lg:w-full'>
          <div className="bg-white p-5 border border-gray-50 shadow-lg rounded-lg mb-3">
            <h3 className='text-sm font-bold pb-3'>Lifetime support</h3>
            <PlatformImageWrapper>
              <PlatformImage src={lifetime} className='w-11/12' alt=""/>  
            </PlatformImageWrapper>
          </div>
          <p className='text-sm font-medium'>You will get 24/7 full time support</p>
        </div>
      </div>
    </Platform>
  );
}

export default OurPlatform;