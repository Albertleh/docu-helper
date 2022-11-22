import React from "react";

const ButtonElement = (props) => {
  const ClickHelper = () => {
    props.onSelect(props.text);
    console.log('was clicked')
  }

  let disabledStyles = '';
  if ( props.disable === true ) {
    disabledStyles = ' brightness-50'
  } 

  return (
    <button class="button" onClick={ClickHelper} disabled={props.disable}>
      <img class={"mood-image" + disabledStyles} src={props.icon} alt="Icon" disabled={props.disable} />
      <h3 class={"mood-text" + disabledStyles} disabled={props.disable}>
        <a href="#">{props.text} </a>
      </h3>
    </button>
  );
};

export default ButtonElement;
