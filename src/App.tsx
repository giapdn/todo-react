import { useState, useEffect } from "react";
import api from "./services/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";
import Layout from "./Layout";
import type { Todo, ToggleTodo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  //load dữ liệu todo mỗi khi phát hiện có reload
  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await api.get("/api/todos");
        setTodos(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTodos();
  }, []);

  //thay đổi trạng thái của todo
  const toggleTodo: ToggleTodo = async (id: string) => {
    try {
      const res = await api.patch(`/api/todos/${id}/toggle`);
      const updated = res.data.todo!;
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? updated : todo))
      );
    } catch (error: unknown) {
      console.log(error);
      setTodos((prev) => {
        if (!prev) return prev;
        return prev.map((t) =>
          t._id === id ? { ...t, isCompleted: !t.isCompleted } : t
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Todos todos={todos} toggleTodo={toggleTodo} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
