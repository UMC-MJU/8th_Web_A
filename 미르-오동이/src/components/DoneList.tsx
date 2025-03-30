import { Task } from '../App';
import TodoItem from './TodoItem';

interface DoneListProps {
  doneTasks: Task[];
  onDelete: (task: Task) => void;
}

const DoneList = ({ doneTasks, onDelete }: DoneListProps) => (
  <div className="render-container__section">
    <h2 className="render-container__title">완료</h2>
    <ul id="done-list" className="render-container__list">
      {doneTasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          buttonLabel="삭제"
          buttonColor="#dc3545"
          onClick={onDelete}
        />
      ))}
    </ul>
  </div>
);

export default DoneList;