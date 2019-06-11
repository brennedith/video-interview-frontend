import React from 'react';

import './Text.css';

const Text = ({ name, text }) => {
  return (
    <article className="text-container">
      <h1 className="title">{name}</h1>
      <p>{text}</p>
    </article>
  );
};

export default Text;
