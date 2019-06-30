import React from 'react';

import './Notification.css';

const Notification = ({ type }) => {
  let tileClass = 'is-info';
  let title = 'One moment please';
  let subtitle = 'Sending your video...';

  if (type === 'success') {
    tileClass = 'is-success';
    title = 'Thanks!';
    subtitle = 'Your video has been sent.';
  }

  if (type === 'error') {
    tileClass = 'is-warning';
    title = 'Error!';
    subtitle = 'Sorry, something went wrong.';
  }

  return (
    <>
      <div className="Notification modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <article className={`tile ${tileClass}`}>
            <h1 className="title is-1">{title}</h1>
            <h2 className="subtitle is-3">{subtitle}</h2>
          </article>
        </div>
      </div>
    </>
  );
};

export default Notification;
