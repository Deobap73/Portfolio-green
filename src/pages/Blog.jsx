// src/pages/Blog.jsx

import BlogPage from '../components/Blog/BlogPage';
import BlogMain from '../components/Blog/presentation/BlogMain';
import Footer from '../components/Footer/Footer';
import './Blog.scss';

const Blog = () => {
  return (
    <div className='blog'>
      <section className='blogpresentationname'>
        <h1 className='my-blog'>My Blog</h1>
      </section>
      <BlogMain />
      <BlogPage />
      <Footer />
    </div>
  );
};

export default Blog;
