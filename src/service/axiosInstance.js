import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: 'http://127.0.0.1:8000'
})

axiosInstance.interceptors.request.use((cfg) => {
  cfg.headers['Accept'] = 'application/json'
  cfg.headers['Authorization'] = localStorage.getItem('token')
  return cfg
})

export default axiosInstance
