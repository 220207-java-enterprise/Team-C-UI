import axios from "axios";

let AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaXNzIjoicDJfZm91bmRhdGlvbiIsImlhdCI6MTY0ODIxNzM5NCwiZXhwIjoxNjQ4MjIwOTk0LCJzdWIiOiJBc2FlbnoxMjMiLCJyb2xlIjoiQWRtaW4ifQ.hKj6YUJhnaKNVltUIm2TKxWMOBgOws6FFDg4NZ4uUrg';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

//Create a base configuration
export const appClient = axios.create({
    baseURL: 'http://localhost:8080/p2_foundation',
    headers: { 
        'Accept' : 'application/json'
    },
    // prevents Axios from throwing an error if the response status is anything other than 200-299 
    validateStatus: () => true
})
