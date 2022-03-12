import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したToDo</p>
      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p className="list-row-text">{todo}</p>
                <button
                  onClick={() => {
                    onClick(index);
                  }}
                >
                  戻す
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
