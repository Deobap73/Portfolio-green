// src/components/ProjectsButton.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './ProjectsButton.scss';

const ProjectsButton = ({ url }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button className='projectsbutton' onClick={handleClick}>
      <b className='visit-the-code'>Visit the code</b>
    </button>
  );
};

ProjectsButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ProjectsButton;
