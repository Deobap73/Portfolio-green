import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import './ProjectsMain.scss';

const ProjectsMain = () => {
  const navigate = useNavigate();

  const onAboutClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate('/aboutme');
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  return (
    <section className='projectsmain'>
      <div className='projectssubmainpresentation'>
        <div className='projectssentence'>
          <p className='enter-the-code-based-container'>
            <span>{`Enter the code-based universe of my projects page, where each site and application is not just the culmination of lines and functions, but a living testament to my `}</span>
            <span className='web-development'>web development.</span>
          </p>
        </div>
        <NavigationBar
          pageLinkText='Home'
          sectionTitles='About'
          navItemTitle='Blog'
          propMarginTop='unset'
          propFontWeight='unset'
          propFontWeight1='unset'
          propFontWeight2='unset'
          onAboutClick={onAboutClick}
          onProjectsClick={onProjectsClick}
          onBlogClick={onBlogClick}
        />
      </div>
    </section>
  );
};

export default ProjectsMain;
