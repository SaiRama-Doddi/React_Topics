import React from "react";
import "./styles.css";
import Avatar, { Phone, Email } from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Phone phone={props.phone} />
        <Email email={props.email} />
      </div>
    </div>
  );
}

export default Card;
