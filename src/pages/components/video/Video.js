import React, { Component, createRef } from 'react';

import './Video.css';

class Video extends Component {
  timer = null;
  videoRef = createRef();
  state = {
    isRecording: false,
    duration: 0,
    countdown: 0,
    cameraArray: []
  };

  componentDidMount() {
    // Request permissions and starts media feed
    const mediaConstrains = {
      video: { facingMode: 'user' },
      audio: true
    };

    navigator.mediaDevices.getUserMedia(mediaConstrains).then(stream => {
      this.videoRef.current.srcObject = stream;
    });
  }

  static getDerivedStateFromProps(props, state) {
    // Sets duration and countdown when component receives props
    if (props.duration !== state.duration) {
      return {
        ...state,
        duration: props.duration,
        countdown: props.duration
      };
    } else {
      return null;
    }
  }

  // Toggle recording status and controls countdown
  toggleRecord = () => {
    const { isRecording } = this.state;

    if (!isRecording) {
      this.handleCountdown({ type: 'START' });
      this.recordVideo();
    } else {
      this.handleCountdown({ type: 'STOP' });
      this.handleCountdown({ type: 'RESTART' });
    }

    this.setState(prevState => ({
      isRecording: !prevState.isRecording
    }));
  };

  recordVideo() {
    const { duration } = this.state;

    const opts = { mimeType: 'video/webm' };
    const rec = new MediaRecorder(this.videoRef.current.srcObject, opts);
    const blobs = [];

    rec.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        blobs.push(e.data);
      }
    };
    rec.onstop = () => {
      const blob = new Blob(blobs, { type: 'video/webm' });
      const file = new File([blob], 'video.webm');

      this.sendVideoToSevice(file);
    };
    rec.start();

    setTimeout(() => {
      rec.stop();
    }, duration * 1000);
  }

  sendVideoToSevice = videoFile => {
    const { isRecording } = this.state;

    if (isRecording) {
      this.props.sendVideoFile(videoFile);
      this.toggleRecord();
    }
  };

  handleCountdown = action => {
    switch (action.type) {
      case 'START':
        this.timer = setInterval(() => {
          this.setState(prevState => ({
            countdown: prevState.countdown - 1
          }));
        }, 1000);
        break;

      case 'STOP':
        clearInterval(this.timer);
        this.timer = null;
        break;

      case 'RESTART':
        this.setState(prevState => ({
          countdown: prevState.duration
        }));
        break;

      default:
        return;
    }
  };

  render() {
    const { countdown, isRecording } = this.state;

    return (
      <article className="video-container">
        <video className="mirror" ref={this.videoRef} muted autoPlay />
        <div className="controls">
          <div />
          <button className="button" type="button" onClick={this.toggleRecord}>
            {isRecording ? 'Cancel recording' : 'Start recording'}
          </button>
          <span className="button" type="button">
            {countdown}
          </span>
        </div>
      </article>
    );
  }
}

export default Video;
