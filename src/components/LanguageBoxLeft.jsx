import { useMemo } from 'react';
import './LanguageBoxLeft.scss';

const LanguageBoxLeft = ({
  languageBoxLeftTop,
  languageBoxLeftLeft,
  frameDivWidth,
  french,
  a2Level,
  a2LevelMargin,
  a2LevelFontWeight,
}) => {
  const languageBoxLeftStyle = useMemo(() => {
    return {
      top: languageBoxLeftTop,
      left: languageBoxLeftLeft,
    };
  }, [languageBoxLeftTop, languageBoxLeftLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const a2LevelStyle = useMemo(() => {
    return {
      margin: a2LevelMargin,
      fontWeight: a2LevelFontWeight,
    };
  }, [a2LevelMargin, a2LevelFontWeight]);

  return (
    <div className='languageboxleft' style={languageBoxLeftStyle}>
      <div className='french-parent' style={frameDivStyle}>
        <h2 className='french'>{french}</h2>
        <h3 className='a2-level' style={a2LevelStyle}>
          {a2Level}
        </h3>
      </div>
      <div className='languageboxleft-child' />
    </div>
  );
};

export default LanguageBoxLeft;
