import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        id="add-text"
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick} id="add-button">
        追加
      </button>
    </div>
  );
};
