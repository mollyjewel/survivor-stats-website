import http from "../http-common";

class AuthService {
  auth(access_token) {
    return http.post("/oauth/google", { id_token: access_token })
  }
}

export default new AuthService();
