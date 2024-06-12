//Portfolio-green/src/components/Blog/BlogPage.jsx

import { CardList } from './cardList/CardList';
import { CategoryList } from './categoryList/CategoryList';
import Featured from './featured/Featured';
import { Menu } from './menu/Menu';
import './BlogPage.scss';

export default function BlogPage() {
  return (
    <div className='blogPageContainer'>
      <Featured />
      <CategoryList />
      <div className='blogPageContent'>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
