import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://asia-southeast2-gknb-api.cloudfunctions.net/gknb-gcf'
});

export default instance;