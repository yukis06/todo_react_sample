import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState();
  return (
    <>
      <div className="input-area">
        <input id="add-text" placeholder="ToDoを入力" />
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul id="incomplete-list">
          <li>
            <div className="list-row">
              <p className="list-row-text">あああ</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したToDo</p>
        <ul id="complete-list">
          <li>
            <div className="list-row">
              <p className="list-row-text">あああ</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
