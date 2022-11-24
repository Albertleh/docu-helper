import React from "react";

const ButtonElement = (props) => {

  var disabledStyles = '';

  const ClickHelper = () => {
    props.onSelect(props.text);
  }

  if ( props.disable === true ) {
    disabledStyles = ' brightness-50'
  } 



  return (
    <button class="button rounded-xl" onClick={ClickHelper} disabled={props.disable}>
      <img class={"mood-image" + disabledStyles} src={props.icon} alt="Icon" disabled={props.disable} />
      <h3 class={"mood-text" + disabledStyles} disabled={props.disable}>
        <h4 href="#">{props.text} </h4>
      </h3>
    </button>
  );
};

export default ButtonElement;
