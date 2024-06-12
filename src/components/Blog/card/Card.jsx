// Portfolio-green\src\components\Blog\card\Card.jsx

import { Link } from 'react-router-dom';
import images from '../../../assets/imageIndex';
import './Card.scss';

export const Card = () => {
  return (
    <div className='cardContainer'>
      <div className='cardImageContainer'>
        <img src={images.Greece} alt='' className='cardImage' />
      </div>

      <div className='cardTextContainer'>
        <div className='cardDetail'>
          <span className='cardDate'>06.06.2024 - </span>
          <span className='cardCategory'>CULTURE</span>
        </div>
        <Link href='/' className='cardLink'>
          <h1>Este é o meu titulo</h1>
        </Link>
        <p className='cardDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          mollitia tenetur maxime, repellendus repellat officia quas inventore
          porro laborum nesciunt debitis facere numquam necessitatibus
          reiciendis excepturi obcaecati sit, id similique.
        </p>
        {/*  <div
          className='cardDesc'
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 6) }}
        /> */}
        <button href='/' className='cardButton'>
          Read More
        </button>
      </div>
    </div>
  );
};
