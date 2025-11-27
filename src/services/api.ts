import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  }
})

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MTI4MGY3NzVkN2NjYTY5MWYwNzJjZSIsInVzZXJuYW1lIjoiZ2lhcGRuIiwiaWF0IjoxNzY0MjY0Mjk5LCJleHAiOjE3NjQyNjc4OTl9.7iOW_oSXJL4O3tqrRkIRJ5mtaRtElsUyPHae5R5-O8M"; //! Token here
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api