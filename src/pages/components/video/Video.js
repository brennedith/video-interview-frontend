import React, { useEffect, useRef } from 'react';

import './Video.css';

const Video = ({ duration }) => {
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      });
  }, []);

  return (
    <article className="video-container">
      <video ref={videoRef} muted autoPlay />
      <div className="controls">
        <button className="button" type="button">
          Camera
        </button>
        <button className="button" type="button">
          Record
        </button>
        <span className="button" type="button">
          {duration}
        </span>
      </div>
    </article>
  );
};

export default Video;
