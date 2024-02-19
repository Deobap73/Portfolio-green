import './JobBoxLeft.scss';

const JobBoxLeft = () => {
  return (
    <div className='jobboxleft'>
      <div className='truck-driver-reichhart-logis-parent'>
        <h2 className='truck-driver-'>
          Truck Driver - Reichhart Logistik GmbH (Germany)
        </h2>
        <h3 className='june-2019-'>June 2019 - November 2022</h3>
        <ul className='responsible-for-transporting-g-wrapper'>
          <b className='responsible-for-transporting-container'>
            <ul className='responsible-for-transporting-g'>
              <li className='responsible-for-transporting'>
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
