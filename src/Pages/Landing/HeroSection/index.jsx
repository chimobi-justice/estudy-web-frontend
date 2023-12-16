import { HeroContentTop, HeroContentCenterLg, HeroContentCenterSm } from './styled.hero';
import Estudy_Hero from '../../../assets/images/E-hero.gif';

const HeroSection = () => {
  return (
    <section className='mt-20'>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-11/12 m-auto items-center">
        <div className="lg:w-11/12 sm:w-full">
          <HeroContentTop>
            ready to learn
          </HeroContentTop>
          <HeroContentCenterLg className="text-5xl font-bold text-gray-900">
            Learn new <br /> think daily
          </HeroContentCenterLg>


          <HeroContentCenterSm className="text-5xl font-bold text-gray-900">
            Learn new think daily
          </HeroContentCenterSm>
        </div>

        <div className="lg:w-11/12 sm:w-full">
          <img src={Estudy_Hero} alt="" className='w-full'/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
