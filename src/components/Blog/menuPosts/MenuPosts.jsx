// Portfolio-green\src\components\Blog\menuPosts\MenuPosts.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import images from '../../../assets/imageIndex';
import './MenuPosts.scss';

export const MenuPosts = ({ withImage }) => {
  return (
    <div className='menuPostsItems'>
      <Link href='/' className='menuPostsItem'>
        {withImage && (
          <div className='menuPostsImageContainer'>
            <img src={images.Greece} alt='' className='menuPostsImage' />
          </div>
        )}
        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsProgramming'>
            Programming and Software
          </span>
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
        {withImage && (
          <div className='menuPostsImageContainer'>
            <img src={images.Greece} alt='' className='menuPostsImage' />
          </div>
        )}
        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsDesign'>Web Design</span>
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
        {withImage && (
          <div className='menuPostsImageContainer'>
            <img src={images.Greece} alt='' className='menuPostsImage' />
          </div>
        )}
        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsTechnology'>
            Technology and inovation
          </span>
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
        {withImage && (
          <div className='menuPostsImageContainer'>
            <img src={images.Greece} alt='' className='menuPostsImage' />
          </div>
        )}
        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsEmerging'>
            Emerging Technologies
          </span>
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
        {withImage && (
          <div className='menuPostsImageContainer'>
            <img src={images.Greece} alt='' className='menuPostsImage' />
          </div>
        )}
        <div className='menuPostsTextContainer'>
          <span className='menuPostsCategory menuPostsPersonalDevelopment'>
            Personal Development
          </span>
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

// Adding type validation with PropTypes
MenuPosts.propTypes = {
  withImage: PropTypes.bool.isRequired,
};
