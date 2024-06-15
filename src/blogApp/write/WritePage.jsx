// Portfolio-green\src\blogApp\write\writePage.jsx
'use client';

import { Helmet } from 'react-helmet';
import images from '../../assets/imageIndex';
import BlogMain from '../../components/Blog/presentation/BlogMain';
import './WritePage.scss';
import ReactQuill from 'react-quill';
import { useState } from 'react';

export const WritePage = () => {
  /* const { status } = useSession();
  const router = useRouter(); */

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [catSlug, setCatSlug] = useState('');

  return (
    <div className='writePageContainer'>
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
      <BlogMain />
      <div className='writePageWriteContainer'>
        <input
          type='text'
          placeholder='Title'
          className='writePageInput'
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className='writePageSelect'
          onChange={(e) => setCatSlug(e.target.value)}>
          <option value='programming'>programming</option>
          <option value='webDesign'>webDesign</option>
          <option value='technology'>technology</option>
          <option value='emerging'>emerging</option>
          <option value='personalDevelopment'>personalDevelopment</option>
        </select>
        <div className='writePageEditor'>
          <button className='writePageButton' onClick={() => setOpen(!open)}>
            <img src={images.plus} alt='' width={16} height={16} />
          </button>
          {open && (
            <div className='writePageAdd'>
              <input
                type='file'
                id='image'
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
              <button className='writePageAddButton'>
                <label htmlFor='image'>
                  <img src={images.image} alt='' width={16} height={16} />
                </label>
              </button>
              <button className='writePageAddButton'>
                <img src={images.external} alt='' width={16} height={16} />
              </button>
              <button className='writePageAddButton'>
                <img src={images.video} alt='' width={16} height={16} />
              </button>
            </div>
          )}
          <ReactQuill
            className='writePageTextArea'
            theme='bubble'
            value={value}
            onChange={setValue}
            placeholder='Tell your story...'
          />
        </div>
        <button
          className='writePagePublish'
          //onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </div>
  );
};
