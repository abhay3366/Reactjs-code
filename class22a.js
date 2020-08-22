import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card
"
ReactDOM.render(
  <>
    <Card 
      imgsrc="https://picsum.photos/id/237/200/300"
      title="picusme image"
      sname="loreum image"
      link="https://picsum.photos/id/1/5616/3744"
     />
    <Card
       imgsrc="https://picsum.photos/200/300?grayscale"
      title="picusme image"
      sname="loreum image"
      link="https://picsum.photos/id/1/5616/3744"
    />
    <Card
       imgsrc="https://picsum.photos/200/300/?blur"
      title="picusme image"
      sname="loreum image"
      link="https://picsum.photos/id/1/5616/3744"
    />
    <Card
       imgsrc="https://picsum.photos/id/870/200/300?grayscale&blur=2"
      title="picusme image"
      sname="loreum image"
      link="https://picsum.photos/id/1/5616/3744"
    />
  </>

,document.getElementById("root")
)