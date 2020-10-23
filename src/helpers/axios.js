import axios from 'axios';

let token = localStorage.getItem('menagerie');

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

export default axios;