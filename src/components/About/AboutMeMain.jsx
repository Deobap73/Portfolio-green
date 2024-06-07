// src/components/AboutMeMain.jsx
import AboutMeWelcomeContainerBox from './AboutMeWelcomeContainerBox';
import NavigationBar from '../Navigation/NavigationBar';
import './AboutMeMain.scss';

const AboutMeMain = () => {
  return (
    <section className='aboutmemain'>
      <div className='aboutmetitle'>
        <div className='verticalline'>
          <hr className='line' />
        </div>
        <h2 className='about-me'>About Me</h2>
      </div>
      <AboutMeWelcomeContainerBox />
      <NavigationBar context='about' />
    </section>
  );
};

export default AboutMeMain;
