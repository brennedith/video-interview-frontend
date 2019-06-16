import React from 'react';

import FullHeight from './components/FullHeight';

const index = () => {
  const videoLinkQueries = {
    key: 'company-name-uuid',
    text: `El veloz murciélago hindú comía feliz cardillo y kiwi.\nLa cigüeña tocaba el saxofón detrás del palenque de paja.`,
    duration: 15,
    host: 'myftphost',
    user: 'user',
    password: 'password',
    secure: true
  };

  const videoLink = Object.keys(videoLinkQueries).reduce((acc, q) => {
    return acc + `${q}=${encodeURI(videoLinkQueries[q])}&`;
  }, '/video?');

  return (
    <FullHeight centered>
      <a href={videoLink} target="_blank" rel="noopener noreferrer">
        <h1 className="title is-1 has-text-link">Link</h1>
        <h2 className="subtitle is-2 has-text-success">{videoLink}</h2>
      </a>
    </FullHeight>
  );
};

export default index;
