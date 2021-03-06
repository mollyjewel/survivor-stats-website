import http from "http-common"

class ContestantDataService {
  getAll() {
    return http.get("/contestants")
  }

  get(id) {
    return http.get(`/contestants/${id}`)
  }

  create(data) {
    return http.post("/contestants", data)
  }

  update(id, data) {
    return http.put(`/contestants/${id}`, data)
  }

  getBySeasonId(id) {
    return http.get(`/contestants/season/${id}`)
  }

  getSeasonGenderPercents() {
    return http.get(`/contestants/gender/percents`)
  }

  getSeasonRacePercents() {
    return http.get(`/contestants/race/percents`)
  }

  getSeasonSexOrientPercents() {
    return http.get(`/contestants/sexualOrientation/percents`)
  }
}

export default new ContestantDataService()
