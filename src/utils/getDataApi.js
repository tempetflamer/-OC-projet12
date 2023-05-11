import axios from "axios";

/**
 * Define the base of the request url to the api
 */
export const api = axios.create({
    baseURL: `http://localhost:3000/`
});