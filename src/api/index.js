import axios from 'axios';
import https from 'https';

const api = axios.create({
  baseURL:process.env.REACT_APP_API_URL || 'https://localhost:5000',
});

const getData = data => api.get(`/`, data);
const postData = data => api.post(`/`, data);

const apiCommands ={
  getData,
  postData
}

export default apiCommands;

//const batURI = "mongodb+srv://batReads:uQ8dJ5Q43cvG1DhV@testing.3gefz.mongodb.net/batManagement?retryWrites=true&w=majority";
