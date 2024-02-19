import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutMeWelcomeContainerBox from './AboutMeWelcomeContainerBox';
import NavigationBar from './NavigationBar';
import './AboutMeMain.scss';

const AboutMeMain = () => {
  const navigate = useNavigate();

  const onAboutClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate('/projects');
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  return (
    <section className='aboutmemain'>
      <div className='aboutmetitle'>
        <div className='frame1'>
          <img className='frame-child' alt='' src='/line-1.svg' />
        </div>
        <h2 className='about-me'>About Me</h2>
      </div>
      <AboutMeWelcomeContainerBox />
      <NavigationBar
        pageLinkText='Home'
        sectionTitles='Projects'
        navItemTitle='Blog'
        propMarginTop='-0.125rem'
        propFontWeight='unset'
        propFontWeight1='unset'
        propFontWeight2='unset'
        onAboutClick={onAboutClick}
        onProjectsClick={onProjectsClick}
        onBlogClick={onBlogClick}
      />
    </section>
  );
};

export default AboutMeMain;
