import axios from 'axios';

const baseURL = window.location.origin;

class videoService {
  constructor() {
    this.service = axios.create({
      baseURL
    });
  }

  sendVideo(body) {
    const path = 'api/video';
    return this.service.post(path, body);
  }
}

export default new videoService();
