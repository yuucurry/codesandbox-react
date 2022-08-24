import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage"; // ← 通常のexportのやり方。分割代入をする必要がある default exportは一つのファイルで一つしかできない
// reactでは関数を使って画面の要素であるコンポーネントを表現できるので、アロー関数を作成
// javascript の中で html のタグを書いていくことを JSX 記法という
// JSX 記法のルールで html のタグは一つに囲わなければならないというルールがある
// 一つに囲う際、余分に div タグを作成して囲ってしまうと余分な要素ができてしまうので、そうさせないために React.Fragmentを使って囲うか空のタグ（<>）で囲う
// コンポーネントに対して引数のようなものをProps、コンポーネントが持っている条件によって動的に変わる状態のことをStateという
// コンポーネントの再レンダリングが起こる条件：1、Stateを変更したとき、2、props の中身が変わったとき、3、親のコンポーネントが再レンダリングされたとき（ColorfulMessageのコンポーネントを変更するとAppコンポーネントもレンダリングされる）
const App = () => {
  console.log("最初");
  // State の中から使っていく変数を定義↓ Stateとして使用する変数名, State を変更するための関数名
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  // カウント関数
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // 顔文字の表示切り替え関数
  const onClickSwitchShowFlag = () => {
    // !マークをつけると初期値の値を反対にすることができる
    setfaceShowFlag(!faceShowFlag);
  };

  // 変数の状況に応じてなにか処理をする num に変更があるときだけ実行
  useEffect(() => {
    console.log("useEffect!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
    // useEffectを使うときはその中で使われているすべての変数を配列に入れたほうがいい（eslint）
    // しかし、今回はfaceShowFlagには関心を持たせたくないのでnumだけにしたい
    // ページの一番上に/* eslint react-hooks/exhaustive-deps: off */ // ← eslintのエラーをこのファイルだけ無視  ↓ eslintのエラーを次の行だけ無視
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    // 論理演算子 && は左側がtrueだったら右側を返す
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">おげんきですか</ColorfulMessage>
      <ColorfulMessage color="pink">げんきです</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

// App関数を他のファイルでも使用する指定
export default App;
