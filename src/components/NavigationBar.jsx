import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const NavigationBar = ({
  pageLinkText,
  sectionTitles,
  navItemTitle,
  propMarginTop,
  propFontWeight,
  propFontWeight1,
  propFontWeight2,
  onAboutClick,
  onProjectsClick,
  onBlogClick,
}) => {
  const navigationBarStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const aboutStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  const projectsStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight1,
    };
  }, [propFontWeight1]);

  const blogStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight2,
    };
  }, [propFontWeight2]);

  return (
    <nav className='navigationbar' style={navigationBarStyle}>
      <Link
        className='about'
        to='/aboutme'
        onClick={onAboutClick}
        style={aboutStyle}>
        {pageLinkText}
      </Link>
      <b className='b'>|</b>
      <Link
        className='about'
        to='/projects'
        onClick={onProjectsClick}
        style={projectsStyle}>
        {sectionTitles}
      </Link>
      <b className='b'>|</b>
      <Link
        className='about'
        to='/aboutme'
        onClick={onBlogClick}
        style={blogStyle}>
        {navItemTitle}
      </Link>
    </nav>
  );
};

export default NavigationBar;
