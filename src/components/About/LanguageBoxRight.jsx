import { useMemo } from 'react';
import './LanguageBoxRight.scss';

const LanguageBoxRight = ({ languageBoxRightTop, german, a2Level }) => {
  const languageBoxRightStyle = useMemo(() => {
    return {
      top: languageBoxRightTop,
    };
  }, [languageBoxRightTop]);

  return (
    <div className='languageboxright' style={languageBoxRightStyle}>
      <div className='languageboxright-child' />
      <div className='german-parent'>
        <h2 className='german'>{german}</h2>
        <h3 className='a2-level1'>{a2Level}</h3>
      </div>
    </div>
  );
};

export default LanguageBoxRight;
