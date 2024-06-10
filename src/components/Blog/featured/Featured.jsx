//Portfolio-green/src/components/Blog/Featured/Featured.jsx

import images from '../../../assets/imageIndex';
import './Featured.scss';

export default function Featured() {
  return (
    <>
      <div className='featuredContainer'>
        <h1 className='featuredTitle'>
          <span>Hey, lama dev here!</span> Discover my stories and creative
          ideas.
        </h1>
        <div className='featuredPost'>
          <div className='featuredImgContainer'>
            <img src={images.Greece} alt='image' className='featuredImage' />
          </div>
          <div className='featuredTextContainer'>
            <h1 className='featuredPostTitle'>
              Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
            </h1>
            <p className='featuredPostDesc'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <button className='featuredButton'>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}
