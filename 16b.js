import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "Abhay"
const img1 ="https://picsum.photos/200";
const img2 ="https://picsum.photos/200";
const img3 ="https://picsum.photos/200";
const link ="https://getbootstrap.com/docs/4.0/getting-started/introduction/";
const header ={
  color:"red",
  fontSize:50,
}
ReactDOM.render(
  <>
   <h1 style ={header}> name={name}</h1>
  <h1>Welcome to Abhay Image</h1>
 
  <div className="img_div">
    <img src={img1} alt = "imgae"/> 
    <img src={img2} alt = "imgae"/>
    <a href={link}>
     <img src={img3} alt = "imgae"/>
    </a>
  </div>
  
  </>,
  document.getElementById("root")
);
