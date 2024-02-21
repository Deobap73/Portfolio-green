// src/components/AboutMeMain.jsx
import AboutMeWelcomeContainerBox from './AboutMeWelcomeContainerBox';
import NavigationBar from './NavigationBar';
import './AboutMeMain.scss';

const AboutMeMain = () => {
  return (
    <section className='aboutmemain'>
      <div className='aboutmetitle'>
        <div className='frame1'>
          <img className='frame-child' alt='' src='/line-1.svg' />
        </div>
        <h2 className='about-me'>About Me</h2>
      </div>
      <AboutMeWelcomeContainerBox />
      <NavigationBar context='about' />
    </section>
  );
};

export default AboutMeMain;
