import axios from 'axios'

const api = axios.create({
    baseURL: ' https://botw-compendium.herokuapp.com/api/v2/'
})

export default api;