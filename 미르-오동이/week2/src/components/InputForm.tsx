import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const InputForm = () => {
  const { inputValue, handleInputChange, handleSubmit } = useContext(TodoContext);

  return (
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
  );
};

export default InputForm;