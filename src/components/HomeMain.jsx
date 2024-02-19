import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import './HomeMain.scss';

const HomeMain = () => {
  const navigate = useNavigate();

  const onAboutClick = useCallback(() => {
    navigate('/aboutme');
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate('/projects');
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  return (
    <section className='homemain'>
      <section className='homesubmain'>
        <section className='mainslogan'>
          <h2 className='explore-the-magic-container'>
            <span>{`Explore the magic of the `}</span>
            <span className='web'>web</span>
            <span>{` through the eyes of a passionate `}</span>
            <span className='web'>developer</span>
          </h2>
        </section>
        <NavigationBar
          pageLinkText='About'
          sectionTitles='Projects'
          navItemTitle='Blog'
          onAboutClick={onAboutClick}
          onProjectsClick={onProjectsClick}
          onBlogClick={onBlogClick}
        />
      </section>
    </section>
  );
};

export default HomeMain;
