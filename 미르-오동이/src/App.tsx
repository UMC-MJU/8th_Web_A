import './App.css';
import { useState } from 'react';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import { TodoContext } from './context/TodoContext';

export type Task = {
  id: number;
  text: string;
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: inputValue.trim(),
    };
    setTodos((prev) => [...prev, newTask]);
    setInputValue('');
  };

  const completeTask = (task: Task) => {
    setTodos((prev) => prev.filter((t) => t.id !== task.id));
    setDoneTasks((prev) => [...prev, task]);
  };

  const deleteTask = (task: Task) => {
    setDoneTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <TodoContext.Provider
      value={{
        inputValue,
        todos,
        doneTasks,
        handleInputChange,
        handleSubmit,
        completeTask,
        deleteTask,
      }}
    >
      <div className="todo-container">
        <h1 className="todo-container__header">DONGI TODO</h1>
        <InputForm />
        <div className="render-container">
          <TodoList />
          <DoneList />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
