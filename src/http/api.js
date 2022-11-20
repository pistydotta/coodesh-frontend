import axios from 'axios'

export default () => {
    const api = axios.create({

        baseURL: process.env.VUE_APP_API_URL,
        withCredentials: false,
        'Access-Control-Allow-Credentials': true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'Authorization': // `Bearer ${token}`//`Bearer ${Cookie.get('access_token')}`  
        }
    })

    return api;

}