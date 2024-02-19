// src/pages/Home.jsx

import { useCallback } from 'react';
import HomeMain from '../components/HomeMain';
import HomeTheVocation from '../components/HomeTheVocation';
import HomeEducationContainer from '../components/HomeEducationContainer';
import HomeProjectsContainer from '../components/HomeProjectsContainer';
import HomeContactContainer from '../components/HomeContactContainer';
import Footer from '../components/Footer';
import './Home.scss';

const Home = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='home'>
      <header
        className='homepresentationname'
        data-scroll-to='homePresentationName'>
        <h1 className='deolindo-baptista'>Deolindo Baptista</h1>
      </header>
      <HomeMain />
      <HomeTheVocation />
      <HomeEducationContainer />
      <HomeProjectsContainer />
      <HomeContactContainer />
      <Footer />
    </div>
  );
};

export default Home;
