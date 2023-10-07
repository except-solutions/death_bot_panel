import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://64775cf39233e82dd53b854f.mockapi.io',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  })