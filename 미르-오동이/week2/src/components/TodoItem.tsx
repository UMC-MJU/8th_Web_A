import { Task } from '../App';

interface TodoItemProps {
  task: Task;
  onClick: (task: Task) => void;
  buttonLabel: string;
  buttonColor: string;
}

const TodoItem = ({ task, onClick, buttonLabel, buttonColor }: TodoItemProps) => (
  <li className="render-container__item">
    {task.text}
    <button
      className="render-container__item-button"
      style={{ backgroundColor: buttonColor, marginLeft: '10px' }}
      onClick={() => onClick(task)}
    >
      {buttonLabel}
    </button>
  </li>
);

export default TodoItem;