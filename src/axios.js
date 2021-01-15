import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://project-novus-83ffc.firebaseio.com/'
});

export default instance;