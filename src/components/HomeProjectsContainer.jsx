import { useCallback } from 'react';
import DeoButton from './DeoButton';
import VocationCard from './VocationCard';
import './HomeProjectsContainer.scss';

const HomeProjectsContainer = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const onGroupSectionClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <section className='homeprojectscontainer'>
      <DeoButton
        dimensionCode='/deo-icongold-11@2x.png'
        propPosition='absolute'
        propTop='34.375rem'
        propLeft='1rem'
        propWidth='1.875rem'
        propHeight='1.875rem'
        onDeoIconGold12Click={onDeoIconGold1Click}
      />
      <section
        className='homeprojectscontainer-inner'
        data-scroll-to='groupSection'
        onClick={onGroupSectionClick}>
        <VocationCard />
      </section>
    </section>
  );
};

export default HomeProjectsContainer;
