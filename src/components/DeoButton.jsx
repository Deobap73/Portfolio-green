// src/components/DeoButton.jsx

import { useContext } from 'react';
import { MyContext } from '../contexts/context';
import images from '../assets/imageIndex';
import './DeoButton.scss';

const DeoButton = () => {
  const { onDeoIconGold1Click } = useContext(MyContext);
  return (
    <button className='deobutton' onClick={onDeoIconGold1Click}>
      <img className='deo-icongold-1' alt='' src={images.deoIconGold} />
    </button>
  );
};

export default DeoButton;
