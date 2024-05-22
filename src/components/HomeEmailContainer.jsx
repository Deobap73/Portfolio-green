// src/components/HomeEmailContainer.jsx

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './HomeEmailContainer.scss';

const HomeEmailContainer = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false); // Adicione esta linha

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9atn6to',
        'template_7cczwsr',
        form.current,
        'IdfaL7par9F3B65vL'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setFirstName('');
          setLastName('');
          setContact('');
          setEmail('');
          setMessage('');
          setIsEmailSent(true);
          setTimeout(() => {
            setIsEmailSent(false);
          }, 3000); // Define o tempo para mostrar a mensagem (em milissegundos)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className='emailcontainer' ref={form} onSubmit={sendEmail}>
      <div className='emailcontact'>
        <input
          className='contactInformation'
          type='text'
          name='firstname'
          placeholder='First Name*'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onFocus={() => setFirstName('')}
          required
        />

        <input
          className='contactInformation'
          type='text'
          name='lastname'
          placeholder='Last name*'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onFocus={() => setLastName('')}
          required
        />

        <input
          className='contactInformation'
          type='text'
          name='contact'
          placeholder='Contact'
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          onFocus={() => setContact('')}
        />

        <input
          className='contactInformation'
          type='email'
          name='email'
          placeholder='Email*'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmail('')}
          required
        />
      </div>

      <textarea
        className='your-message-here'
        name='message'
        placeholder='Your message here...*'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onFocus={() => setMessage('')}
        required
      />

      <input
        className={`button ${isEmailSent ? 'clicked' : ''}`}
        type='submit'
        value={isEmailSent ? 'Email Sent!' : "Let's get in touch"}
      />

      {isEmailSent && (
        <div className='popup'>
          <p>Email sent successfully!</p>
        </div>
      )}
    </form>
  );
};

export default HomeEmailContainer;
