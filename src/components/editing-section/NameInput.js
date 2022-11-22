import React, { useContext, useRef, useState } from "react";
import { nameContext } from "../../Helpers/Context";

const NameInput = () => {

  const inputref = useRef(null);
  const { setName } = useContext(nameContext);
  const [nameValid, setNameValid] = useState(undefined);

  const NameConfirmHandler = () => {
    if (inputref.current.value == '') {
      setNameValid(false);
      validstyles = ' focus:ring-red-500 text-red-500'
    } else {
      setName(inputref.current.value);
      setNameValid(true);
      validstyles = ' focus:ring-green-500 text-green-500'
    }
  };

  let validstyles = '';
  if ( nameValid === true ) {
    validstyles = ' focus:ring-green-500 text-green-500'
  } else if ( nameValid === false ) {
    validstyles = ' focus:ring-red-500 text-red-500'
  }

  return (
    <span className="mb-3 text-lg text-white ">
      Name des Klienten:
      <input ref={inputref} type="text" className="py-1 px-2 ml-5 rounded-lg text-gray-900" />
      <button
        onClick={NameConfirmHandler}
        className={"button2" + validstyles}
      >
        Name bestätigen
      </button>
    </span>
  );
};

export default NameInput;
