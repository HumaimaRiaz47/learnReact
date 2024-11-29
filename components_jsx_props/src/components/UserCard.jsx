import React from "react";
import "./UserCard.css";
import image from "./../assets/image.jpg"

const UserCard = (props) => {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <img src={props.img} className="img"/>
      <p>
        {props.des}
      </p>
    </div>
  );
};

export default UserCard;
