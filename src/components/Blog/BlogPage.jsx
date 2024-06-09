//Portfolio-green/src/components/Blog/BlogPage.jsx

import { CardList } from './cardList/CardList';
import { CategoryList } from './categoryList/CategoryList';
import Featured from './featured/Featured';
import { Menu } from './menu/Menu';

export default function BlogPage() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className='content'>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
