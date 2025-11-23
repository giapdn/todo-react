import type { Todo } from "../../../types/todo"
import TodoItem from "./TodoItem"

type Props = {
  todos: Todo[];
}

function TodoList ({todos = []}: Props) {
  return (
    <div className=" bg-amber-500">
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList