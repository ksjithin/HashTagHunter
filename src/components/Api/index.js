import axios from 'axios'

const api = axios.create({
    baseURL: 'https://polar-springs-94644.herokuapp.com/'
})


export const getStreamData = () => api.get(`/api/v1/twitter`)


const apis = {    
    getStreamData    
}

export default apis