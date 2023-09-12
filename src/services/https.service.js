import http from "../http-common";

export const httpsService = {
    getAll,
    get,
    find,
    postUser,
    addBday
}

function getAll(page = 0) {
    return http.get(`?page=${page}`);
}

function get(id) {
    return http.get(`/user?id=${id}`);
}

function find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
}

function postUser(data) {
    return http.post("/", data);
}
function addBday(id, data) {
    return http.put(`/id/${id}`, data);
}