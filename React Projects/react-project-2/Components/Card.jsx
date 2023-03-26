import React from "react";

function Card(props) {
  var batchText;
  if (props.batch === 0) {
    batchText = "SOLD OUT";
  } else if (props.country === "Online") {
    batchText = props.country;
  }

  return (
    <div className="card">
      {batchText && <div className="card-badge">{batchText}</div>}
      <img className="card-image" src={props.img} alt="" />
      <div className="card-rating">
        <img
          className="card-icon"
          width="14px"
          height="14px"
          src="https://static.vecteezy.com/system/resources/previews/013/471/634/original/red-star-icon-free-png.png"
          alt="icon"
        />
        <span className="rating"> {props.rating} </span>
        <span className="grey"> ({props.reviewCount}) </span>
        <span className="grey"> . {props.country}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}

export default Card;
