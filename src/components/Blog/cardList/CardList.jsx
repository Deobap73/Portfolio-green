// Portfolio-green/src/components/Blog/CardList/CardList.jsx

import { Card } from '../card/Card';
import Pagination from '../pagination/Pagination';

import './CardList.scss';

export const CardList = () => {
  return (
    <div className='cardListContainer'>
      <h1 className='cardListTitle'>Recent Posts</h1>
      <div className='cardListPosts'>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};
