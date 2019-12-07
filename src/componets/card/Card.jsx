import React from "react";
import "./Card.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180&bgset=bg1`}
        alt="monster"
      />
      <h2> {props.monster.name} </h2>
      <p>{props.monster.email} </p>
      <small>{props.monster.website}</small>
    </div>
  );
};
