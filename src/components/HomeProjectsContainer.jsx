// src/components/HomeProjectsContainer.jsx

import DeoButton from './DeoButton';
import HomeSlideInfo from './HomeSlideInfo';
import './HomeProjectsContainer.scss';

const HomeProjectsContainer = () => {
  return (
    <section className='homeprojectscontainer'>
      <DeoButton />
      <section className='homeprojectscontainer-inner'>
        <HomeSlideInfo />
      </section>
    </section>
  );
};

export default HomeProjectsContainer;
