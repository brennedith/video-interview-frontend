import React, { useRef, useEffect } from 'react';

import VideoService from '../../../services/videoService';

import './Preview.css';

const Preview = ({ video, ftpConfig, closePreview }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (video) {
      videoRef.current.src = window.URL.createObjectURL(video);
    }
  }, [video]);

  const playVideo = () => {
    videoRef.current.play();
  };

  const sendVideo = () => {
    const formData = new FormData();

    const data = {
      ...ftpConfig,
      video
    };
    console.log(data);
    Object.keys(data).forEach(key => {
      formData.set(key, data[key]);
    });

    VideoService.sendVideo(formData)
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <div className="Preview modal is-active">
      <div className="modal-background" onClick={closePreview} />
      <div className="modal-content">
        <section>
          <article className="video-preview">
            <video className="mirror" ref={videoRef} preload={'true'} />
          </article>
          <article className="modal-buttons">
            <button className="button is-light" onClick={playVideo}>
              Preview video
            </button>
            <button className="button is-link" onClick={sendVideo}>
              Send video
            </button>
            <button className="button is-warning" onClick={closePreview}>
              Record again
            </button>
          </article>
        </section>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closePreview}
      />
    </div>
  );
};

export default Preview;
