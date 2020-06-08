import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID SBveQQkZN2XMOEA_QhkaZei4VCQPLx7maC4ot6G50GU'
    }
});