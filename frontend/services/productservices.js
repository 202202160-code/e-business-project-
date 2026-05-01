import axios from "axios";

const API = "http://localhost:5000/api";

export const getProducts = () => {
  return axios.get(`${API}/products`);
};

export const createOrder = (data) => {
  return axios.post(`${API}/orders`, data);
};