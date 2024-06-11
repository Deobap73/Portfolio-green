// /home/berto/Visual Studio Projects/Private Projects/Portfolio-green/src/components/Blog/CategoryList/CategoryList.jsx

import { Link } from 'react-router-dom';
import images from '../../../assets/imageIndex';
import './CategoryList.scss';

export const CategoryList = () => {
  return (
    <div className='categoryListContainer'>
      <h1 className='categoryListTitle'>Popular Categories</h1>
      <div className='categoryListCategories'>
        <Link className='categoryListCategory programming' to='/blog?cat=style'>
          <img
            src={images.ProgrammingAndSoftware}
            alt='Lines of code on a computer screen'
            className='categoryListImage'
          />
          Programming and Software
        </Link>
        <Link className='categoryListCategory webDesign' to='/blog?cat=style'>
          <img
            src={images.webDesignAndUXUI}
            alt='Apple computer screen with some ui/ux images'
            className='categoryListImage'
          />
          Web Design
        </Link>
        <Link className='categoryListCategory technology' to='/blog?cat=style'>
          <img
            src={images.TechnologyAndInovation}
            alt='Lines of code on a computer screen'
            className='categoryListImage'
          />
          Technology and inovation
        </Link>
        <Link className='categoryListCategory emerging' to='/blog?cat=style'>
          <img
            src={images.EmergingTechnologies}
            alt='Lines of code on a computer screen'
            className='categoryListImage'
          />
          Emerging Technologies
        </Link>
        <Link
          className='categoryListCategory personalDevelopment'
          to='/blog?cat=style'>
          <img
            src={images.PersonalDevelopment}
            alt='Lines of code on a computer screen'
            className='categoryListImage'
          />
          Personal Development
        </Link>
      </div>
    </div>
  );
};
