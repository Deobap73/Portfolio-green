// src/pages/Projects.jsx
import ProjectsMain from '../components/ProjectsMain';
import ProjectsTheProjects from '../components/ProjectsTheProjects';
import Footer from '../components/Footer';
import './Projects.scss';

const Projects = () => {
  return (
    <div className='projects'>
      <header className='projectspresentationname'>
        <b className='take-a-look'>Take a look at</b>
        <b className='my-projects'>My projects</b>
      </header>
      <ProjectsMain />
      <ProjectsTheProjects />
      <Footer />
    </div>
  );
};

export default Projects;
