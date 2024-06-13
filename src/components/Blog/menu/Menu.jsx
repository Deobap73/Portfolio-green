// Portfolio-green/src/components/Blog/Menu/Menu.jsx

import { MenuCategories } from '../menuCategories/MenuCategories';
import { MenuPosts } from '../menuPosts/MenuPosts';
import './Menu.scss';

export const Menu = () => {
  return (
    <>
      <div className='menuContainer'>
        <h2 className='menuSubtitle'>{"What's hot"}</h2>
        <h1 className='menuTitle'>Most Popular</h1>
        <MenuPosts withImage={false} />
        <h2 className='menusubtitle'>Discover by topic</h2>
        <h1 className='menuTitle'>Categories</h1>
        <MenuCategories />
        <h2 className='menuSubtitle'>Chosen by the editor</h2>
        <h1 className='menuTitle'>Editors Pick</h1>
        <MenuPosts withImage={true} />
      </div>
    </>
  );
};
