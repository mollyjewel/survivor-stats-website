import http from "http-common"

class SeasonDataService {
  getAll() {
    return http.get("/seasons")
  }

  get(id) {
    return http.get(`/seasons/${id}`)
  }

  create(data) {
    return http.post("/seasons", data)
  }

  update(id, data) {
    return http.put(`/seasons/${id}`, data)
  }

  findByTitle(title) {
    return http.get(`/seasons?title=${title}`)
  }
}

export default new SeasonDataService()
