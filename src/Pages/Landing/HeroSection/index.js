import HeroContent from './styled.hero';
import Estudy_Hero from '../../../assets/images/E-hero.gif';

const HeroSection = () => {
  return (
    <section>
      <div className='flex justify-between w-9/12 m-auto items-center'>
        <div>
          <HeroContent className='text-5xl font-bold text-gray-900'>
            Learn From <br/> Home &amp; Make <br/> Skilled Yourself
          </HeroContent>
        </div>

        <div>
          <img src={Estudy_Hero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;