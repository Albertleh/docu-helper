import React from "react";

const ButtonElement = (props) => {
  const ClickHelper = () => {
    props.onSelect(props.text);
  }
  
  var disabledStyles = '';
  if ( props.disable === true ) {
    disabledStyles = ' brightness-50'
  } 

  return (
    <button className="button rounded-xl" onClick={ClickHelper} disabled={props.disable}>
      <img className={"mood-image" + disabledStyles} src={props.icon} alt="Icon" disabled={props.disable} />
      <h3 className={"mood-text" + disabledStyles} disabled={props.disable}>
        {props.text}
      </h3>
    </button>
  );
};

export default ButtonElement;