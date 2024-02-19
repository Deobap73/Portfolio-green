import { useMemo } from 'react';
import './PlanningCard.scss';

const PlanningCard = ({
  designId,
  processType,
  designDescriptionText,
  propPadding,
  propWidth,
}) => {
  const homeVocationaBoxStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className='homevocationabox' style={homeVocationaBoxStyle}>
      <div className='vocationaboxchild'>
        <img
          className='vector-icon'
          alt=''
          src={designId}
          style={vectorIconStyle}
        />
        <h2 className='planning'>{processType}</h2>
        <p className='in-the-world'>{designDescriptionText}</p>
      </div>
    </div>
  );
};

export default PlanningCard;
