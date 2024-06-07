// src/components/ProjectsButton.jsx

import DeoButton from '../Buttons/DeoButton';
import ProjectsAllProjects from './ProjectsAllProjects';
import './ProjectsContainer.scss';

const ProjectsContainer = () => {
  return (
    <div className='projectscontainer'>
      <div className='projectssideicon'>
        <DeoButton />
        <DeoButton />
      </div>
      <ProjectsAllProjects />
    </div>
  );
};

export default ProjectsContainer;
