import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoTxt, setTodoTxt] = useState("");
  const [inCompleteList, setInCompleteList] = useState(["aaa", "bbb", "ddd"]);
  const [completeList, setCompleteList] = useState(['eee']);

  const inputTodo = () => {
    if (todoTxt === "") return;
    setTodoTxt(todoTxt);
    const newTodos = [...inCompleteList, todoTxt];
    setInCompleteList(newTodos);
    setTodoTxt("");
  };

  const completeTodo = () => {
    const newIn
  };
  

  return (
    <>
      <div className="input-area">
        <input
          id="add-text"
          placeholder="TODOを入力"
          value={todoTxt}
          onChange={(event) => setTodoTxt(event.target.value)}
        />
        <button id="add-button" onClick={inputTodo}>
          追加
        </button>
      </div>
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <div>
          <ul id="incomplete-list">
            {inCompleteList.map((todo) => {
              return (
                <li key={todo} className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          <li className="list-row">
            <p>test</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
