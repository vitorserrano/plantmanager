import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.31.174:3333',
});

export default api;

// npm install -g json-server
// json-server ./src/services/server.json --host 192.168.31.174 --port 3333
