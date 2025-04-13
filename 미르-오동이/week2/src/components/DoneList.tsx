import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const DoneList = () => {
  const { doneTasks, deleteTask } = useContext(TodoContext);

  return (
    <div className="render-container__section">
      <h2 className="render-container__title">완료</h2>
      <ul id="done-list" className="render-container__list">
        {doneTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            buttonLabel="삭제"
            buttonColor="#dc3545"
            onClick={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default DoneList;