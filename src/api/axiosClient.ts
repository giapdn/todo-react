import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", //! Url here
  headers: {
    "Content-Type": "application/json",
  }
})

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MTI4MGY3NzVkN2NjYTY5MWYwNzJjZSIsInVzZXJuYW1lIjoiZ2lhcGRuIiwiaWF0IjoxNzYzODkzODIyLCJleHAiOjE3NjM4OTc0MjJ9.uAZqOEqs93KspmbYA1TBDKJX5u-_nRjQgNhyW8Uwts8"; //! Token here
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api