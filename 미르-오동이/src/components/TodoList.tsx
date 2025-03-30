import { Task } from '../App';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Task[];
  onComplete: (task: Task) => void;
}

const TodoList = ({ todos, onComplete }: TodoListProps) => (
  <div className="render-container__section">
    <h2 className="render-container__title">할 일</h2>
    <ul id="todo-list" className="render-container__list">
      {todos.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          buttonLabel="완료"
          buttonColor="#28a745"
          onClick={onComplete}
        />
      ))}
    </ul>
  </div>
);

export default TodoList;