import axios from "axios"
import Cookie from 'js-cookie'

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    "user-token": Cookie.get('token')
  }
})
