// Portfolio-green\src\components\Blog\menuCategories\MenuCategories.jsx

import { Link } from 'react-router-dom';
import './MenuCategories.scss';

export const MenuCategories = () => {
  return (
    <div className='menuCategoriesCategoryList'>
      <Link
        href='/blog?cat=style'
        className='menuCategoriesCategoryItem menuCategoriesProgramming'>
        Programming and Software
      </Link>
      <Link
        href='/blog'
        className='menuCategoriesCategoryItem menuCategoriesWebDesign'>
        Web Design
      </Link>
      <Link
        href='/blog'
        className='menuCategoriesCategoryItem menuCategoriesTechnology'>
        Technology and inovation
      </Link>
      <Link
        href='/blog'
        className='menuCategoriesCategoryItem menuCategoriesEmerging'>
        Emerging Technologies
      </Link>
      <Link
        href='/blog'
        className='menuCategoriesCategoryItem menuCategoriesPersonalDevelopmen'>
        Personal Development
      </Link>
    </div>
  );
};
