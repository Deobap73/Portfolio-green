// src/components/AboutMeWelcomeContainer.jsx

import './AboutMeWelcomeContainer.scss';

const AboutMeWelcomeContainer = () => {
  return (
    <div className='aboutmewelcomecontainer'>
      <div className='aboutmewelcomecontainerdescrip'>
        <div className='aboutmewelcomecontainerdescrip1'>
          <h2 className='hi-there-welcome'>Hi There! Welcome</h2>
          <h3 className='junior-full-stack'>Junior Full stack Web Developer</h3>
        </div>
        <p className='a-technology-enthusiast-container'>
          <span>
            A technology enthusiast and Junior Full Stack Web Developer with a
            thirst for continuous learning. I was born in Portugal and
            currently, I`m studying Web Developer at DCI Digital Career
            Institute, honing my skills in programming languages and web
            development
          </span>
          <span className='span'>.</span>
        </p>
        <div className='aboutmewelcomecontainercontact'>
          <div className='aboutmewelcomecontainerontacts'>
            <h3 className='call-to-me'>Call to Me :</h3>
            <h3 className='call-to-me'>Email Me :</h3>
            <h3 className='call-to-me'>{`Find Me in World:  `}</h3>
            <h3 className='call-to-me'>Languages :</h3>
          </div>
          <div className='aboutmewelcomecontainerontacts'>
            <p className='p1'>+49 176 34644129</p>
            <p className='portuguese-english'>{`contact@deolindobaptista.com`}</p>
            <p className='portuguese-english'> Pocking, Germany</p>
            <p className='portuguese-english'>
              Portuguese | English | Spanish | German | French
            </p>
          </div>
        </div>
      </div>
      <a href='/Deolindo Baptista.pdf' download>
        <button className='button1'>
          <b className='curriculum'>Curriculum</b>
        </button>
      </a>
    </div>
  );
};

export default AboutMeWelcomeContainer;
