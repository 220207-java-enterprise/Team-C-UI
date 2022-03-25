import axios from "axios";

let AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaXNzIjoicDJfZm91bmRhdGlvbiIsImlhdCI6MTY0ODE3OTMyMywiZXhwIjoxNjQ4MTgyOTIzLCJzdWIiOiJBc2FlbnoxMjMiLCJyb2xlIjoiQWRtaW4ifQ.ZpcKBNfTHK4wTl0ncF3XajWjHCz0q2Yx10TSHTsoqX4';
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
