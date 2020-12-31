import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://project-novus-83ffc.firebaseio.com/'
});

export default instance;