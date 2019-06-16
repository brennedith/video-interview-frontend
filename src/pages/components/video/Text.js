import React from 'react';

import './Text.css';

const Text = ({ text }) => {
  const formatedText = text ? text.split('\n') : [];
  const paragraps = formatedText.map((p, i) => <p key={i}>{p}</p>);

  return <article className="text-container">{paragraps}</article>;
};

export default Text;
