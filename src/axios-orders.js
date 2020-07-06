import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f35b8.firebaseio.com/'
});

export default instance;