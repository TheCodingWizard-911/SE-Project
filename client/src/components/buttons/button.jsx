import React from "react";

const DefaultButton = (props) => {
  return (
    <div className="btn btn-success w-75">
      <strong>{props.text}</strong>
    </div>
  );
};

export default DefaultButton;
