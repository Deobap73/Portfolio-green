// Portfolio-green\src\components\Blog\comments\Comments.jsx
import { Link } from 'react-router-dom';
import images from '../../../assets/imageIndex';
import './Comments.scss';

export const Comments = () => {
  const status = 'authenticated';
  return (
    <>
      <div className='commentsContainer'>
        <h1 className='commentsTitle'>Comments</h1>
        {status === 'authenticated' ? (
          <div className='commentsWrite'>
            <textarea
              placeholder='write a comment...'
              className='commentsInput'
            />
            <button className='commentsButton'>Send</button>
          </div>
        ) : (
          <Link href='login'> Login To write a comment</Link>
        )}
        <div className='commentsComments'>
          <div className='commentsComment'>
            <div className='commentsUser'>
              <img src={images.Greece} alt='' className='commentsImage' />
              <div className='commentsUserInfo'>
                <span className='commentsUsername'>Deolindo Baptista</span>
                <span className='commentsUserDate'>06.06.2024</span>
              </div>
            </div>
            <p className='commentsDescription'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              laboriosam est debitis dicta voluptate ex harum eos inventore?
              Aliquid fugiat et aspernatur perferendis corrupti ipsa tempore
              dolores in rerum similique.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
