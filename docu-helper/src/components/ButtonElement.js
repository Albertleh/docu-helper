import React from "react";

const ButtonElement = (props) => {
  return (
    <button class="button">
      <img class="mood-image" src={props.icon} alt="Klient Avatar"></img>
      <h3 class="mood-text">
        <a href="#">{props.text} </a>
      </h3>
    </button>
  );
};

export default ButtonElement;
