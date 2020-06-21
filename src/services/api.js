import axios from 'axios'

const api = axios.create({
    baseURL: 'https://piece-cards.herokuapp.com'
})

export default api