// src/pages/Projects.jsx

import ProjectsMain from '../components/ProjectsMain';
import ProjectsTheProjects from '../components/ProjectsTheProjects';
import Footer from '../components/Footer';
import './Projects.scss';

const Projects = () => {
  return (
    <div className='projects'>
      <header className='projectspresentationname'>
        <p className='projectsSentence'>
          <span className='take-a-look'>Take a look at some of </span>
          <span className='my-projects'>My projects</span>
        </p>
      </header>
      <ProjectsMain />
      <ProjectsTheProjects />
      <Footer />
    </div>
  );
};

export default Projects;
