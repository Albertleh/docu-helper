import React from "react";

const Background = (props) => {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="bg-slate-900 h-auto p-5">
        {props.children}
      </div>
    </div>
  );
};

export default Background;
