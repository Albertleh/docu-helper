import React from "react";

const ButtonElement = (props) => {
  const ClickHelper = () => {
    props.onSelect(props.text);
    console.log('was clicked')
  }

  return (
    <button class="button" onClick={ClickHelper}>
      <img class="mood-image" src={props.icon} alt="Icon"></img>
      <h3 class="mood-text">
        <a href="#">{props.text} </a>
      </h3>
    </button>
  );
};

export default ButtonElement;
