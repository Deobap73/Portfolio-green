// Portfolio-green\src\blogApp\categoryPage\CategoryPage.jsx

import { Helmet } from 'react-helmet';
import { CardList } from '../../components/Blog/cardList/CardList';
import { Menu } from '../../components/Blog/menu/Menu';
import './CategoryPage.scss';
import BlogMain from '../../components/Blog/presentation/BlogMain';
import Footer from '../../components/Footer/Footer';

export const CategoryPage = () => {
  return (
    <>
      <div className='categoryPageBlog'>
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
        <section className='categoryPageBlogPresentationName'>
          <h1 className='categoryPageTitle'>Programming And Software</h1>
        </section>
        <BlogMain />
        <div className='categoryPageContainer'>
          <CardList />
          <Menu />
        </div>
        <Footer />
      </div>
    </>
  );
};
