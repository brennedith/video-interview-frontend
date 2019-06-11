import React from 'react';

import './Content.css';

const Content = ({ children }) => {
  return <section className="container">{children}</section>;
};

export default Content;
