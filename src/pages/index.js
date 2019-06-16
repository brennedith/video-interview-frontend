import React, { Component } from 'react';

import FullHeight from './components/FullHeight';

class Index extends Component {
  state = {
    key: `comany-name-${Date.now()}`,
    text: `El veloz murciélago hindú comía feliz cardillo y kiwi.\nLa cigüeña tocaba el saxofón detrás del palenque de paja.`,
    duration: 15,
    host: 'arm.dyndns.ws',
    user: 'developftp',
    password: '',
    secure: true
  };

  generateVideoLink = () => {
    return Object.keys(this.state).reduce((acc, q) => {
      const value = this.state[q];

      return acc + `${q}=${encodeURI(value)}&`;
    }, '/video?');
  };

  handleChange = ({ target: input }) => {
    const { name, value, type } = input;
    const newValue =
      type === 'number'
        ? Number(value)
        : type === 'radio'
        ? value === 'true'
        : value;

    this.setState({ [name]: newValue });
  };

  render() {
    const { key, text, duration, host, user, password, secure } = this.state;
    const videoLink = this.generateVideoLink();

    return (
      <FullHeight centered>
        <div className="card" style={{ width: '100%', maxWidth: '800px' }}>
          <section className="card-content">
            <p className="title">Inteview configuration</p>
            <label className="label">
              Key
              <input
                className="input"
                type="text"
                name="key"
                value={key}
                onChange={this.handleChange}
              />
            </label>
            <label className="label">
              Text
              <textarea
                className="textarea"
                name="text"
                value={text}
                onChange={this.handleChange}
              />
            </label>
            <label className="label">
              Video Duration
              <input
                className="input"
                type="number"
                name="duration"
                value={duration}
                onChange={this.handleChange}
              />
            </label>
            <p className="title">FTP Credentials</p>
            <label className="label">
              Host
              <input
                className="input"
                type="text"
                name="host"
                value={host}
                onChange={this.handleChange}
              />
            </label>
            <label className="label">
              User
              <input
                className="input"
                type="text"
                name="user"
                value={user}
                onChange={this.handleChange}
              />
            </label>
            <label className="label">
              Password
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <label className="label">
              Secure
              <div className="control">
                <label className="radio">
                  <input
                    className="radio"
                    type="radio"
                    name="secure"
                    value="true"
                    checked={secure}
                    onChange={this.handleChange}
                  />{' '}
                  Yes
                </label>
                <label className="radio">
                  <input
                    className="radio"
                    type="radio"
                    name="secure"
                    value="false"
                    checked={!secure}
                    onChange={this.handleChange}
                  />{' '}
                  No
                </label>
              </div>
            </label>
            <a
              className="button is-success"
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Video Interview component
            </a>
          </section>
        </div>
      </FullHeight>
    );
  }
}

export default Index;
