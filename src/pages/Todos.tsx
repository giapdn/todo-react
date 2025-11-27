import type { DeleteTodo, Todo, ToggleTodo } from "../types/todo";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import { Sun } from "lucide-react";

type Props = {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
};

function Todos({ todos, toggleTodo, deleteTodo }: Props) {
  return (
    <>
      <Header />
      <SearchInput />
      <div className="flex gap-2 mt-1.5">
        <button className="bg-green-400 flex-4/5 py-2 rounded-sm">
          Thêm mới
        </button>
        <button className="bg-green-400 flex-1/5 py-2 rounded-sm flex justify-around items-center">
          <Sun />
        </button>
      </div>

      <div>
        {todos!.map((todo) => (
          <TodoItem
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo._id}
            todo={todo}
          />
        ))}
      </div>
    </>
  );
}

export default Todos;
