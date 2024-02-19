import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import './BlogMain.scss';

const BlogMain = () => {
  const navigate = useNavigate();

  const onAboutClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate('/aboutme');
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate('/projects');
  }, [navigate]);

  return (
    <section className='blogmain'>
      <div className='blogmainsentence'>
        <b className='the-blog-page-container'>
          <span>{`The `}</span>
          <span className='blog-page'>{`Blog Page `}</span>
          <span>{`is in the pipeline, almost alive. A page where `}</span>
          <span className='blog-page'>MongoDB</span>
          <span> will be used</span>
        </b>
      </div>
      <NavigationBar
        pageLinkText='Home'
        sectionTitles='About'
        navItemTitle='Projects'
        propMarginTop='unset'
        propFontWeight='700'
        propFontWeight1='700'
        propFontWeight2='700'
        onAboutClick={onAboutClick}
        onProjectsClick={onProjectsClick}
        onBlogClick={onBlogClick}
      />
    </section>
  );
};

export default BlogMain;
