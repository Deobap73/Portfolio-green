//image-gen/client/src/contexts/globalContext.jsx

import PropTypes from 'prop-types'; // Import the PropTypes

import { useCallback } from 'react';
import { MyContext } from './context';

export default function Container({ children }) {
  // Set validation for the children property
  Container.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // Variable refers to the icon with the symbol 'D'
  const onDeoIconGold1Click = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // context Values

  const contextValues = {
    onDeoIconGold1Click: onDeoIconGold1Click,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
