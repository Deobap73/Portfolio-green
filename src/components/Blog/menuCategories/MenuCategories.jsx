// Portfolio-green\src\components\Blog\menuCategories\MenuCategories.jsx

import { Link } from 'react-router-dom';
import './MenuCategories.scss';

export const MenuCategories = () => {
  return (
    <div className='menuCategoriesCategoryList'>
      <Link
        href='/blog?cat=style'
        className='menuCategoriesCategoryItem menuCategoriesProgramming'>
        Programming
      </Link>
      <Link
        href='/blog'
        className='menuCategoriesCategoryItem menuCategoriesWebDesign'>
        Web Design
      </Link>
      <Link
        href='/blog'
        className='menuCategoriesCategoryItem menuCategoriesTechnology'>
        Technology
      </Link>
      <Link
        href='/blog'
        className='menuCategoriesCategoryItem menuCategoriesEmerging'>
        Emerging
      </Link>
      <Link
        href='/blog'
        className='menuCategoriesCategoryItem menuCategoriesPersonalDevelopment'>
        Personal Development
      </Link>
    </div>
  );
};
