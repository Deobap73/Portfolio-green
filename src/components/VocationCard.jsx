import './VocationCard.scss';

const VocationCard = () => {
  return (
    <div className='projecttitle-parent'>
      <div className='projecttitle'>
        <img className='projecttitle-child' alt='' src='/line-1.svg' />
        <h3 className='html'>The vocation</h3>
        <h2 className='project-one'>Project One</h2>
      </div>
      <div className='projectimage' />
      <div className='horizontallineguides'>
        <img className='horizontallineguides-child' alt='' src='/line-5.svg' />
        <img className='horizontallineguides-child' alt='' src='/line-4.svg' />
        <img className='horizontallineguides-child' alt='' src='/line-4.svg' />
        <img className='horizontallineguides-child' alt='' src='/line-4.svg' />
        <img className='horizontallineguides-child' alt='' src='/line-4.svg' />
      </div>
      <div className='projectdescription'>
        <h2 className='first-project-as'>
          First Project as a web developer student
        </h2>
        <div className='projecttools'>
          <img className='vector-icon1' alt='' src='/vector3.svg' />
          <h2 className='html'>HTML</h2>
        </div>
        <div className='projecttools1'>
          <img className='vector-icon1' alt='' src='/vector4.svg' />
          <h2 className='html'>CSS</h2>
        </div>
        <img className='projecttitle-child' alt='' src='/line-1.svg' />
      </div>
    </div>
  );
};

export default VocationCard;
