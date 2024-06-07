// src/components/JobBoxLeft.jsx

import './JobBoxLeft.scss';

const JobBoxLeft = () => {
  return (
    <div className='jobboxleft'>
      <div className='jobboxleftContainer'>
        <h2 className='jobboxleftTitle'>
          Truck Driver - Reichhart Logistik GmbH (Germany)
        </h2>
        <h3 className='jobboxleftDate'>June 2019 - November 2022</h3>
        <ul className='jobboxleftListContainer'>
          <b className='jobboxleftListContainerTitle'>
            <ul className='jobboxleftList'>
              <li className='jobboxleftListDiscrimination'>
                {' '}
                Responsible for transporting goods.
              </li>
              <li>Responsible for loading and unloading safely</li>
            </ul>
          </b>
        </ul>
      </div>
      <div className='jobboxleft-child' />
    </div>
  );
};

export default JobBoxLeft;
