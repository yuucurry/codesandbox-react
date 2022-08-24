// お作法として react というライブラリから React をインポートする必要がある
import React from "react";
// htmlにコンポーネントを反映する必要があるのでそれに必要な ReactDom をインポートする
import ReactDom from "react-dom";
import App from "./App";

// App関数を画面に反映する記述
// ReactDom.render（Appをコンポーネントとして反映する（タグのように書く）, どこに反映するかを指定）
ReactDom.render(<App />, document.getElementById("root"));
