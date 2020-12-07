import axios from 'axios';
import dotenv from 'dotenv'

const env = dotenv.config()
const API_URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: API_URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: process.env.YOUTUBE_API
  }
})