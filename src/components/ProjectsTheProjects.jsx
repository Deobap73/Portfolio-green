// src/components/ProjectsTheProjects.jsx

import ProjectsContainer from './ProjectsContainer';
import './ProjectsTheProjects.scss';

const ProjectsTheProjects = () => {
  return (
    <section className='projectstheprojects'>
      <div className='projectstitle'>
        <div className='verticalline'>
          <hr className='line' />
        </div>
        <div className='projectstheprojectstitle'>
          <div className='projectstitleofprojects'>
            <h2 className='the-evolution'>The evolution</h2>
          </div>
          <p className='from-the-first'>
            From the first project in the orientation program to the culmination
            one year and three months later with Full Stack Web Developer at DCI
            Digital Career Institute GmbH (Germany).orientation course
          </p>
        </div>
      </div>
      <ProjectsContainer />
    </section>
  );
};

export default ProjectsTheProjects;
