import React, { useState, useEffect } from 'react';

import FullHeight from './components/FullHeight';
import Text from './components/video/Text';
import Video from './components/video/Video';
import Preview from './components/video/Preview';

const VideoPage = ({ history }) => {
  const [key, setKey] = useState(null);
  const [text, setText] = useState(null);
  const [duration, setDuration] = useState(null);
  const [ftp, setFTP] = useState(null);

  const [showPreview, setShowPreview] = useState(false);
  const [videoFile, setVideoFile] = useState(null);

  useEffect(() => {
    const { search } = history.location;
    const queries = new URLSearchParams(search);

    setKey(queries.get('key'));
    setText(queries.get('text'));
    setDuration(queries.get('duration'));
    setFTP({
      host: queries.get('host'),
      user: queries.get('user'),
      password: queries.get('password')
    });
  }, [history]);

  const receiveVideoFile = videoFile => {
    if (videoFile) {
      setShowPreview(true);
      setVideoFile(videoFile);
    }
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  return (
    <FullHeight>
      <Text text={text} />
      <Video duration={duration} sendVideoFile={receiveVideoFile} />
      {showPreview && (
        <Preview
          accountKey={key}
          video={videoFile}
          ftpConfig={ftp}
          closePreview={closePreview}
        />
      )}
    </FullHeight>
  );
};

export default VideoPage;
