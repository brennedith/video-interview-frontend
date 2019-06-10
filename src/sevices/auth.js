import axios from 'axios';

const endpoint = window.location.origin;

class Auth {
  constructor() {
    this.service = axios.create({
      // TODO: use env variable
      baseURL: `${endpoint}/api/auth`,
      withCredentials: true
    });
  }

  login(body) {
    const path = '/';

    return this.service.post(path, body);
  }

  getUser() {
    const path = '/';

    return this.service.get(path);
  }
}

export default new Auth();
