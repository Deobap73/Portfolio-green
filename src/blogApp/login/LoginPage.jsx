// Portfolio-green\src\blogApp\login\loginPage.jsx

/* import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router'; */
import './LoginPage.scss';

const LoginPage = () => {
  /*  const { status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div className='loginPageLoading'>Loading...</div>;
  }

  if (status === 'authenticated') {
    router.push('/');
  } */

  return (
    <div className='loginPageContainer'>
      <div className='loginPageWrapper'>
        <div className='loginPageSocialButton' onClick={() => signIn('google')}>
          Sign in with Google
        </div>
        <div className='loginPageSocialButton' onClick={() => signIn('github')}>
          Sign in with Github
        </div>
        <div
          className='loginPageSocialButton'
          onClick={() => signIn('facebook')}>
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
