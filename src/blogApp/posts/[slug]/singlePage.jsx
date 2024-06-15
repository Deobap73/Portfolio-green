// Portfolio-green\src\app\posts\[slug]\singlePage.jsx

import { Helmet } from 'react-helmet';
import { Menu } from '../../../components/Blog/menu/Menu';
import images from '../../../assets/imageIndex';
import { Comments } from '../../../components/Blog/comments/Comments';
import BlogMain from '../../../components/Blog/presentation/BlogMain';
import Footer from '../../../components/Footer/Footer';
import './SinglePage.scss';

const SinglePage = () => {
  return (
    <div className='singlePageContainer'>
      <Helmet>
        <title>Blog by category - Deolindo Baptista</title>
        <meta
          name='description'
          content='Read the latest article on web development by Deolindo Baptista. Stay updated with the newest trends, tips, and tutorials in coding and programming.'
        />
        <meta
          name='keywords'
          content='Deolindo Baptista, portfolio, web development, junior web developer, web developer portfolio, web development projects, web development skills, blog, web development blog, html, css, scss, JavaScript, nodejs, figma, photoshop, git, github, mern, react, mongodb, coding, programming'
        />
        <meta
          property='og:title'
          content='Blog by category - Deolindo Baptista'
        />
        <meta
          property='og:description'
          content='Read the latest article on web development by Deolindo Baptista. Stay updated with the newest trends, tips, and tutorials in coding and programming.'
        />
        <meta
          property='og:url'
          content='https://deolindobaptista.com/blog/categorye'
        />
        <meta property='og:type' content='website' />
      </Helmet>
      {/* <section className='categoryPageBlogPresentationName'>
          <h1 className='categoryPageTitle'>Programming And Software</h1>
        </section> */}
      <BlogMain />
      <div className='singlePageInfoContainer'>
        <div className='singlePageTextContainer'>
          <h1 className='singlePageTitle'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className='singlePageUser'>
            <div className='singlePageUserImageContainer'>
              <img src={images.user} alt='' className='singlePageAvatar' />
            </div>
            <div className='singlePageUserTextContainer'>
              <span className='singlePageUsername'>Berto</span>
              <span className='singlePageDate'>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className='singlePageImageContainer'>
          <img src={images.Greece} alt='' className='singlePageAvatar' />
        </div>
      </div>
      <div className='singlePageContent'>
        <div className='singlePagePost'>
          <div className='singlePageDescription' />
          <div className='singlePageComment'>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default SinglePage;
