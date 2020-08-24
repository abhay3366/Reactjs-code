import React from "react";
function Card(props)
{
  return(
    <>
      <div className="container">
        <div className="cards">
          <div className="img">
          <img 
            src={props.imgsrc}
            className="image"
          />
          </div>
          <div className="title"><h1>Card of image  </h1></div>
          <div className="des">
          <p>Unspalsh Image</p>
            <button>link</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card;