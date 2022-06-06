import axios from "axios"
import Cookie from 'js-cookie'

export default axios.create({
  baseURL: (process.env.SURVIVOR_DATA_SERVICE_URL || "https://survivor-stats.herokuapp.com/api"),
  headers: {
    "Content-type": "application/json",
    "user-token": Cookie.get('token')
  }
})
