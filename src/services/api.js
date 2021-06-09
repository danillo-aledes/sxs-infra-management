import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backspirax.herokuapp.com'
});

export default api;
