import React, { useState, useEffect } from 'react';

import FullHeight from './components/FullHeight';
import Text from './components/video/Text';
import Video from './components/video/Video';

import AccountService from '../services/account';

const VideoPage = ({ history }) => {
  const [name, setName] = useState(null);
  const [text, setText] = useState(null);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const { pathname } = history.location;
    const path = /[a-z\d-]+/gi.exec(pathname);
    const slug = path ? path.pop() : null;

    if (slug) {
      AccountService.get(slug).then(({ data: account }) => {
        setName(account.name);
        setText(account.text);
        setDuration(account.duration);
      });
    }
  }, [history]);

  return (
    <FullHeight>
      <Video duration={duration} />
      <Text name={name} text={text} />
    </FullHeight>
  );
};

export default VideoPage;
