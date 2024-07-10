// Portfolio-green\src\components\About\AboutMeWelcomeContainer.jsx

import './AboutMeWelcomeContainer.scss';

const aboutMeWelcomeContainer = () => {
  return (
    <div className='aboutMeWelcomeContainer'>
      <div className='aboutMeWelcomeContainerDescription'>
        <div className='aboutMeWelcomeContainerDescription1'>
          <h2 className='hi-there-welcome'>Hi There! Welcome</h2>
          <h3 className='junior-full-stack'>Junior Full stack Web Developer</h3>
        </div>
        <p className='a-technology-enthusiast-container'>
          A technology enthusiast and Junior Full Stack Web Developer with a
          thirst for continuous learning. I was born in Portugal and currently,
          I`m studying Web Developer at DCI Digital Career Institute, honing my
          skills in programming languages and web development.
        </p>
        <div className='aboutMeWelcomeContainerContact'>
          <div className='aboutMeWelcomeContainerContacts'>
            <h3 className='call-to-me'>Call to Me :</h3>
            <p className='p1'>+49 176 34644129</p>
          </div>
          <div className='aboutMeWelcomeContainerContacts'>
            <h3 className='call-to-me'>Email Me :</h3>
            <p className='portuguese-english'>{`contact@deolindobaptista.com`}</p>
          </div>
          <div className='aboutMeWelcomeContainerContacts'>
            <h3 className='call-to-me'>{`Find Me in World:  `}</h3>
            <p className='portuguese-english'> Pocking, Germany</p>
          </div>
          <div className='aboutMeWelcomeContainerContacts'>
            <h3 className='call-to-me'>Languages :</h3>
            <p className='portuguese-english'>
              Portuguese | English | Spanish | German | French
            </p>
          </div>
          <div className='aboutMeWelcomeContainerContacts'></div>
        </div>
      </div>
      <div className='curriculumButton'>
        <a href='/Deolindo Baptista CV Resume.pdf' download>
          <button className='button1'>
            <b className='curriculum'>Curriculum</b>
          </button>
        </a>
        <a href='/Zertifikat-vorl- Deolindo Alberto.pdf' download>
          <button className='button1'>
            <b className='curriculum'>Certificate</b>
          </button>
        </a>
      </div>
    </div>
  );
};

export default aboutMeWelcomeContainer;
