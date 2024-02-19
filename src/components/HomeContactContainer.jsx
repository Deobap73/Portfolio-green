import HomeEmailContainer from './HomeEmailContainer';
import './HomeContactContainer.scss';

const HomeContactContainer = () => {
  return (
    <section className='homecontactcontainer'>
      <div className='homecontactcontanerpresentatio'>
        <div className='verticalline2'>
          <img className='verticalline-inner' alt='' src='/line-1.svg' />
        </div>
        <div className='contactslogan'>
          <div className='contactslogantitle'>
            <h2 className='contact-me'>Contact Me</h2>
          </div>
          <p className='lets-talk-share'>
            Let's talk, share your ideas or meet me
          </p>
        </div>
      </div>
      <HomeEmailContainer />
    </section>
  );
};

export default HomeContactContainer;
