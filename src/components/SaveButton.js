import React from "react";

const SaveButton = ({ saveValue, onClickFunction, valShow }) => {
  const handleClick = () => {
    onClickFunction(saveValue);
  };
  return <button onClick={handleClick}>Save Current Value</button>;
};

export default SaveButton;
