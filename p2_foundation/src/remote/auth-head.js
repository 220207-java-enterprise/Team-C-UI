import axios from "axios";

export default function authHeader() {
  const api = 'http://localhost:8080/p2_foundation';
  let token = JSON.parse(localStorage.getItem('data'));
  token = user.data.id;

  axios.get(api, { headers: {'Authorization' : 'Bearer ${token}'}})
  .then(res => {
    console.log(res.data)
  })

}