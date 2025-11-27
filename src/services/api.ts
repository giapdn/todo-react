import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  }
})

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MTI4MGY3NzVkN2NjYTY5MWYwNzJjZSIsInVzZXJuYW1lIjoiZ2lhcGRuIiwiaWF0IjoxNzY0MjY4MDMwLCJleHAiOjE3NjQyNzE2MzB9.r9grUCzJ0aFOQ_VtclxD6gsgjDuZYqMG99nLvzepfRs"; //! Token here
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api