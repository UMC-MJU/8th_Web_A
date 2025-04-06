import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, completeTask } = useContext(TodoContext);

  return (
    <div className="render-container__section">
      <h2 className="render-container__title">할 일</h2>
      <ul id="todo-list" className="render-container__list">
        {todos.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            buttonLabel="완료"
            buttonColor="#28a745"
            onClick={completeTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;