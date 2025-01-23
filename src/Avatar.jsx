import React from "react";

function Avatar(props) {
  return (
    <div>
      <img className="circle-img" src={props.imgURL} alt="avatar_img" />
    </div>
  );
}

function Phone(props) {
  return (
    <div>
      <p className="info">{props.phone}</p>
    </div>
  );
}

function Email(props) {
  return (
    <div>
      <p className="info">{props.email}</p>
    </div>
  );
}

export default Avatar;
export { Phone, Email };
