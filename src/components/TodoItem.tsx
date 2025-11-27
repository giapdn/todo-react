import { Check, Trash, Pencil } from "lucide-react";
import type { DeleteTodo, Todo, ToggleTodo } from "../types/todo";

type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
};

function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  return (
    <div className="flex flex-row mt-1.5 border-b">
      <div className="flex-none w-1/6 text-xl flex items-center justify-around">
        <Check
          onClick={() => toggleTodo(todo._id)}
          className={`rounded-sm ${
            todo.isCompleted
              ? `text-white bg-green-400 cursor-pointer`
              : `border cursor-pointer`
          }`}
        />
      </div>
      <div className="flex-none w-4/6 p-2">
        <p
          className={`text-2xl font-semibold break-all ${
            todo.isCompleted ? `line-through decoration-2` : ``
          }`}
        >
          {" "}
          {todo.title}{" "}
        </p>
      </div>
      <div className="flex-none w-1/6 flex items-center justify-around">
        <button className="hover:text-blue-500">
          <Pencil className="w-5 h-5 cursor-pointer" />
        </button>
        <button className="hover:text-red-500">
          <Trash
            onClick={() => deleteTodo(todo._id)}
            className="w-5 h-5 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
