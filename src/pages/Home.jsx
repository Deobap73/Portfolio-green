// src/pages/Home.jsx

import HomeMain from '../components/HomeMain';
import HomeTheVocation from '../components/HomeTheVocation';
import HomeEducationContainer from '../components/HomeEducationContainer';
import HomeProjectsContainer from '../components/HomeProjectsContainer';
import HomeContactContainer from '../components/HomeContactContainer';
import Footer from '../components/Footer';
import './Home.scss';

const Home = () => {
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
