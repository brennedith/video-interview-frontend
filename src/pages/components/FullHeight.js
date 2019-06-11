import React from 'react';

import './FullHeight.css';

const FullHeight = ({ children, centered = false }) => {
  const className = `is-full-height
  ${centered ? 'centered' : ''}`;

  return <section className={className}>{children}</section>;
};

export default FullHeight;
