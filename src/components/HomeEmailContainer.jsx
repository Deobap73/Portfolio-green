import './HomeEmailContainer.scss';

const HomeEmailContainer = () => {
  return (
    <section className='homeemailcontainer'>
      <form className='emailcontact'>
        <div className='firstname'>
          <input className='first-name' placeholder='First Name*' type='text' />
          <img className='firstname-child' alt='' src='/line-8.svg' />
        </div>
        <div className='firstname'>
          <input className='last-name' placeholder='Last Name*' type='text' />
          <img className='firstname-child' alt='' src='/line-8.svg' />
        </div>
        <div className='firstname'>
          <input
            className='your-message-here'
            placeholder='Contact'
            type='tel'
          />
          <img className='firstname-child' alt='' src='/line-8.svg' />
        </div>
        <div className='email'>
          <input className='email1' placeholder='Email*' type='email' />
          <img className='firstname-child' alt='' src='/line-8.svg' />
        </div>
        <div className='message'>
          <input
            className='your-message-here'
            placeholder='Your Message here'
            type='text'
          />
          <img className='message-child' alt='' src='/line-10.svg' />
        </div>
      </form>
      <div className='button'>
        <h2 className='lets-get-in'>Let's get in touch</h2>
      </div>
    </section>
  );
};

export default HomeEmailContainer;
