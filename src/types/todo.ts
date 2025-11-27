export interface Todo {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  userId: string
}

export type ToggleTodo = (id: string) => void