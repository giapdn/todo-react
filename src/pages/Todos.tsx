import type { Todo, ToggleTodo } from "../types/todo"
import TodoItem from "../components/TodoItem"
import Header from "../components/Header";

type Props = {
  todos: Todo[];
  toggleTodo: ToggleTodo
}

function Todos ({todos, toggleTodo}: Props) {
  return (
    <>
      <Header />
      <div>
        {todos!.map(todo => (
          <TodoItem toggleTodo={toggleTodo} key={todo._id} todo={todo} />
        ))}
      </div>
    </>
  )
}

export default Todos