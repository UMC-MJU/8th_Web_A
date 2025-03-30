interface InputFormProps {
    inputValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
  }
  
  const InputForm = ({ inputValue, onChange, onSubmit }: InputFormProps) => (
    <form id="todo-form" className="todo-container__form" onSubmit={onSubmit}>
      <input
        type="text"
        id="todo-input"
        className="todo-container__input"
        placeholder="할 일 입력"
        value={inputValue}
        onChange={onChange}
        required
      />
      <button type="submit" className="todo-container__button">할 일 추가</button>
    </form>
  );
  
  export default InputForm;
  