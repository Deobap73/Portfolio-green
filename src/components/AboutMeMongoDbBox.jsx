import './AboutMeMongoDbBox.scss';

const AboutMeMongoDbBox = () => {
  return (
    <div className='aboutmemongodbbox'>
      <div className='languagesymbol'>
        <img className='languagesymbol-child' alt='' src='/frame-28@2x.png' />
      </div>
      <div className='planning1'>
        <h2 className='mongodb'>MongoDB</h2>
        <p className='mongodb-the-data'>
          MongoDB, the data explorer, lets developers chart uncharted
          territories of information, forging new paths to insights and
          discovery.
        </p>
      </div>
      <div className='timeline'>
        <h3 className='nov'>06 Nov</h3>
        <div className='timeline-child' />
        <h3 className='nov'>2023</h3>
      </div>
      <img
        className='aboutmemongodbbox-child'
        alt='Example of a few lines of code in MongoDB'
        src='/rectangle-2@2x.png'
      />
    </div>
  );
};

export default AboutMeMongoDbBox;
