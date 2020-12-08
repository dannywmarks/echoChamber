import axios from 'axios';
import dotenv from 'dotenv'


const API_URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: API_URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: "AIzaSyAMl8QbH6okl84WnSUoxaP1bG_usdo2Qms"
  }
})