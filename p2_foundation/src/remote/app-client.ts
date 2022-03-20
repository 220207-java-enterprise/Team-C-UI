import axios from "axios";


//Create a base configuration
export const appClient = axios.create({
    baseURL: 'http://localhost:8080/p2_foundation',
    headers: {
        'Accept' : 'application/json'
    },
    // prevents Axios from throwing an error if the response status is anything other than 200-299 
    validateStatus: () => true
})