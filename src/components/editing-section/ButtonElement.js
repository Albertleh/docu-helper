import React, { useEffect, useState } from "react";

const ButtonElement = (props) => {

  const [disabledStyles, setDisabledStyles] = useState(' brightness-50');
  let enabledstyles = ''

  const ClickHelper = () => {
    props.onSelect(props.text);
    console.log(props.text.length)

    setDisabledStyles(' brightness-50');
  }

  if ( props.disable === false ) {
    enabledstyles = ' brightness-100'
  } else {
    enabledstyles = '';
  }

  return (
    <button class="button rounded-xl" onClick={ClickHelper} disabled={props.disable}>
      <img class={"mood-image" + disabledStyles + enabledstyles} src={props.icon} alt="Icon" disabled={props.disable} />
      <h3 class={"mood-text" + disabledStyles + enabledstyles} disabled={props.disable}>
        <h4 href="#">{props.text} </h4>
      </h3>
    </button>
  );
};

export default ButtonElement;
