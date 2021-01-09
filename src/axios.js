import axios from 'axios'

const baseURL = 'https://my-json-server.typicode.com/prashant1k99/vue-demo'

export default axios.create({
  baseURL
})