import { BASE_URL } from "@/config";
import axios from "axios";
import { authHeader } from "../helpers/authHelper";
export const API_PREFIX = "";
const axiosApi = axios.create({
  baseURL: `${BASE_URL}/${API_PREFIX}`,
});
export const axiosInstance = axiosApi;
export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { params: config, headers: authHeader() })
    .then((response) => response)
    .catch((error) => error.response);
}
export async function patch(url, data, config = {}) {
  return await axiosApi
    .patch(url, { ...data }, { ...config })
    .then((response) => response)
    .catch((error) => error.response);
}
export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, data, { ...config, headers: authHeader() })
    .then((response) => response)
    .catch((error) => error.response);
}
export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, data, { ...config, headers: authHeader() })
    .then((response) => response)
    .catch((error) => error.response);
}
export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response);
}
