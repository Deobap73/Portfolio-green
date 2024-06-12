// Portfolio-green\src\components\Blog\menuPosts\MenuPosts.jsx

import { Link } from 'react-router-dom';
import images from '../../../assets/imageIndex';
import './MenuPosts.scss';

export const MenuPosts = () => {
  return (
    <div className='menuPostsItems'>
      <Link href='/' className='menuPostsItem'>
        <div className='menuPostsImageContainer'>
          <img src={images.Greece} alt='' className='menuPostsImage' />
        </div>

        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsTravel'>Travel</span>
          <h3 className='menuPostsPostTitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='menuPostsDetail'>
            <span className='menuPostsUserName'>John Doe</span>
            <span className='menuPostsDate'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className='menuPostsItem'>
        <div className='menuPostsImageContainer'>
          <img src={images.Greece} alt='' className='menuPostsImage' />
        </div>

        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsTravel'>Travel</span>
          <h3 className='menuPostsPostTitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='menuPostsDetail'>
            <span className='menuPostsUserName'>John Doe</span>
            <span className='menuPostsDate'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className='menuPostsItem'>
        <div className='menuPostsImageContainer'>
          <img src={images.Greece} alt='' className='menuPostsImage' />
        </div>

        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsTravel'>Travel</span>
          <h3 className='menuPostsPostTitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='menuPostsDetail'>
            <span className='menuPostsUserName'>John Doe</span>
            <span className='menuPostsDate'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href='/' className='menuPostsItem'>
        <div className='menuPostsImageContainer'>
          <img src={images.Greece} alt='' className='menuPostsImage' />
        </div>

        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsTravel'>Travel</span>
          <h3 className='menuPostsPostTitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className='menuPostsDetail'>
            <span className='menuPostsUserName'>John Doe</span>
            <span className='menuPostsDate'> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
