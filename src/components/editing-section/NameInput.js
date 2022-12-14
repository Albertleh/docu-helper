import React, { useContext, useRef, useState } from "react";
import { nameContext } from "../../Helpers/Context";

const NameInput = () => {

  const inputref = useRef(null);
  const { setName } = useContext(nameContext);
  const [ nameValid, setNameValid ] = useState(undefined);

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
  } else {
    validstyles = ' border-2 border-gray-500 text-gray-500'
    validtextstyles = ' text-gray-500'
  }
 
  return (
    <div className="sm:my-7 sm:ml-10 text-2xl sm:text-lg text-white flex flex-col sm:flex-row sm:justify-center items-center sm:items-center  ">
      <span className={"text-xl container mb-5 sm:mb-0" + validtextstyles}>Name des Klienten:</span>
      <input ref={inputref} type="text" onChange={NameConfirmHandler} 
        className={"container py-1 px-3 mb-5 sm:mb-0 rounded-xl text-gray-900" + validstyles}/>
    </div>
  );
};

export default NameInput;
