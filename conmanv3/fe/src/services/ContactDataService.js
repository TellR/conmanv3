import http from "../http-common.js";
class ContactDataService {
  getAll() {
    return http.get("/contacts");
  }

  create(data) {
    return http.post("/contact", data);
  }
  update(id, data) {
    return http.put(`/contact/edit/${id}`, data);
  }
  delete(id) {
    return http.delete(`/contact/delete/${id}`);
  }
  get(id) {
    return http.get(`/contact/${id}`);
  }
  findByName(nama) {
    return http.get(`/contact?nama=${nama}`);
  }
  
}
export default new ContactDataService();
