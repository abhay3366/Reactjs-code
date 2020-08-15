import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const cssStyle={
  fontSize:25,
  paddingLeft:18,
  paddingTop:18,
  
}
const cssStyle2 = {
  color:"green",
  fontSize:25,
  paddingLeft:15,
  paddingTop:18,
}
let greeting ="";
const currentTime = new Date().getHours();
if(currentTime >=1 && currentTime<=12){
  greeting="Gud morning";
  
}
else if(currentTime >=12 && currentTime<=19){
  greeting="Gud afternoon";
  cssStyle.color="red";
}
else{
  greeting="Gud night";
  cssStyle.color="black";
}
ReactDOM.render(
<>
  <div className="body">
    <div className="box">
      <p><span style={cssStyle2}>Hello Sir</span> <span style={cssStyle}>{greeting}</span></p>
    </div>
  </div>
</>,
  document.getElementById("root")
);
