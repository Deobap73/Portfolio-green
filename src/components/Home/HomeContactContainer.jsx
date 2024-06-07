// src/components/HomeContactContainer.jsx

import HomeEmailContainer from './HomeEmailContainer';
import './HomeContactContainer.scss';
import DeoButton from '../Buttons/DeoButton';

const HomeContactContainer = () => {
  return (
    <section className='homecontactcontainer'>
      <DeoButton />
      <section className='homecontact'>
        <div className='homecontactcontanerpresentatio'>
          <div className='verticalline'>
            <hr className='line' />
          </div>
          <div className='contactslogan'>
            <h2 className='contact-me'>Contact Me</h2>

            <p className='lets-talk-share'>
              Let´s talk, share your ideas or meet me
            </p>
          </div>
        </div>
        <HomeEmailContainer />
      </section>
    </section>
  );
};

export default HomeContactContainer;
