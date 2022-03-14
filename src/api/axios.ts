import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

const BASE_URL = 'http://127.0.0.1:8000';


export const axiosInstance = axios.create({
  baseURL: BASE_URL
})
