import { Check, Trash, Pencil } from "lucide-react"
import type { Todo } from "../../../types/todo";

type Props = {
  todo: Todo;
}

const onClick = (): void => {
  alert(1)
}



function TodoItem({ todo}: Props) {

  return (
    <div className="flex flex-row mt-1.5 border-b">
      <div className="flex-none w-1/6 bg-emerald-500 text-xl flex items-center justify-around">
        <Check className=" border" />
      </div>

      <div className="flex-none w-4/6 p-2 bg-blue-700">
        <p className="text-2xl break-all">
          {todo.title}
        </p>
      </div>

      <div className="flex-none w-1/6 flex items-center justify-around">
        <button onClick={onClick} className="hover:bg-amber-800">
          <Pencil className="w-5 h-5" />
        </button>
        <button>
          <Trash className="w-5 h-5" />
        </button>
      </div>
    </div>


  )
}


export default TodoItem