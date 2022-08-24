import React from "react";

export const ColorfulMessage = (props) => {
  // props を分割代入にして書き方が煩雑にならないようにする
  const { color, children } = props;
  const contentStyle = {
    color: color, //← javascriptではプロパティ名と変数名が同じ場合省略できる
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
