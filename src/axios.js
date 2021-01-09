import axios from 'axios'

const baseURL = 'https://my-json-server.typicode.com/typicode/demo'

export default axios.create({
  baseURL
})