import './App.css';
import { useState } from 'react';

type Task = {
  id: number;
  text: string;
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]); // 완료 리스트 추가

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 현재 input창에 입력된 값
  };

  const handleSubmit = (e: React.FormEvent) => {  //폼 제출시 실행
    e.preventDefault(); //새로고침 방지
    if (!inputValue.trim()) return; //공백 방지

    const newTask: Task = { //새 할일
      id: Date.now(),
      text: inputValue.trim(),
    };

    setTodos((prev) => [...prev, newTask]);
    setInputValue(''); //입력값 초기화
  };

  const completeTask = (task: Task) => { //완료 눌렀을때
    setTodos((prev) => prev.filter((t) => t.id !== task.id)); //일치하지 않는 것만
    setDoneTasks((prev) => [...prev, task]);
  };

  const deleteTask = (task: Task) => { //삭제
    setDoneTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-container__header">DONGI TODO</h1>

      <form id="todo-form" className="todo-container__form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="todo-input"
          className="todo-container__input"
          placeholder="할 일 입력"
          value={inputValue}

          onChange={handleInputChange}
          required
        />
        <button type="submit" className="todo-container__button">할 일 추가</button>
      </form>

      <div className="render-container">
        <div className="render-container__section">
          <h2 className="render-container__title">할 일</h2>
          <ul id="todo-list" className="render-container__list">

            {todos.map((task) => (
              <li key={task.id} className="render-container__item">
                {task.text}
                <button
                  className="render-container__item-button"
                  style={{ backgroundColor: '#28a745', marginLeft: '10px' }}
                  onClick={() => completeTask(task)}
                >
                  완료
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="render-container__section">
          <h2 className="render-container__title">완료</h2>
          <ul id="done-list" className="render-container__list">
            {doneTasks.map((task) => (
              <li key={task.id} className="render-container__item">
                {task.text}
                <button
                  className="render-container__item-button"
                  style={{ backgroundColor: '#dc3545', marginLeft: '10px' }}
                  onClick={() => deleteTask(task)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;