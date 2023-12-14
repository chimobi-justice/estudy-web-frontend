import HeroContent from './styled.hero';
import Estudy_Hero from '../../../assets/images/E-hero.gif';

const HeroSection = () => {
  return (
    <section>
      <div className='flex justify-between w-11/12 m-auto items-center'>
        <div className='w-11/12'>
          <HeroContent className='text-5xl font-bold text-gray-900'>
            Learn From Home &amp; Make Yourself Skilled
          </HeroContent>
        </div>

        <div className='w-11/12'>
          <img src={Estudy_Hero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;