import axios from "axios";

export const API_ROOT = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
    baseURL: API_ROOT,
});

let token = null;
const responseBody = (res) => res.body;

const getAuthToken = () => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    const token = auth ? auth?.data?.access_token : null;
    return token;
};

export const tokenPlugin = (req) => {
    token = getAuthToken();
    req.set("Accept", "application/json");
    req.on("response", function (res) {
        if (res.status === 401) {
            Auth.logout();
        }
    });
    if (token) {
        const bearer = `Bearer ${token}`;
        console.log("bearer : ", bearer);
        req.set("Authorization", `Bearer ${token}`);
    }

    req.on("error", (error) => {
        if (error.status === undefined) {
            return;
        }
    });
};


const requests = {
    delete: (url) =>
        instance
            .delete(`${API_ROOT}${url}`, {
                headers: { Authorization: `Bearer ${getAuthToken()}` },
            })
            .then((responseBody) => {
                return responseBody;
            }),
    get: (url) =>
        instance
            .get(`${API_ROOT}${url}`, {
                headers: { Authorization: `Bearer ${getAuthToken()}` },
            })
            .then((responseBody) => {
                console.log("response body", responseBody);
                return responseBody;
            }),
    put: (url, body) =>
        instance.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),

    post: (url, body) => {
        return instance
            .post(`${API_ROOT}${url}`, body, {
                headers: { Authorization: `Bearer ${getAuthToken()}` },
            })
            .then((responseBody) => {
                return responseBody;
            });
    },
};

const Auth = {
    isAuth: () => {
        const token = getAuthToken();
        return !!token;
    },
    setToken: () => {
        const auth = JSON.parse(window.localStorage.getItem("auth"));
        token = auth.token;
    },
    saveAuthData: (_user) => {
        window.localStorage.setItem("auth", JSON.stringify(_user));
        token = _user.data.access_token;
    },
    logout: () => {
        window.localStorage.removeItem("auth");
        token = null;
    },
    currentUserDetails: () => {
        const user = window.localStorage.getItem("userData");
        console.log("current user", user);
        return JSON.parse(user);
    },
    login: (data) => requests.post("/api/login", data),
    register: (data) => requests.post("/account/register", data),
};

const Compute = {
    load: () => requests.get("subjects"),
    getOne: (id) => requests.get(`subjects/${id}`)
};

export default {
    Auth,
    Compute
};
