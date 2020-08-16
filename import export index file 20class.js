import React from "react";
import ReactDOM from "react-dom";
import youtuber,{name,mufun} from "./App";
ReactDOM.render(
  <>
    <ol>
      <li>abhay</li>
      <li>{youtuber}</li>
      <li>{name}</li>
      <li>{mufun()}</li>
    </ol>
  </>,
  document.getElementById("root")
);