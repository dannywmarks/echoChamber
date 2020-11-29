import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3';
const URL = 'http://localhost:5000/topics'

export const fetchEchos = () => axios.get(URL)