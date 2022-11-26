import React, { useContext, useRef, useState } from "react";
import { nameContext } from "../../Helpers/Context";

const NameInput = () => {

  const inputref = useRef(null);
  const { setName } = useContext(nameContext);
  const [nameValid, setNameValid] = useState(undefined);

  const NameConfirmHandler = () => {
    if (inputref.current.value === '') {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
    setName(inputref.current.value.trim());
  };

  let validstyles = '';
  let validtextstyles = '';
  if ( nameValid === true ) {
    validstyles = ' border-2 border-green-500 text-green-500'
    validtextstyles = ' text-green-500'
  } else if ( nameValid === false ) {
    validstyles = ' border-2 border-gray-500 text-gray-500'
    validtextstyles = ' text-gray-500'
  }

  return (
    <div className="pt-5 sm:pt-6 sm:mb-5 sm:ml-5 text-2xl sm:text-lg text-white flex flex-col sm:flex-row sm:justify-center items-center sm:items-center  ">
      <span className={"mb-5 sm:mb-0" + validtextstyles}>Name des Klienten:</span>
      <input ref={inputref} type="text" onChange={NameConfirmHandler} 
        className={"container py-1 px-3 sm:px-2 mb-5 sm:mb-0 sm:ml-5 rounded-lg text-gray-900" + validstyles}/>
    </div>
  );
};

export default NameInput;
