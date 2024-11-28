import React from "react";
import "./UserCard.css";
import image from "./../assets/image.jpg"

const UserCard = () => {
  return (
    <div className="container">
      <h1>Paris</h1>
      <img src={image} className="img"/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione ea
        quas natus doloremque et nemo facere ab nam tempora, ipsam eligendi sunt
        
      </p>
    </div>
  );
};

export default UserCard;
