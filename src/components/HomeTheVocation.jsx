import { useCallback } from 'react';
import DeoButton from './DeoButton';
import PlanningCard from './PlanningCard';
import './HomeTheVocation.scss';

const HomeTheVocation = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <section className='homethevocation'>
      <DeoButton
        dimensionCode='/deo-icongold-1@2x.png'
        onDeoIconGold12Click={onDeoIconGold1Click}
      />
      <section className='homevocationcontainer'>
        <section className='homevocationcontainerpresentat'>
          <div className='verticalline'>
            <img className='verticalline-child' alt='' src='/line-1.svg' />
          </div>
          <section className='homevocationslogan'>
            <section className='homovocationslogantitle'>
              <h2 className='the-vocation'>The vocation</h2>
            </section>
            <p className='where-every-line'>
              Where every line of code comes to life and shapes the online
              experience.
            </p>
          </section>
        </section>
        <section className='homevocationpresentations'>
          <PlanningCard
            designId='/vector.svg'
            processType='Planning'
            designDescriptionText='In the world of design, meticulous planning is the compass that guides creativity towards its true destination'
          />
          <PlanningCard
            designId='/vector1.svg'
            processType='Design'
            designDescriptionText="Design is not just about aesthetics; it's the art of crafting experiences that resonate with the soul."
            propPadding='0px 13px'
            propWidth='1.563rem'
          />
          <PlanningCard
            designId='/vector2.svg'
            processType='Execution'
            designDescriptionText='The true magic of a vision lies in the execution, where ideas take flight and become reality.'
            propPadding='0px 13px'
            propWidth='1.938rem'
          />
        </section>
      </section>
    </section>
  );
};

export default HomeTheVocation;
