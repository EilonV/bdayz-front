import http from "../http-common";

export const httpsService = {
    getAll,
    get,
    find,
    postUser
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