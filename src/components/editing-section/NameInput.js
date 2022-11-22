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
    <div className="pt-5 sm:pt-4 sm:mb-3 sm:ml-5 text-2xl sm:text-lg text-white flex flex-col sm:flex-row sm:justify-center items-center sm:items-center  ">
      <span className="mb-5 sm:mb-0">Name des Klienten:</span>
      <input ref={inputref} type="text" className="py-1 px-2 mb-5 sm:mb-0 sm:ml-5 rounded-lg text-gray-900" />
      <button
        onClick={NameConfirmHandler}
        className={"button2" + validstyles }
      >
        Name bestätigen
      </button>
    </div>
  );
};

export default NameInput;
