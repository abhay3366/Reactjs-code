import React from "react";
import  {Sum,Multiplication} from "./Calc";
function App(){
 return(
    <>
      <span>Sum of number = {Sum(5,8)} <br></br></span>
      <span>Multiplication of number = {Multiplication(5,8)}</span>
    </>
);
}
export default App;