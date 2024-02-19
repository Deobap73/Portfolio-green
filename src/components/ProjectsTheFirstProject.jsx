import ProjectsButton from './ProjectsButton';
import './ProjectsTheFirstProject.scss';

const ProjectsTheFirstProject = () => {
  return (
    <div className='projectsthefirstproject'>
      <img
        className='projectsthefirstproject-child'
        alt='Image from a website named DBpoxy'
        src='/frame-43@2x.png'
      />
      <img
        className='projectsthefirstproject-item'
        alt='Image from a website named DBpoxy'
        src='/frame-42@2x.png'
      />
      <img
        className='projectsthefirstproject-inner'
        alt='Image from a website named DBpoxy'
        src='/frame-41@2x.png'
      />
      <div className='projectsthefirstprojectdescrip'>
        <h2 className='the-project-dbpoxy'>The project DBPoxy</h2>
        <p className='this-was-the-container'>
          <span className='this-was-the'>{`This was the first project was created to demonstrate the knowledge gained in the orientation course. `}</span>
          <span className='this-was-the'>&nbsp;</span>
          <span className='this-was-the'>
            A basic project for a simple website for a business called "dbpoxy"
            using HTML (Hypertext Markup Language) which is the standard markup
            language for creating and designing web pages and CSS (Cascading
            Style Sheets) the style sheet language used for describing the
            presentation of a document written in HTML.
          </span>
        </p>
        <ProjectsButton />
      </div>
      <div className='frame-div' />
    </div>
  );
};

export default ProjectsTheFirstProject;
