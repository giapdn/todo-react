import Header from './layouts/components/Header';
import TodoList from './features/todo/components/TodoList';
import MainLayout from './layouts/MainLayout'
import { useState, useEffect } from 'react';
import api from './api/axiosClient';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await api.get("/api/todos");
        setTodos(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTodos()
  }, [])
  return (
    <>
      <MainLayout>
        <Header />
        <TodoList todos={todos} />
      </MainLayout>
    </>
  )
}

export default App
