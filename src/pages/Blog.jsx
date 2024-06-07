// src/pages/Blog.jsx
import BlogMain from '../components/Blog/BlogMain';
import Footer from '../components/Footer/Footer';
import './Blog.scss';

const Blog = () => {
  return (
    <div className='blog'>
      <section className='blogpresentationname'>
        <h1 className='my-blog'>My Blog</h1>
      </section>
      <BlogMain />
      <Footer />
    </div>
  );
};

export default Blog;
