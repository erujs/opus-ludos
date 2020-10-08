import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://asia-southeast2-gknb-api.cloudfunctions.net/gknb-gcf'
});

export default instance;