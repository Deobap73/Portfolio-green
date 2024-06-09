// image-gen/client/src/contexts/globalContext.jsx

import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { MyContext } from './context';

function Container({ children }) {
  // Variable refers to the icon with the symbol 'D'
  const onDeoIconGold1Click = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // State for authentication status
  const [status, setStatus] = useState('notauthenticated');

  // Context values
  const contextValues = {
    onDeoIconGold1Click,
    status,
    setStatus,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}

// Set validation for the children property
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
