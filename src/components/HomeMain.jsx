// src/components/HomeMain.jsx

import NavigationBar from './NavigationBar';
import './HomeMain.scss';

const HomeMain = () => {
  return (
    <section className='homemain'>
      <section className='homesubmain'>
        <section className='mainslogan'>
          <h2 className='explore-the-magic-container'>
            <span>{`Explore the magic of the `}</span>
            <span className='web'>web</span>
            <span>{` through the eyes of a passionate `}</span>
            <span className='web'>developer</span>
          </h2>
        </section>
        <NavigationBar context='home' />
      </section>
    </section>
  );
};

export default HomeMain;
