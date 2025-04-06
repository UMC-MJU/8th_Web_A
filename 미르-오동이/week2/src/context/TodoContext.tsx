import { createContext } from 'react';
import { Task } from '../App';

interface TodoContextType {
  inputValue: string;
  todos: Task[];
  doneTasks: Task[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  completeTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

export const TodoContext = createContext<TodoContextType>({} as TodoContextType);