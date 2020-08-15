import React from "react";
import ReactDOM from "react-dom";
const img1 ="https://picsum.photos/200";
const img2 ="https://picsum.photos/200";
const img3 ="https://picsum.photos/200";
const link ="https://getbootstrap.com/docs/4.0/getting-started/introduction/"
ReactDOM.render(
  <>
  <h1>Welcome to Abhay Image</h1>
  <img src={img1} alt = "imgae"/>
  <img src={img2} alt = "imgae"/>
  <a href={link}>
    <img src={img3} alt = "imgae"/>
  </a>
  </>,
  document.getElementById("root")
);
