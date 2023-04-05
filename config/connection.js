import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
const connection = axios.create({
    baseURL: 'https://gattekatodo.vercel.app/api',
})


async function getToken() {
    const storagedToken = await AsyncStorage.getItem("@TodoApp:user");
    if (storagedToken) {

        connection.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`
    }

}
getToken()
/* if(storagedToken) {
    connection.defaults.headers['Authorization'] = `Bearer ${JSON.parse(storagedToken)}`
} */

export default connection