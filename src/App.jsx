// src/App.jsx

import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

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
      </Routes>
    </BrowserRouter>
  );
}
export default App;
