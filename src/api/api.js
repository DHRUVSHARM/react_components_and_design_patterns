import axios from "axios";

// this is the axios configuration
const axiosParams = {
    baseUrl : 
        process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
};

// create an axios instance with the configuration
const axiosInstance = axios.create(axiosParams);

// define the API function , this exports the different API functions with axios as a dictionary
const api = (axios) => {
    return {
        get : (url, config={}) => axios.get(url, config),
        delete : (url , config={}) => axios.delete(url, config),
        post : (url, body, config={}) => axios.post(url, body, config),
        put : (url, body, config={}) => axios.put(url, body, config),
        patch : (url , body , config={}) => axios.patch(url , body , config)
    };
}

export default api(axiosInstance);
