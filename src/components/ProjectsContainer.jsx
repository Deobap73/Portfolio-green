import { useCallback } from 'react';
import DeoButton from './DeoButton';
import ProjectsAllProjects from './ProjectsAllProjects';
import './ProjectsContainer.scss';

const ProjectsContainer = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='projectscontainer'>
      <div className='projectssideicon'>
        <div className='frame'>
          <DeoButton
            dimensionCode='/deo-icongold-13@2x.png'
            propPosition='unset'
            propTop='unset'
            propLeft='unset'
            propWidth='1.875rem'
            propHeight='1.875rem'
            onDeoIconGold12Click={onDeoIconGold1Click}
          />
          <DeoButton
            dimensionCode='/deo-icongold-13@2x.png'
            propPosition='unset'
            propTop='unset'
            propLeft='unset'
            propWidth='1.875rem'
            propHeight='1.875rem'
          />
        </div>
      </div>
      <ProjectsAllProjects />
    </div>
  );
};

export default ProjectsContainer;
