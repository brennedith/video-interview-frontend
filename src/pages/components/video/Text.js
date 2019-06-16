import React from 'react';

import './Text.css';

const Text = ({ text }) => {
  return (
    <article className="text-container">
      <p>{text}</p>
    </article>
  );
};

export default Text;
