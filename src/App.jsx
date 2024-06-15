// src/App.jsx

import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import { AuthLinks } from './components/Blog/authLinks/AuthLinks';
import { CategoryPage } from './blogApp/categoryPage/CategoryPage';
import { WritePage } from './blogApp/write/WritePage';
import SinglePage from './blogApp/posts/[slug]/SinglePage';

function App() {
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<AuthLinks />} />
        <Route path='/blog/category' element={<CategoryPage />} />
        <Route path='/blog/singlePage' element={<SinglePage />} />{' '}
        <Route path='/blog/writePage' element={<WritePage />} />{' '}
        {/* Ajustar o nome do componente aqui */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
