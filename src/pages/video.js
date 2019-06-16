import React, { useState, useEffect } from 'react';

import FullHeight from './components/FullHeight';
import Text from './components/video/Text';
import Video from './components/video/Video';

const VideoPage = ({ history }) => {
  const [key, setKey] = useState(null);
  const [text, setText] = useState(null);
  const [duration, setDuration] = useState(null);
  const [ftp, setFTP] = useState(null);

  useEffect(() => {
    const { search } = history.location;
    const queries = new URLSearchParams(search);

    setKey(queries.get('key'));
    setText(queries.get('text'));
    setDuration(queries.get('duration'));
  }, [history]);

  return (
    <FullHeight>
      <Video duration={duration} />
      <Text text={text} />
    </FullHeight>
  );
};

export default VideoPage;
