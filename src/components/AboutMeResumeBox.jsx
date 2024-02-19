import LineOfTime from './LineOfTime';
import TimeLine from './TimeLine';
import LanguageBoxLeft from './LanguageBoxLeft';
import LanguageBoxRight from './LanguageBoxRight';
import EducationBoxRight from './EducationBoxRight';
import JobBoxRight from './JobBoxRight';
import JobBoxLeft from './JobBoxLeft';
import './AboutMeResumeBox.scss';

const AboutMeResumeBox = () => {
  return (
    <section className='aboutmeresumebox'>
      <LineOfTime />
      <TimeLine />
      <LanguageBoxLeft french='French' a2Level='A2 level)' />
      <LanguageBoxRight german='German' a2Level='A2 level' />
      <LanguageBoxLeft
        languageBoxLeftTop='81rem'
        languageBoxLeftLeft='6.406rem'
        frameDivWidth='22.75rem'
        french='Spanish'
        a2Level='B2 level'
        a2LevelMargin='0'
        a2LevelFontWeight='700'
      />
      <LanguageBoxRight
        languageBoxRightTop='78rem'
        german='English'
        a2Level='C1 level'
      />
      <LanguageBoxLeft
        languageBoxLeftTop='75rem'
        languageBoxLeftLeft='6.344rem'
        frameDivWidth='22.75rem'
        french='Portuguese'
        a2Level='Native'
        a2LevelMargin='unset'
        a2LevelFontWeight='bold'
      />
      <b className='language'>Language</b>
      <EducationBoxRight />
      <h2 className='education'>Education</h2>
      <div className='jobboxleft1'>
        <div className='management-advisor-araujo-mo-parent'>
          <h2 className='management-advisor-'>{`Management Advisor  - Araujo Mota & Pereira, Lda (Portugal)`}</h2>
          <h3 className='june-2010-'>June 2010 - December 2018</h3>
          <ul className='led-company-acquisition-and-me-wrapper'>
            <b className='led-company-acquisition-container'>
              <ul className='led-company-acquisition-and-me'>
                <li className='led-company-acquisition'>
                  {' '}
                  Led company acquisition and merger negotiations and change
                  management initiatives to ensure smooth transitions during
                  process
                </li>
              </ul>
              <p className='blank-line12'>&nbsp;</p>
              <ul className='led-company-acquisition-and-me'>
                <li className='led-company-acquisition'>
                  Led the negotiation and creation of commercial strategy
                  between the company and associated business companies
                </li>
              </ul>
              <p className='blank-line12'>&nbsp;</p>
              <ul className='led-company-acquisition-and-me'>
                <li>
                  {' '}
                  Led the distribution of tasks in order to be more efficient
                  for employees and the end client
                </li>
              </ul>
            </b>
          </ul>
        </div>
        <div className='jobboxleft-item' />
      </div>
      <JobBoxRight />
      <JobBoxLeft />
      <h2 className='work-experience'>Work Experience</h2>
    </section>
  );
};

export default AboutMeResumeBox;
