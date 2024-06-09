// src/components/NavigationBar.jsx

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.scss';
import { AuthLinks } from '../Blog/authLinks/AuthLinks';

const NavigationBar = ({ context }) => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    navigate('/aboutMe');
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate('/projects');
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate('/blog');
  }, [navigate]);

  return (
    <nav className='navigationbar'>
      {context === 'home' && (
        <>
          <span className='about' onClick={onAboutClick}>
            About
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onProjectsClick}>
            Projects
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onBlogClick}>
            Blog
          </span>
        </>
      )}
      {context === 'about' && (
        <>
          <span className='about' onClick={onHomeClick}>
            Home
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onProjectsClick}>
            Projects
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onBlogClick}>
            Blog
          </span>
        </>
      )}
      {context === 'projects' && (
        <>
          <span className='about' onClick={onHomeClick}>
            Home
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onAboutClick}>
            About
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onBlogClick}>
            Blog
          </span>
        </>
      )}
      {context === 'blog' && (
        <>
          <span className='about' onClick={onHomeClick}>
            Home
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onAboutClick}>
            About
          </span>
          <b className='b'>|</b>
          <span className='about' onClick={onProjectsClick}>
            Projects
          </span>
          <b className='b'>|</b>

          <AuthLinks />
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
