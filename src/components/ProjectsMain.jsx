// src/components/ProjectsMain.jsx
import NavigationBar from './NavigationBar';
import './ProjectsMain.scss';

const ProjectsMain = () => {
  return (
    <section className='projectsmain'>
      <div className='projectssubmainpresentation'>
        <div className='projectssentence1'>
          <p className='enter-the-code-based-container'>
            <span>{`Enter the code-based universe of my projects page, where each site and application is not just the culmination of lines and functions, but a living testament to my `}</span>
            <span className='web-development'>web development.</span>
          </p>
        </div>
        <NavigationBar context='projects' />
      </div>
    </section>
  );
};

export default ProjectsMain;
