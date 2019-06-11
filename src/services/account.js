import axios from 'axios';

// TODO: use env variable
const endpoint = window.location.origin;

class Account {
  constructor() {
    this.service = axios.create({
      baseURL: `${endpoint}/api/account`,
      withCredentials: true
    });
  }

  create(body) {
    const path = '/';

    return this.service.post(path, body);
  }

  getAll() {
    const path = '/';

    return this.service.get(path);
  }
  get(id) {
    const path = `/${id}`;

    return this.service.get(path);
  }

  update(id, body) {
    const path = `/${id}`;

    return this.service.patch(path, body);
  }

  delete(id) {
    const path = `/${id}`;

    return this.service.delete(path);
  }
}

export default new Account();
