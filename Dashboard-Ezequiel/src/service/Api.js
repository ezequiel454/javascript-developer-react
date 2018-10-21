import axios from 'axios'

const Api = base => {
  const client = axios.create({
    baseURL: base
  })

  const get = endpoint => client.get(endpoint)

  return {
    getPerson: () => get(`/2018/getStudent`)
  }
}

export default Api
