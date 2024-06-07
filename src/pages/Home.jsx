// src/pages/Home.jsx

import HomeMain from '../components/Home/HomeMain';
import HomeTheVocation from '../components/Home/HomeTheVocation';
import HomeEducationContainer from '../components/Home/HomeEducationContainer';
import HomeProjectsContainer from '../components/Home/HomeProjectsContainer';
import HomeContactContainer from '../components/Home/HomeContactContainer';
import Footer from '../components/Footer/Footer';
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
