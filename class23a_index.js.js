import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";
ReactDOM.render(
  <>
    <h1 className="heading">List of Image</h1>
    <Card 
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      link={Sdata[0].link}
     />

    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      link={Sdata[2].link}
    /> 
  </>

,document.getElementById("root")
)