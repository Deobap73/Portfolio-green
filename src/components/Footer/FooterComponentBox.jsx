// src/components/FooterContactMe.jsx

import DeoButton from '../Buttons/DeoButton';
import FooterMeAsDeveloper from './FooterMeAsDeveloper';
import FooterSomeProjects from './FooterSomeProjects';
import FooterContactMe from './FooterContactMe';
import './FooterComponentBox.scss';

const FooterComponentBox = () => {
  return (
    <div className='deobutton-group'>
      <DeoButton />
      <FooterMeAsDeveloper />
      <FooterSomeProjects />
      <FooterContactMe />
    </div>
  );
};

export default FooterComponentBox;
