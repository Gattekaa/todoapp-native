import axios from 'axios'
/* import { parseCookies } from 'nookies'
const { token } = parseCookies()
 */
const connection = axios.create({
    baseURL: 'http://192.168.15.8:3000/api',
})


/* 
if(token) {
    connection.defaults.headers['Authorization'] = `Bearer ${token}`
} */

export default connection