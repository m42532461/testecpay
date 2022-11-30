import axios from "axios";

const API = axios.create({ baseURL: "https://ecommerce-ecpay.onrender.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const makeOrder = (orderData) => API.post(`/order`, orderData);
export const fetchOrders = () => API.get("/order");

export const addToCart = (item) => API.post(`/user/cart/add`, item);
export const removeFromCart = (item) => API.post(`/user/cart/remove`, item);
export const getCart = () => API.get(`/user/cart/info`);
export const clearCart = () => API.delete(`/user/cart/clear`);

export const fetchOrderCode = (id, orderData) =>
  API.get(`/order/${id}`, orderData);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const fetchAllProducts = () => API.get("/product/all");
