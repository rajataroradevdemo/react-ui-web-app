import http from "../http-common";

const serverUrl = "https://ph645oprz0.execute-api.ap-south-1.amazonaws.com/dev";


class TutorialDataService {
  getAll() {
    return http.get(serverUrl + "/tutorials");
  }

  get(id) {
    return http.get(serverUrl + `/tutorials/${id}`);
  }

  create(data) {
    return http.post(serverUrl + '/tutorials', data);
  }

  update(id, data) {
    return http.put(serverUrl + `/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(serverUrl + `/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(serverUrl + `/tutorials`);
  }

  findByTitle(title) {
    return http.get(serverUrl + `/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();