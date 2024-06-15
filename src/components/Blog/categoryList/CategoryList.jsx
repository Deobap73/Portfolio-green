// /home/berto/Visual Studio Projects/Private Projects/Portfolio-green/src/components/Blog/CategoryList/CategoryList.jsx

/* import { span } from 'react-router-dom'; */

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../../assets/imageIndex';
import './CategoryList.scss';

export const CategoryList = () => {
  const navigate = useNavigate();

  const onBlogByCategoryClick = useCallback(() => {
    navigate('/blog/category');
  }, [navigate]);

  return (
    <div className='categoryListContainer'>
      <h1 className='categoryListTitle'>Popular Categories</h1>
      <div className='categoryListCategories'>
        <span
          className='categoryListCategory programming'
          /*to='/blog/category?cat=ProgrammingAndSoftware'*/
          onClick={onBlogByCategoryClick}>
          <img
            src={images.ProgrammingAndSoftware}
            alt='Lines of code on a computer screen'
            className='categoryListImage'
          />
          Programming and Software
        </span>
        <span
          className='categoryListCategory webDesign'
          /*to='/blog/category?cat=webDesign'*/
          onClick={onBlogByCategoryClick}>
          <img
            src={images.webDesignAndUXUI}
            alt='Apple computer screen with some ui/ux images'
            className='categoryListImage'
          />
          Web Design
        </span>
        <span
          className='categoryListCategory technology'
          /*to='/blog/category?cat=technologyAndInovation'>*/
          onClick={onBlogByCategoryClick}>
          <img
            src={images.TechnologyAndInovation}
            alt='Lines of code on a computer screen'
            className='categoryListImage'
          />
          Technology and inovation
        </span>
        <span
          className='categoryListCategory emerging'
          /*to='/blog/category?cat=emergingTechnologies'>*/
          onClick={onBlogByCategoryClick}>
          <img
            src={images.EmergingTechnologies}
            alt='Lines of code on a computer screen'
            className='categoryListImage'
          />
          Emerging Technologies
        </span>
        <span
          className='categoryListCategory personalDevelopment'
          /*to='/blog/category?cat=personalDevelopment'>*/
          onClick={onBlogByCategoryClick}>
          <img
            src={images.PersonalDevelopment}
            alt='Lines of code on a computer screen'
            className='categoryListImage'
          />
          Personal Development
        </span>
      </div>
    </div>
  );
};
