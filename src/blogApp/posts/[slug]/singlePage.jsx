// Portfolio-green\src\app\posts\[slug]\singlePage.jsx

import { Menu } from '../../../components/Blog/menu/Menu';
import images from '../../../assets/imageIndex';
import './singlePage.scss';
import { Comments } from '../../../components/Blog/comments/Comments';

export const singlePage = () => {
  return (
    <div className='singlePageContainer'>
      <div className='singlePageInfoContainer'>
        <div className='singlePageTextContainer'>
          <h1 className='singlePageTitle'>{data?.title}</h1>
          <div className='singlePageUser'>
            {data?.user?.image && (
              <div className='singlePageUserImageContainer'>
                <img
                  src={data.user.image}
                  alt=''
                  className='singlePageAvatar'
                />
              </div>
            )}
            <div className='singlePageUserTextContainer'>
              <span className='singlePageUsername'>{data?.user.name}</span>
              <span className='singlePageDate'>01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className='singlePageImageContainer'>
            <img src={data.img} alt='' className='singlePageImage' />
          </div>
        )}
      </div>
      <div className='singlePageContent'>
        <div className='singlePagePost'>
          <div
            className='singlePageDescription'
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className='singlePageComment'>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};
