// src/components/Blog/authLinks/AuthLinks.jsx

import './AuthLinks.scss';
import { useContext } from 'react';
import { MyContext } from '../../../contexts/context';

export const AuthLinks = () => {
  const { status, setStatus } = useContext(MyContext);

  return (
    <>
      {status === 'notauthenticated' ? (
        <a href='/login'>Login</a>
      ) : (
        <>
          <a href='/write'>Write</a>
          <b className='b'>|</b>
          <span onClick={() => setStatus('notauthenticated')}>Logout</span>
        </>
      )}
    </>
  );
};
